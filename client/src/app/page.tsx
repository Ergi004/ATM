import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { HeroBanner } from "@/components/HeroBanner/HeroBanner";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative z-20">
        <HeroBanner />
        <Image
          width={1300}
          height={1000}
          className="absolute -z-10 opacity-15 max-sm:top-[600px] -rotate-[67deg] -left-20 sm:-left-96 md:-left-[450px]  top-52 sm:top-80 md:top-80"
          src="/images/bg.png"
          alt=""
        />
      </main>
      <Footer />
    </>
  );
}
