"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import {
  getInsightsForRange,
  getLongestBreak,
  getLongestStreak,
} from "@/actions/insight.lib";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useInsightsStore } from "@/store/insights.score";

interface DataCardProps {
  data?: string | number;
  dataType: string;
}

const DataCard = ({ data, dataType }: DataCardProps) => {
  const [icon, setIcon] = useState("");
  const [unit, setUnit] = useState("");
  const [dataValue, setDataValue] = useState("");
  const {
    distance,
    setDistance,
    duration,
    setDuration,
    activities,
    setActivities,
    longestBreak,
    setLongestBreak,
    longestStreak,
    setLongestStreak,
  } = useInsightsStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let result: any;
        if (dataType === "Streak") {
          result = await getLongestStreak();
          setLongestStreak(result);
        } else if (dataType === "Break") {
          result = await getLongestBreak();
          setLongestBreak(result);
        } else if (
          dataType === "Activities" ||
          dataType === "Distance" ||
          dataType === "Duration"
        )
          result = await getInsightsForRange({
            startDate: "2021-01-01",
            endDate: "2021-12-31",
            userId: "1",
          });
        if (result) {
          setActivities(result.numberOfActivities);
          setDistance(result.cummulativeDistance);
          setDuration(result.cummulativeTime);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [
    dataType,
    setActivities,
    setDistance,
    setDuration,
    setLongestBreak,
    setLongestStreak,
  ]);

  useEffect(() => {
    let iconUrl = "";
    let dataUnit = "";
    switch (dataType) {
      case "Activities":
        iconUrl = "/icons/rocket_1f680.png";
        dataUnit = "Run";
        break;
      case "Distance":
        iconUrl = "/icons/globe-showing-europe-africa_1f30d.png";
        dataUnit = "Km";
        break;
      case "Duration":
        iconUrl = "/icons/pushpin_1f4cc.png";
        dataUnit = "Hr";
        break;
      case "Streak":
        iconUrl = "/icons/chart-increasing_1f4c8.png";
        dataUnit = "Days";
        break;
      case "Break":
        iconUrl = "/icons/chart-decreasing_1f4c9.png";
        dataUnit = "Days";
        break;
      case "Most often":
        iconUrl = "/icons/fire_1f525.png";
        dataUnit = "51 times";
        break;
      case "Least often":
        iconUrl = "/icons/sleeping-face_1f634.png";
        dataUnit = "11 times";
        break;
      default:
        iconUrl = "/icons/thinking-face_1f914.png";
    }
    setIcon(iconUrl);
    setUnit(dataUnit);
  }, [dataType]);

  useEffect(() => {
    let value = "";
    if (dataType === "Streak" && longestStreak)
      value = longestStreak.days.toString();
    else if (dataType === "Break" && longestBreak)
      value = longestBreak.days.toString();
    else if (dataType === "Activities" && activities)
      value = activities.toString();
    else if (dataType === "Distance" && distance) value = distance.toString();
    else if (dataType === "Duration" && duration) value = duration.toString();
    else value = data?.toString() || "";
    setDataValue(value);
  }, [
    activities,
    data,
    dataType,
    distance,
    duration,
    longestBreak,
    longestStreak,
  ]);

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
          {dataValue === "" && <Skeleton className="h-10 w-3/4 rounded-full" />}
          <p
            className={
              ["Least often", "Most often"].includes(dataType)
                ? "text-4xl font-bold"
                : "text-5xl font-bold"
            }
          >
            {dataValue}
          </p>
          {unit === "" && <Skeleton className="h-10 w-10 rounded-full" />}
          <span className="text-xl font-bold">{unit}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default DataCard;
