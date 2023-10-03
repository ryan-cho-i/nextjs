import { MongoClient } from "mongodb";

let connectDB;

const URL =
  "mongodb+srv://soo:12341@rtb.e20asj4.mongodb.net/forum?retryWrites=true&w=majority";

if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(URL).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(URL).connect();
}
export { connectDB };
