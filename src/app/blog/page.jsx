import React from "react";
import Link from "next/link";
import Image from "next/image";

async function getData() {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();
  console.log("SHOHI", data);
  return (
    <div>
      {data.map((item) => (
        <Link href={`/blog/${item._id}`} key={item._id} className={"flex gap-[50px] mt-[50px] mb-[100px] flex-col lg:flex-row"}>
          <div className="flex-2 lg:flex-1">
            <Image
             width={500}
             height={500}
             className="w-full h-full object-contain"
             src={item.img}
             alt="image" />
            
          </div>
          <div className="flex-1">
            <h1 className={"mb-[10px]"}>{item.title}</h1>
            <p className={"text-xl text-gray-400"}>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
