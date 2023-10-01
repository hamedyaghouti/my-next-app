"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Login() {
  const { data: sessionData } = useSession();
  return (
    <div>
      {sessionData && (
        <div className="bg-red-100">Logged in as {sessionData.user?.email}</div>
      )}
      <button
        onClick={() => {
          sessionData ? signOut() : signIn();
        }}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
}
