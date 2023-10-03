import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  if (req.method == "DELETE") {
    let session = await getServerSession(req, res, authOptions);

    const db = (await connectDB).db("forum");

    let info = await db
      .collection("post")
      .findOne({ _id: new ObjectId(req.body) });

    if (session && info.author == session.user.email) {
      await db.collection("post").deleteOne({ _id: new ObjectId(req.body) });
      return res.status(200).json("Successfully Delete");
    } else {
      return res.status(500).json("Mismatch between current user and author");
    }
  }
}
