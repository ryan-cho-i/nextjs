import { connectDB } from "@/util/database";
import Link from "next/link";

export default async function List() {
  const db = (await connectDB).db("forum");
  let results = await db.collection("post").find().toArray();
  return (
    <div className="list-bg">
      {results.map((result) => {
        return (
          <div className="list-item">
            <Link href={`/detail/${result._id}`}>
              <h4>{result.title}</h4>
            </Link>
            <Link href={`/edit/${result._id}`}>📝</Link>
            <p>{result.content}</p>
          </div>
        );
      })}
    </div>
  );
}
