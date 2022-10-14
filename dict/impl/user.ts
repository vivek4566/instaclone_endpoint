import * as t from '../api/user/types'
import { Api } from '../models'

async function createQuestion(request: Api.BODYDATA | undefined): Promise<t.CreateQuestionResponse> {
	throw 'Unimplemented'
}

async function deleteQuestion(quesId: number): Promise<t.DeleteQuestionResponse> {
	throw 'Unimplemented'
}

async function getQuestion(): Promise<t.GetQuestionResponse> {
	throw 'Unimplemented'
}

async function updateQuestion(quesId: number, request: Api.BODYDATA | undefined): Promise<t.UpdateQuestionResponse> {
	throw 'Unimplemented'
}


const api: t.UserApi = {
	createQuestion,
	deleteQuestion,
	getQuestion,
	updateQuestion,
}

export default api
