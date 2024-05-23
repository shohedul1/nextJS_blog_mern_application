import React from "react";
import Link from "next/link";

const Button = ({ text, url }) => {
  return (
    <Link href={url}>
      <button className={"p-5 cursor-pointer bg-[#53c28b] border-none rounded-sm w-max text-white"}>{text}</button>
    </Link>
  );
};

export default Button;