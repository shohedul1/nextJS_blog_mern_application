import React from "react";
import Link from "next/link";
import Image from "next/image";

const Portfolio = () => {
  return (
    <div>
      <h1 className={"px-5 text-2xl font-bold text-center"}>Choose a gallery</h1>
      <div className={"flex gap-[50px] flex-col lg:flex-row items-center justify-center"}>
        <Link href="/portfolio/applications" className={" border border-gray-200 w-[300px] h-[400px] relative"}>
          <Image src={"/illustration.png"} width={500} height={500} priority property="true" className="w-full h-full" />
          <span className={"absolute right-2.5 bottom-2.5 text-5xl font-bold"}>Illustrations</span>
        </Link>
        <Link href="/portfolio/illustrations" className={"item  border border-gray-200 w-[300px] h-[400px] relative"}>
        <Image src={"/websites.jpg"} width={500} height={500} priority property="true" className="w-full h-full" />
          <span className={"absolute right-2.5 bottom-2.5 text-5xl font-bold"}>Websites</span>
        </Link>
        <Link href="/portfolio/websites" className={"item  border border-gray-200 w-[300px] h-[400px] relative bg-cover"}>
        <Image src={"/apps.jpg"} width={500} height={500} className="w-full h-full" />
          <span className={"absolute right-2.5 bottom-2.5 text-5xl font-bold"}>Application</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
