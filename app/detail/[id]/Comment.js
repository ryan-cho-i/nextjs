'use client';

import { useEffect, useState } from 'react';

export default function Comment(props) {
  let [comment, setComment] = useState('');

  useEffect(() => {
    fetch('/URL')
      .then((r) => r.json())
      .then((result) => {});
  }, []);

  return (
    <div>
      <div>Comment</div>
      <input
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <button
        onClick={() => {
          fetch('/api/comment/new', {
            method: 'POST',
            body: JSON.stringify({ comment: comment, _id: props._id }),
          });
        }}
      >
        Submit
      </button>
    </div>
  );
}
