"use client";
import { signIn, signOut, useSession } from "next-auth/react";
export default function Appbar() {
  const session = useSession();
  return (
    <>
      <button
        onClick={() => {
          signIn();
        }}
      >
        {" "}
        Sign in{" "}
      </button>
      <button
        onClick={() => {
          signOut();
        }}
      >
        {" "}
        Sign out{" "}
      </button>
      {JSON.stringify(session)}
    </>
  );
}
