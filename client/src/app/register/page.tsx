import { Register } from "@/components/Register/Register";
import React from "react";
import Image from "next/image";
import { Footer } from "@/components/Footer/Footer";

const page = () => {
  return (
    <>
      <Image
        width={1600}
        height={1000}
        className="absolute -z-10 opacity-15 max-sm:top-[600px] -rotate-[45deg] -left-20 sm:-left-96 md:-left-80  top-52 sm:top-80 md:-top-44"
        src="/images/bg.png"
        alt=""
      />
      <div className="flex min-h-screen container mx-auto px-6">
        <Register />
      </div>
      <Footer />
    </>
  );
};

export default page;
