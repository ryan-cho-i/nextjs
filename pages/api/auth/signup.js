import { connectDB } from "@/util/database";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  if (req.method == "POST") {
    if (req.body.name && req.body.email && req.body.password) {
      req.body.password = await bcrypt.hash(req.body.password, 10);
      let db = (await connectDB).db("forum");
      await db.collection("user_cred").insertOne(req.body);
      return res.status(200).json("Success Register");
    } else {
      return res.status(404).json("Don't leave blank");
    }
  }
}
