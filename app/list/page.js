import { connectDB } from "@/util/database";

export default async function List() {
  const db = (await connectDB).db("forum");
  let results = await db.collection("post").find().toArray();
  return (
    <div className="list-bg">
      {results.map((result) => {
        return (
          <div className="list-item">
            <h4>{result.title}</h4>
            <p>{result.content}</p>
          </div>
        );
      })}
    </div>
  );
}
