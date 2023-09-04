import * as mongoDB from "mongodb"

export const collections:{users?: mongoDB.Collection}={}

export async function connectToDatabase() {
    const client:mongoDB.MongoClient=new mongoDB.MongoClient("mongodb+srv://vivek12345:vivek12345@cluster0.zi5ctsy.mongodb.net/")

    await client.connect()

    const db:mongoDB.Db=client.db("db4")
    
    const users:mongoDB.Collection=db.collection("user1")

    collections.users=users
}