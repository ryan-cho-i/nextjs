"use client";

import Link from "next/link";

export default function ListItem(props) {
  return (
    <div className="list-item">
      <Link href={`/detail/${props.id}`}>
        <h4>{props.title}</h4>
      </Link>
      <Link href={`/edit/${props.id}`}>📝</Link>

      <span
        onClick={(e) => {
          fetch("/api/post/delete", {
            method: "DELETE",
            body: props.id,
          }).then(() => {
            e.target.parentElement.style.opacity = 0;
            setTimeout(() => {
              e.target.parentElement.style.display = "none";
            }, 1000);
          });
        }}
      >
        🚮
      </span>
      <p>{props.content}</p>
    </div>
  );
}
