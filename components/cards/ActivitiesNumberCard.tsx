import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target } from "lucide-react";
import Image from "next/image";

const ActivitesNumberCard = ({
  numberOfActivies,
}: {
  numberOfActivies: number;
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex w-full items-center justify-between">
          <p>Activities</p>
          <Image
            src="/icons/sleepy-face_1f62a.png"
            width={40}
            height={40}
            alt="sleepy face"
          />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-end justify-between">
          <p className="text-5xl font-bold">{numberOfActivies}</p>
          <span className="text-xl font-bold">Run</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivitesNumberCard;
