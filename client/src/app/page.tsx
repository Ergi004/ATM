import { Header } from "@/components/Header/Header";
import { HeroBanner } from "@/components/HeroBanner/HeroBanner";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative z-20">
        <HeroBanner />
      </main>

      <Image
        width={2000}
        height={1000}
        className="absolute z-0 opacity-15 -rotate-[67deg] -left-96  top-64 sm:top-[450px] md:top-[650px]"
        src="/images/bg.png"
        alt=""
      />
      {/* <Image
        width={5000}
        height={1700}
        className="absolute opacity-10 z-0 -rotate-[67deg] top-64 sm:top-[450px] md:top-[650px]"
        src="/images/bg.png"
        alt=""
      /> */}
    </>
  );
}
