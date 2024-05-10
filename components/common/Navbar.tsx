import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Lightbulb } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between border-b-4 border-blue-600 bg-lime-300 px-4 py-2">
      <div className="flex items-center space-x-4">
        <h1 className="flex flex-row-reverse items-center gap-4 text-3xl font-bold text-black ">
          Run Insights
          <Image
            src="/icons/billed-cap_1f9e2.png"
            width={45}
            height={45}
            alt="icon"
          />
        </h1>
      </div>
      <div className="flex items-center space-x-2">
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
  );
};

export default Navbar;
