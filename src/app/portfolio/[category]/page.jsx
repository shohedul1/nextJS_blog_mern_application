import React from "react";
import Button from "../../../components/Button/Button";
import Image from "next/image";
import { items } from "./data.js";
import { notFound } from "next/navigation";

const getData = (cat) => {
  const data = items[cat];
  if (data) {
    return data;
  }
  return notFound();
};

const Category = ({ params }) => {
  const data = getData(params.category);
  return (
    <div >
      <h1 className={"text-[#53c28b]"}>{params.category}</h1>

      {data.map((item) => (
        <div className={"flex gap-[50px] mt-[50px] mb-[100px] flex-col lg:flex-row"} key={item.id}>
          <div className={"flex-2 lg:flex-1 flex-col gap-5  justify-center"}>
            <h1 className={"text-5xl"}>{item.title}</h1>
            <p className={"text-xl"}>{item.desc}</p>
            <Button text="See More" url="#" />
          </div>
          <div className={"flex-1 h-[500px] relative"}>
            <Image
              width={500}
              height={500}
              priority
              property="true"
              className="w-full h-full object-contain"
              src={item.image}
              alt="image"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
