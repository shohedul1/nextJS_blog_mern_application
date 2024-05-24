import Image from "next/image";
import Hero from "../../public/hero.png";
import Button from "../components/Button/Button";

export default function Home() {
  return (
    <div className={"flex items-center gap-2.5 flex-col lg:flex-row mt-40"}>
      <div className={"order-2 md:order-1 flex flex-col gap-[50px]"}>
        <h1 className={"text-gradient text-7xl "}>
          Better design for your digital products.
        </h1>
        <p className={"text-2xl font-medium"}>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button url="/portfolio" text="See Our Works"/>
      </div>
      <div className={"order-1 flex flex-col gap-[50px] "}>
        <Image src={Hero} alt="image" priority property="true" className={'w-full h-[500px] object-contain'} />
      </div>
    </div>
  );
}