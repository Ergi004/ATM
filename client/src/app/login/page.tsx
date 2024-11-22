"use client";

import React from "react";
import Image from "next/image";

import { Login } from "@/components/Login/Login";
import { Footer } from "@/components/Footer/Footer";

const LoginPage = () => {
  return (
    <>
      <Image
        width={1300}
        height={1000}
        className="absolute -z-10 opacity-15 max-sm:top-[600px] -rotate-[45deg] -left-20 sm:-left-96 md:-left-80  top-52 sm:top-80 md:-top-44"
        src="/images/bg.png"
        alt=""
      />
      <div className="flex min-h-screen px-6 container mx-auto">
        <Login />
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
