import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method == "POST") {
    if (req.body.title == "") {
      return res.status(500).json("Type title");
    } else if (req.body.content == "") {
      return res.status(500).json("Type content");
    }
    console.log(req.body);
    try {
      const db = (await connectDB).db("forum");
      const result = await db
        .collection("post")
        .updateOne(
          { _id: new ObjectId(req.body._id) },
          { $set: { title: req.body.title, content: req.body.content } }
        );
      console.log(result);
      return res.redirect(302, "/list");
    } catch (err) {
      console.log(err);
      return res.status(404);
    }
  }
}
