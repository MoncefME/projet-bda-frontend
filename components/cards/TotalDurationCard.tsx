import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Compass } from "lucide-react";
import Image from "next/image";

const TotalDurationCard = ({ totalDuration }: { totalDuration: number }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex w-full items-center justify-between">
          <p>Duration</p>
          <Image
            src="/icons/pushpin_1f4cc.png"
            width={40}
            height={40}
            alt="spiral notepad"
          />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-end justify-between ">
          <p className="text-5xl font-bold">{totalDuration}</p>
          <span className="text-xl font-bold">Hour</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default TotalDurationCard;
