"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Link from "next/link";
import NewRunModal from "../NewRunModal";
import { useState } from 'react';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
    <nav className="flex items-center justify-between border-b-4 border-blue-600 bg-blue-300 px-4 py-2">
      <div className="flex items-center space-x-4">
        <h1 className="flex flex-row-reverse items-center gap-4 text-3xl font-bold text-black ">
          Run Insights
          <Link href="/overview">
            <Image
              src="/icons/crossed-swords_2694-fe0f.png"
              width={40}
              height={40}
              alt="icon"
            />
          </Link>
        </h1>
      </div>
      <div className="flex items-center space-x-2">
      <button onClick={openModal} className="bg-[#fc4c02] text-white px-4 py-2 rounded">
            Add New Run
          </button>

        <div className="flex flex-col items-end ">
          <h1 className="text-base font-bold text-strava ">Moncef Moussaoui</h1>
          <p className="text-xs">@moncefon</p>
        </div>

        <Avatar className="size-10 ring-0 ring-strava transition-all delay-150 ease-in-out hover:ring-4">
          <AvatarImage
            src="https://avatars.githubusercontent.com/MoncefME"
            alt="@MoncefME"
          />
          <AvatarFallback>MM</AvatarFallback>
        </Avatar>
      </div>
    </nav>
    <NewRunModal isOpen={isModalOpen} onClose={closeModal} />
    </>

  );
};

export default Navbar;
