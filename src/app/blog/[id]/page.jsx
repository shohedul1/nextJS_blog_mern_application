
import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound()
  }

  return res.json();
}

export async function generateMetadata({ params }) {

  const post = await getData(params.id)
  return {
    title: post.title,
    description: post.desc,
  };
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div>
      <div className={"flex gap-[50px] mt-[50px] mb-[100px] flex-col lg:flex-row"} >
        <div className={"flex-2 lg:flex-1 flex-col gap-5  justify-center"}>
          <h1 className={"text-5xl"}>
            {data.title}
          </h1>
          <p className={"text-xl font-normal"}>
            {data.desc}
          </p>
          <div className={"flex items-center gap-2.5"}>
            <Image
              src={data.img}
              alt="image"
              width={40}
              height={40}
              className={"object-cover rounded-full"}
            />
            <span>
              {data.username}
            </span>
          </div>
        </div>
        <div className={"flex-1 h-[500px] relative"}>
          <Image
            width={500}
            height={500}
            className="w-full h-full object-contain"
            src={data.img}
            alt="image" />
        </div>
      </div>
      <div className={"mt-[50px] text-xl font-normal text-gray-300 text-justify"}>
        <p>
          {data.content}
        </p>
      </div>
    </div>
  );
};
export default BlogPost;