"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";

const Login = ({ url }) => {
  const session = useSession();
  const router = useRouter();
  const params = useSearchParams();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    setError(params.get("error"));
    setSuccess(params.get("success"));
  }, [params]);

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", {
      email,
      password,
    });
  };

  return (
    <div className={"flex flex-col  gap-5 items-center justify-center"}>
      <h1>{success ? success : "Welcome Back"}</h1>
      <h2>Please sign in to see the dashboard.</h2>

      <form onSubmit={handleSubmit} className={"w-[300px] flex flex-col gap-5"}>
        <input
          type="text"
          placeholder="Email"
          required
          className={"p-5 bg-transparent border border-[#bbb] font-bold rounded text-xl"}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className={"p-5 bg-transparent border border-[#bbb] font-bold rounded text-xl"}
        />
        <button type="submit" className={"w-[300px] p-5 font-bold text-[#eee] rounded-sm cursor-pointer border-none bg-[#53c28b]"}>
          Login
        </button>
        {error && error}
      </form>
      <button
        onClick={() => {
          signIn("google");
        }}
        className={"w-[300px] p-5 font-bold text-[#eee] rounded-sm cursor-pointer border-none bg-[#7cc253]"}
      >
        Login with Google
      </button>
      <span >- OR -</span>
      <Link href="/dashboard/register">
        Create new account
      </Link>
    </div>
  );
};

export default Login;