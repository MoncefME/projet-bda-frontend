"use client";
import { useEffect, useState } from "react";
import { Activity, columns } from "./columns";
import { DataTable } from "./data-table";
import { getActivities } from "@/services/activity.service";
import { useActivitiesStore } from "@/store/activities.store";

async function getData(): Promise<Activity[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      activityId: 22211,
      title: "Morning Run",
      distance: 10,
      duration: "00:45:23",
      date: "2021-12-12",
      pace: "00:04:32",
      calories: 100,
    },
    {
      id: "728ed52f",
      activityId: 22212,
      title: "Morning Run",
      distance: 10,
      duration: "00:45:23",
      date: "2021-12-12",
      pace: "00:04:32",
      calories: 100,
    },
    {
      id: "728ed52f",
      activityId: 22213,
      title: "Morning Run",
      distance: 10,
      duration: "00:45:23",
      date: "2021-12-12",
      pace: "00:04:32",
      calories: 100,
    },
    {
      id: "728ed52f",
      activityId: 22214,
      title: "Morning Run",
      distance: 10,
      duration: "00:45:23",
      date: "2021-12-12",
      pace: "00:04:32",
      calories: 100,
    },
    {
      id: "728ed52f",
      activityId: 22215,
      title: "Morning Run",
      distance: 10,
      duration: "00:45:23",
      date: "2021-12-12",
      pace: "00:04:32",
      calories: 100,
    },
  ];
}

const ActivitiesTable = () => {
  const { activities, setActivities } = useActivitiesStore();
  // const [data, setData] = useState<Activity[]>([]);
  useEffect(() => {
    const FetchData = async () => {
      const data = await getActivities();
      setActivities(data);
    };
    FetchData();
  }, []);

  return <DataTable columns={columns} data={activities} />;
};

export default ActivitiesTable;
