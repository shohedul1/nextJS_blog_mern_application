import React from "react";
import Image from "next/image";
import Button from "@/components/Button/Button";

export const metadata = {
  title: "Lama Dev Contact Information",
  description: "This is Contact Page",
};

const Contact = () => {
  return (
    <div >
      <h1 className={"text-6xl mb-[100px] text-center"}>Let&copy;s Keep in Touch</h1>
      <div className={"flex items-center gap-[100px] flex-col lg:flex-row"}>
        <div className={"flex-1 h-[500px] relative"}>
          <Image
            src="/contact.png"
            alt=""
            fill={true}
            className={"object-contain"}
          />
        </div>
        <form className={"flex-1 flex flex-col gap-5 "}>
          <input type="text" placeholder="name" className={"p-5 bg-gray-500 border-none outline-none text-[#bbb] border-gray-300 text-xl font-bold"} />
          <input type="text" placeholder="email" className={"p-5 bg-gray-500 border-none outline-none text-[#bbb] border-gray-300 text-xl font-bold"} />
          <textarea
            className={"p-5 bg-gray-500 border-none  outline-none text-[#bbb] border-gray-300 text-xl font-bold"}
            placeholder="message"
            cols="30"
            rows="10"
          ></textarea>
          <Button url="#" text="Send"/>
        </form>
      </div>
    </div>
  );
};

export default Contact;
