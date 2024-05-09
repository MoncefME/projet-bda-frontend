import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Timer } from "lucide-react";
import Image from "next/image";

const TotalDistanceCard = ({ totalDistance }: { totalDistance: number }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex w-full items-center justify-between">
          <p>Distance</p>
          <Image
            src="/icons/globe-showing-europe-africa_1f30d.png"
            width={40}
            height={40}
            alt="globe showing europe and africa"
          />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-end justify-between ">
          <p className="text-5xl font-bold">{totalDistance}</p>
          <span className="text-xl font-bold">KM</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default TotalDistanceCard;
