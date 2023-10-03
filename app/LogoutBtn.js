"use client";

import { signOut } from "next-auth/react";

export default function LogOutBtn() {
  return (
    <button
      style={{ cursor: "pointer" }}
      onClick={() => {
        signOut();
      }}
    >
      Logout
    </button>
  );
}
