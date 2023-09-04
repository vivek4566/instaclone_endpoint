import * as t from '../api/user/types'
import { Api } from '../models'

async function createuser(request: Api.BODYDATA | undefined): Promise<t.CreateuserResponse> {
	throw 'Unimplemented'
}


const api: t.UserApi = {
	createuser,
}

export default api
