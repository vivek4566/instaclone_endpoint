import {DeleteQuestionResponse,GetQuestionResponse, UpdateQuestionResponse, UserApi, CreateQuestionResponse} from "../../../dict/api/user/types";
import { Api } from "../../../dict/models";
import {collections} from '../../../src/admin/types'



export class UserApiImpl implements UserApi {
    getQuestion(): Promise<GetQuestionResponse>  {
        return new Promise<GetQuestionResponse>((resolve,reject)=>{
            collections.users!.find({}).toArray(function (err: any,result:any){
                if(err) {
                    const response=<GetQuestionResponse>{
                        status: 400,
                       body:{message: `something went wrong`},
                    }
                    resolve(response)                   
                }
                const response=<GetQuestionResponse>{
                    status:201,
                    body: result
                }
                resolve(response)    
            })  
        })   
    }
deleteQuestion(ques_id:number):Promise<DeleteQuestionResponse>{
    return new Promise<DeleteQuestionResponse>((resolve,reject)=>{
        collections.users!.deleteOne(
            {ques_id:ques_id},
            function(err: any,result: any){
                if(err){
                    const response=<DeleteQuestionResponse>{
                        status:400,
                        body:{message:`someting went wrong`}
                    }
                    resolve(response)
                }
                const response=<DeleteQuestionResponse>{
                   status:201,
                    body:{
                        message:`delete Question Sucessfully`
                    }
                }
                resolve(response)
            }
        )
        
    })
 }
 updateQuestion(ques_id: number, request: Api.BODYDATA | undefined) : Promise<UpdateQuestionResponse>
 {
    return new Promise<UpdateQuestionResponse>((resolve,reject)=>{
        collections.users!.updateOne(
            {ques_id:ques_id},
            {$set:request},
            function(err:any,result: any){
                if(err){
                    const response=<UpdateQuestionResponse>{
                        status: 400,
                        body:{message:`Somting Went Wrong`}
                    }
                    resolve(response)
                }
                const response=<UpdateQuestionResponse>{
                    status:201,
                    body:{message:`Update Question Sucessfully`}
                }
                resolve(response)
               
            }    
        )

    })
 }
 createQuestion(request: Api.BODYDATA | undefined): Promise<CreateQuestionResponse>
 {
    return new Promise<UpdateQuestionResponse>((resolve,reject)=>{
        collections.users!.findOne(
            {ques_id:request?.ques_id},
            function(err:any,result:any){
                if(result){
                    const response=<UpdateQuestionResponse>{
                        status:400,
                        body:{message:`User Already Created`}
                    }
                    resolve(response)
                }
                else{
                    collections.users!.insertOne(
                        {ques_id:request?.ques_id,topic_id:request?.topic_id,question:request?.question,option1:request?.option1,option2:request?.option2,option3:request?.option3,option4:request?.option4},
                        function(err:any,result:any){
                          if(err){
                            const response=<UpdateQuestionResponse>{
                                status:400,
                                body:{message:`Someting Went Wrong`}
                            }
                            resolve(response)
                          }
                          else{
                            const response=<UpdateQuestionResponse>{
                                status:201,
                                body:{message:`Create Question Sucessfuly`}
                            }
                            resolve(response)
                          }
                            
                        }

                    )
                }
            }
        )
    })
 }
}
