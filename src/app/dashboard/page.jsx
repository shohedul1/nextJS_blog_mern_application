"use client";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Dashboard = () => {
  const session = useSession();

  const router = useRouter();

  //NEW WAY TO FETCH DATA
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name,
        }),
      });
      mutate();
      e.target.reset()
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (err) {
      console.log(err);
    }
  };

  if (session.status === "authenticated") {
    return (
      <div className={"flex flex-col lg:flex-row gap-[100px] mt-40"}>
        <div className={"flex-1"}>
          {isLoading
            ? "loading"
            : data?.map((post) => (
              <div className={"flex items-center gap-5 m-20 lg:flex-row flex-col  "} key={post._id}>
                <div className="w-[300px] h-[200px]">
                  <Image src={post.img} alt="image" width={500} height={500} className="w-full h-full" />
                </div>
                <div>
                  <h2 >{post.title}</h2>
                  <span
                    className={"cursor-pointer text-red-500"}
                    onClick={() => handleDelete(post._id)}
                  >
                    X
                  </span>
                </div>
              </div>
            ))}
        </div>
        <form className={"flex-1 flex flex-col gap-5 "} onSubmit={handleSubmit}>
          <h1>Add New Post</h1>
          <input type="text" placeholder="Title"
            className={"p-2.5  bg-transparent rounded text-xl font-bold text-[#bbb] border border-[#bbb] "} />
          <input type="text" placeholder="Desc" className={"p-2.5  bg-transparent rounded text-xl font-bold text-[#bbb] border border-[#bbb]"} />
          <input type="text" placeholder="Image" className={"p-2.5  bg-transparent rounded text-xl font-bold text-[#bbb] border border-[#bbb]"} />
          <textarea
            placeholder="Content"
            className={"p-2.5  bg-transparent rounded text-xl font-bold text-[#bbb] border border-[#bbb]"}
            cols="30"
            rows="10"
          ></textarea>
          <button type="submit" className={"font-bold text-[#eee] p-5 border-none bg-[#53c28b] cursor-pointer"}>Send</button>
        </form>
      </div>
    );
  }
};

export default Dashboard;