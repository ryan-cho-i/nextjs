import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  // Check Login
  let session = await getServerSession(req, res, authOptions);
  if (session) {
    req.body.author = session.user.email;
  } else {
    return res.status(500).json("Please Login!");
  }

  if (req.method == "POST") {
    if (req.body.title == "") {
      return res.status(500).json("Type title");
    } else if (req.body.content == "") {
      return res.status(500).json("Type content");
    }
    try {
      const db = (await connectDB).db("forum");
      await db.collection("post").insertOne(req.body);
      return res.redirect(302, "/list");
    } catch (err) {
      console.log(err);
      return res.status(404);
    }
  }
}
