"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4 bg-gradient-to-bl from-slate-100 via-slate-300 to-slate-400">
      <div className="flex items-center gap-4">
        <Image
          src="/icons/crossed-swords_2694-fe0f.png"
          width={100}
          height={100}
          alt="icon"
        />
        <h1 className="text-6xl font-extrabold">Run Insights</h1>
      </div>
      <p className="text-lg">
        This is a project to analyze running stats with Oracle DMBS
      </p>
      <Button
        variant={"strava"}
        onClick={() => {
          router.push("/overview");
        }}
      >
        Start with Strava
      </Button>
    </div>
  );
};

export default Home;
