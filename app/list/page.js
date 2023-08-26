import { connectDB } from "@/util/database";
import ListItem from "./ListItem";

export default async function List() {
  const db = (await connectDB).db("forum");
  let results = await db.collection("post").find().toArray();
  return (
    <div className="list-bg">
      {results.map((result) => {
        return <ListItem result={result} />;
      })}
    </div>
  );
}
