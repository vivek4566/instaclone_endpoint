# User

## Operations

### createQuestion

```http
POST /createQuestion
```

CreateQuestion

### deleteQuestion

```http
DELETE /deleteQuestion/{ques_id}
```

deleteQuestion

### getQuestion

```http
GET /getQuestion
```

GetQuestion

### updateQuestion

```http
PUT /UpdateQuestion/{ques_id}
```

UpdateQuestion

## Implementation

This is an example of the API implementation to use to update the actual API implementation
when the API structure has changed.

```typescript
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
```
