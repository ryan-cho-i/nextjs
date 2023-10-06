'use client';

import { useState } from 'react';

export default function Comment() {
  let [comment, setComment] = useState('');
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
          fetch('/URL', {
            method: 'POST',
            body: comment,
          });
        }}
      >
        Submit
      </button>
    </div>
  );
}
