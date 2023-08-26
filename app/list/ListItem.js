"use client";

import Link from "next/link";

export default async function ListItem(props) {
  return (
    <div className="list-item">
      <Link href={`/detail/${props.result._id}`}>
        <h4>{result.title}</h4>
      </Link>
      <Link href={`/edit/${props.result._id}`}>📝</Link>

      <span
        onClick={() => {
          fetch("/api/post/delete", {
            method: "DELETE",
          });
        }}
      >
        🚮
      </span>
      <p>{result.content}</p>
    </div>
  );
}
