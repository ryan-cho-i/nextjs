import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  if (req.method == "DELETE") {
    const db = (await connectDB).db("forum");
    let result = await db.collection("post").deleteOne({_id: ??})
    res.status(200).json("Successfully Delete")
  }
}
