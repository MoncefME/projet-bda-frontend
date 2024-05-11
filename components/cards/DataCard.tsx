"use client";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface DataCardProps {
  data?: string | number | null;
  dataType: string;
  unit: string;
}

const DataCard = ({ data, dataType, unit }: DataCardProps) => {
  let icon = "";
  // let unit = "";

  switch (dataType) {
    case "Activities":
      icon = "/icons/rocket_1f680.png";
      // unit = "Run";
      break;
    case "Distance":
      icon = "/icons/globe-showing-europe-africa_1f30d.png";
      // unit = "Km";
      break;
    case "Duration":
      icon = "/icons/pushpin_1f4cc.png";
      // unit = "Hr";
      break;
    case "Streak":
      icon = "/icons/chart-increasing_1f4c8.png";
      // unit = "Days";
      break;
    case "Break":
      icon = "/icons/chart-decreasing_1f4c9.png";
      // unit = "Days";
      break;
    case "Most often":
      icon = "/icons/fire_1f525.png";
      // unit = "51 times";
      break;
    case "Least often":
      icon = "/icons/sleeping-face_1f634.png";
      // unit = "11 times";
      break;
    default:
      icon = "/icons/thinking-face_1f914.png";
    // unit = "Run";
  }

  return (
    <Card className="transform cursor-pointer transition-all duration-300 ease-in-out hover:bg-slate-50 hover:ring-2 hover:ring-strava">
      <CardHeader>
        <CardTitle className="flex w-full items-center justify-between">
          <p>{dataType}</p>
          {icon === "" ? (
            <Skeleton className="h-10 w-10 rounded-full" />
          ) : (
            <Image src={icon} width={40} height={40} alt="icon" />
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-end justify-between">
          {data == null && <Skeleton className="h-10 w-10 rounded-full" />}
          <p
            className={
              ["Least often", "Most often"].includes(dataType)
                ? "text-4xl font-bold"
                : "text-5xl font-bold"
            }
          >
            {data}
          </p>
          {unit === "" && <Skeleton className="h-10 w-10 rounded-full" />}
          <span className="text-xl font-bold">{unit}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default DataCard;
