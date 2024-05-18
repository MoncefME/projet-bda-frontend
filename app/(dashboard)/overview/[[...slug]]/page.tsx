"use client";
import { useEffect, useMemo } from "react";
import Image from "next/image";

// Components
import ActivitiesTable from "@/components/activitiesTable/ActivitiesTable";
import ActivitiesGraph from "@/components/cards/ActivitiesGraph";
import BestEffotsCard from "@/components/cards/BestEffotsCard";
import YearsMonthsControl from "@/components/cards/YearsMonthsControl";
import DataCard from "@/components/cards/DataCard";

// Store & Services
import { useInsightsStore } from "@/store/insights.store";

import {
  getLongestStreak,
  getLongestBreak,
  getTotalActivities,
  getTotalDistance,
  getTotalDuration,
  getBestEffort1Km,
  getBestEffort5Km,
  getBestEffort10Km,
  getBestEffortHM,
} from "@/services/insights.service";

const OverviewPage = ({ params }: { params: { slug: string[] } }) => {
  /* 
    if params are {} => Alltime overview
    if params are { "slug": [ "2020" ] }=> year overview
    if parms are { "slug": [ "2020", "2" ] } => month of the year overview

  */
  const {
    longestStreak,
    longestBreak,
    totalDuration,
    totalDistance,
    nbActivities,
    bestEffort1km,
    bestEffort5km,
    bestEffort10km,
    bestEffortHM,
    setLongestStreak,
    setLongestBreak,
    setNbActivities,
    setTotalDistance,
    setTotalDuration,
    setBestEffort1km,
    setBestEffort5km,
    setBestEffort10km,
    setBestEffortHM,
  } = useInsightsStore();

  const fetchData = async () => {
    const streakData = await getLongestStreak();
    setLongestStreak(streakData as any);

    const breakData = await getLongestBreak();
    setLongestBreak(breakData as any);
    const year = params.slug?.[0];
    const month = params.slug?.[1];
    let startmonth = null;
    let endmonth = null;

    if (year) {
      startmonth = 1;
      endmonth = 12;
    }

    const activitiesNb = await getTotalActivities(
      Number(month) || startmonth || 0,
      Number(month) || endmonth || 0,
      Number(year) || 0,
    );
    setNbActivities(activitiesNb);

    const distanceNb = await getTotalDistance(
      Number(month) || startmonth || 0,
      Number(month) || endmonth || 0,
      Number(year) || 0,
    );
    const roundedDistanceNb = parseFloat(distanceNb.toFixed(2)); // Round to two decimal places
    setTotalDistance(roundedDistanceNb);

    const durationNb = await getTotalDuration(
      Number(month) || startmonth || 0,
      Number(month) || endmonth || 0,
      Number(year) || 0,
    );
    setTotalDuration(durationNb);

    const besteffort1k = await getBestEffort1Km(
      43957994,
      Number(month) || startmonth || 0,
      Number(month) || endmonth || 0,
      Number(year) || 0,
    );

    setBestEffort1km(besteffort1k);

    const besteffort5k = await getBestEffort5Km(
      43957994,
      Number(month) || startmonth || 0,
      Number(month) || endmonth || 0,
      Number(year) || 0,
    );
    setBestEffort5km(besteffort5k);

    const besteffort10k = await getBestEffort10Km(
      43957994,
      Number(month) || startmonth || 0,
      Number(month) || endmonth || 0,
      Number(year) || 0,
    );
    setBestEffort10km(besteffort10k);

    const besteffortHM = await getBestEffortHM(
      43957994,
      Number(month) || startmonth || 0,
      Number(month) || endmonth || 0,
      Number(year) || 0,
    );
    setBestEffortHM(besteffortHM);

    // const insightsData = await getInsightsForRange();
    // setNbActivities(insightsData.numberOfActivities);
    // setTotalDistance(insightsData.cummulativeDistance);
    // setTotalDuration(insightsData.cummulativeTime);
  };

  useEffect(() => {
    console.log("params", params.slug);
    fetchData();
  }, []);
  console.log("rendering overview page");
  return (
    <div className="flex w-full flex-col gap-8 bg-blue-100 p-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold">Alltime Overview</h1>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 grid h-40 grid-cols-3 gap-4">
            <DataCard dataType="Activities" data={nbActivities} unit="Runs" />
            <DataCard dataType="Distance" data={totalDistance} unit="Km" />
            <DataCard dataType="Duration" data={totalDuration} unit="Hr" />
          </div>
          <div className="col-span-1 ">
            <YearsMonthsControl slug={params.slug || []} route="overview" />
          </div>
        </div>
      </div>

      <div className="no-scrollbar flex  flex-col justify-center  overflow-x-scroll">
        <h1 className="text-3xl font-semibold">Activites Graph</h1>
        <ActivitiesGraph
          startDate="2021-01-01"
          endDate="2021-12-31"
          size={19}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1 gap-2">
          <div className="flex h-80 flex-col items-center justify-center gap-8 rounded-lg bg-white p-4 shadow-md">
            <p className="self-start text-3xl font-semibold">Chart Title</p>
            <Image
              src="/icons/bar-chart_1f4ca.png"
              width={150}
              height={150}
              alt="icon"
            />
            <p>
              A chart to be determinded later , but its nice to have one here
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <DataCard dataType="Streak" data={longestStreak?.days} unit="Days" />
          <DataCard dataType="Break" data={longestBreak?.days} unit="Days" />
          <DataCard data="Friday" dataType="Most often" unit="51 times" />
          <DataCard data="Monday" dataType="Least often" unit="11 times" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold">Best Effots</h1>
        <div className="grid grid-cols-4 gap-2">
          {[
            {
              distance: "1km",
              time: bestEffort1km,
              icon: "/icons/1st-place-medal_1f947.png",
            },
            {
              distance: "5km",
              time: bestEffort5km,
              icon: "/icons/sparkles_2728.png",
            },
            {
              distance: "10km",
              time: bestEffort10km,
              icon: "/icons/snail_1f40c.png",
            },
            {
              distance: "HM",
              time: bestEffortHM,
              icon: "/icons/gem-stone_1f48e.png",
            },
          ].map((effort, index) => (
            <BestEffotsCard
              key={index}
              distance={effort.distance}
              time={effort.time}
              icon={effort.icon}
            />
          ))}
        </div>
      </div>

      <div className="flex w-full flex-col gap-2">
        <h1 className="text-3xl font-semibold">Activities</h1>
        <ActivitiesTable />
      </div>
    </div>
  );
};

export default OverviewPage;
