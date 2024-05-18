// added this not to get an error
/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect, useState } from "react";
import { Activity, columns } from "./columns";
import { DataTable } from "./data-table";
import { getActivities } from "@/services/activity.service";
import { useActivitiesStore } from "@/store/activities.store";

const ActivitiesTable = () => {
  const { activities, setActivities } = useActivitiesStore();
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
