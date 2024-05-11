import ActivitiesTable from "@/components/activitiesTable/ActivitiesTable";
import ActivitiesGraph from "@/components/cards/ActivitiesGraph";
import BestEffotsCard from "@/components/cards/BestEffotsCard";
import DataCard from "@/components/cards/DataCard";
import YearsMonthsControl from "@/components/cards/YearsMonthsControl";
import Image from "next/image";

const OverviewPage = ({ params }: { params: { slug: string[] } }) => {
  /* 
    if params are {} => Alltime overview
    if params are { "slug": [ "2020" ] }=> year overview
    if parms are { "slug": [ "2020", "2" ] } => month of the year overview
  */

  return (
    <div className="flex w-full flex-col gap-8 bg-blue-100 p-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold">Alltime Overview</h1>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 grid h-40 grid-cols-3 gap-4">
            <DataCard dataType="Activities" />
            <DataCard dataType="Distance" />
            <DataCard dataType="Duration" />
          </div>
          <div className="col-span-1 ">
            <YearsMonthsControl />
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
          <DataCard dataType="Streak" />
          <DataCard dataType="Break" />
          <DataCard data="Friday" dataType="Most often" />
          <DataCard data="Monday" dataType="Least often" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold">Best Effots</h1>
        <div className="grid grid-cols-4 gap-2">
          {[
            {
              distance: "1km",
              time: "03:00",
              icon: "/icons/1st-place-medal_1f947.png",
            },
            {
              distance: "5km",
              time: "20:00",
              icon: "/icons/sparkles_2728.png",
            },
            {
              distance: "10km",
              time: "45:00",
              icon: "/icons/snail_1f40c.png",
            },
            {
              distance: "HM",
              time: "01:40:00",
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
