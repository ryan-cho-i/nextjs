import { connectDB } from "@/util/database";
import ListItem from "./ListItem";

export const revalidate = 20

export default async function List() {
  const db = (await connectDB).db("forum");
  let results = await db.collection("post").find().toArray();
  return (
    <div className="list-bg">
      {results.map((result) => {
        return (
          <ListItem
            id={result._id.toString()}
            title={result.title}
            content={result.content}
          />
        );
      })}
    </div>
  );
}
