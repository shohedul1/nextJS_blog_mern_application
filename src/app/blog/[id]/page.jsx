import React from "react";
import Image from "next/image";

// async function getData(id) {
//   const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     return notFound()
//   }

//   return res.json();
// }


// export async function generateMetadata({ params }) {

//   const post = await getData(params.id)
//   return {
//     title: post.title,
//     description: post.desc,
//   };
// }

const BlogPost = async ({ params }) => {
  // const data = await getData(params.id);
  return (
    <div>
      <div className={"flex"}>
        <div className={"flex-1 flex-col justify-between"}>
          <h1 className={"text-5xl"}>
          {/* {data.title} */}
          developer
          </h1>
          <p className={"text-xl font-normal"}>
            {/* {data.desc} */}
            this is  shohidul from bangladesh 
          </p>
          <div className={"flex  items-center gap-2.5"}>
            <Image
              src={"/2.png"}
              alt="image"
              width={40}
              height={40}
              className={"object-cover rounded-full"}
            />
            <span>
            {/* {data.username} */}
            shohidul
            </span>
          </div>
        </div>
        <div className={"flex-1 h-[300px] relative"}>
          <Image
            src={"/1.png"}
            alt="data image"
            fill={true}
            className={"object-cover"}
          />
        </div>
      </div>
      <div className={"mt-[50px] text-xl font-normal text-gray-300 text-justify"}>
        <p>
         {/* {data.content} */}hellos
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
