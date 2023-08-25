import { MongoClient } from "mongodb";

const URL =
  "mongodb+srv://soo:12341@rtb.e20asj4.mongodb.net/?retryWrites=true&w=majority";

let connectDB;

if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(URL).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(URL).connect();
}
export { connectDB };