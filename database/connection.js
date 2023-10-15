import { MongoClient } from "mongodb";

const connectionString = "mongodb+srv://amellortizt:Ajot001*@cluster01.ux77fzl.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(connectionString);

let connectionDB;

try {
    connectionDB = await client.connect();
    console.log("CONNECTED TO MONGODB")
} catch (ex) {
    console.error(ex);
}

const database = connectionDB.db("Marketplace");

export default database;
