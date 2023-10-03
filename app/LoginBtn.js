"use client";

import { signIn } from "next-auth/react";

export default function LoginBtn() {
  return (
    <button
      style={{ cursor: "pointer" }}
      onClick={() => {
        signIn();
      }}
    >
      Login
    </button>
  );
}
