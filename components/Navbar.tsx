import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { FolderSync, Lightbulb, LogInIcon } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between border-b-4 border-blue-600 bg-blue-300 px-4 py-2">
      <div className="flex items-center space-x-4">
        <h1 className="flex items-center text-xl font-bold">
          Run Insights <Lightbulb size={30} />
        </h1>
        {/* <Button variant="strava" className="flex items-center gap-2 text-sm">
          <span>Sync Strava</span>
          <FolderSync />
        </Button> */}
      </div>
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-bold ">Moncefon</h1>
        <Avatar className="hover:ring-3 ring-2 ring-strava ">
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
