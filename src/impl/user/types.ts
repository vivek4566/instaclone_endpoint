import { response } from "express";
import { CreateuserResponse,DeleteQuestionResponse,UpdateQuestionResponse,GetQuestionResponse, UserApi} from "../../../dict/api/user/types";
import { Api } from "../../../dict/models";
import {collections} from '../../../src/admin/types'





export class UserApiImpl implements UserApi {
 
    getQuestion(): Promise<GetQuestionResponse>  {
        return new Promise<GetQuestionResponse>((resolve,reject)=>{
            collections.users!.find({}).toArray(function (err: any,result:any){
                if(err) {
                    const response=<GetQuestionResponse>{
                        status:400,
                        body:{message:`User Already Created`}
                    }
                    resolve(response)                   
                }
                const response=<GetQuestionResponse><unknown>{
                    status: 200,
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
                        body:{message:`User Already Created`}
                    }
                    resolve(response)
                }
                const response=<DeleteQuestionResponse>{
                    status:201,
                    body:{message:`Create Answer Sucessfuly`}
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
                        status:400,
                        body:{message:`User Already Created`}
                    }
                    resolve(response)
                }
                const response=<UpdateQuestionResponse>{
                    status:201,
                    body:{message:`Create Answer Sucessfuly`}
                }
                resolve(response)
               
            }    
        )

    })
 }
createuser(request: Api.BODYDATA | undefined): Promise<CreateuserResponse>
 {
    return new Promise<CreateuserResponse>((resolve,reject)=>{
        collections.users!.findOne(
            {username:request?.username},
            function(err:any,result:any){
                if(result){
                    const response=<CreateuserResponse>{
                        status:400,
                        body:{message:`User Already Created`}
                    }
                    resolve(response)
                }
                else{
                    collections.users!.insertOne(
                        {username:request?.username,password:request?.password},
                        function(err:any,result:any){
                          if(err){
                            const response=<CreateuserResponse>{
                                status:400,
                                body:{message:`Someting Went Wrong`}
                            }
                            resolve(response)
                          }
                          else{
                            const response=<CreateuserResponse>{
                                status:201,
                                body:{message:`Create Answer Sucessfuly`}
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
