"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import DataCard from "@/components/cards/DataCard";
import { Activity } from "@/components/activitiesTable/columns";
import { getActivityById } from "@/services/activity.service";

const ActivityPage = ({ params }: { params: { activityId: number } }) => {
  const [activity, setActivty] = useState<Activity | null>(null);

  const fetchActivityData = async () => {
    const response = await getActivityById(params.activityId);

    if (response) {
      setActivty({
        activityId: response.id,
        id: response.id,
        title: response.title,
        distance: parseFloat(response.distance),
        duration: parseFloat(response.duration),
        date: response.date,
        pace: response.pace,
        calories: parseFloat(response.calories),
      });
    }
  };

  useEffect(() => {
    fetchActivityData();
  }, []);

  return (
    <div className="flex h-full w-full flex-col gap-4 bg-blue-100 p-4">
      <div className="flex flex-col items-start justify-center gap-2 rounded-lg bg-white p-4 shadow-md">
        <p className="text-3xl font-semibold">{activity?.title}</p>
        <p>Date: {activity?.date}</p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <DataCard data={activity?.distance} dataType="Distance" unit="Km" />
        <DataCard
          data={activity?.duration}
          dataType="Duration"
          unit="H:MM:SS"
        />
        <DataCard data={activity?.pace} dataType="Pace" unit="min/km" />
        <DataCard data={activity?.calories} dataType="Calories" unit="Kcal" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1 flex h-80  flex-col items-center justify-center gap-8 rounded-lg bg-white p-4 shadow-md">
          <p className="self-start text-3xl font-semibold">Chart Title</p>
          <Image
            src="/icons/bar-chart_1f4ca.png"
            width={150}
            height={150}
            alt="icon"
          />
          <p>A chart to be determinded later , but its nice to have one here</p>
        </div>
        <div className="col-span-1 flex h-80  flex-col items-center justify-center gap-8 rounded-lg bg-white p-4 shadow-md">
          <p className="self-start text-3xl font-semibold">Chart Title</p>
          <Image
            src="/icons/bar-chart_1f4ca.png"
            width={150}
            height={150}
            alt="icon"
          />
          <p>A chart to be determinded later , but its nice to have one here</p>
        </div>
      </div>
    </div>
  );
};

export default ActivityPage;
