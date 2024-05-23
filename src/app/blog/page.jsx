import React from "react";
import Link from "next/link";
import Image from "next/image";

// async function getData() {
//   const res = await fetch("http://localhost:3000/api/posts", {
//     cache: "no-store",
//   });
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

const Blog = async () => {
  // const data = await getData();
  return (
    <div >
      <Link href={`/blog/:id`} className={"flex items-center gap-[50px] mb-[50px]"}>
        <div className={""}>
          <Image
            src={'/apps.jpg'}
            alt="image"
            width={400}
            height={250}
            className={"object-cover"}
          />
        </div>
        <div >
          <h1 className={"mb-[10px]"}>shohidul</h1>
          <p className={"text-xl text-gray-400"}>this is a shohidul from bangladesh</p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
