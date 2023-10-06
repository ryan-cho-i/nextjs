import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import Comment from "./Comment";

export default async function Detail(props) {
  const db = (await connectDB).db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });
  return (
    <div>
      <h4>Detail Page</h4>
      <h4>{result.title}</h4>
      <h4>{result.content}</h4>
      <Comment/>
          <div></div>
    </div>
  );
}
