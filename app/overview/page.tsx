import ActivitiesGraph from "@/components/cards/ActivitiesGraph";
import ActivitesNumberCard from "@/components/cards/ActivitiesNumberCard";
import TotalDistanceCard from "@/components/cards/TotalDistanceCard";
import TotalDurationCard from "@/components/cards/TotalDurationCard";
import YearsMonthsControl from "@/components/cards/YearsMonthsControl";

const OverviewPage = () => {
  return (
    <div className="flex h-screen w-full flex-col gap-2 bg-blue-100 p-4">
      <h1 className="mb-2 text-3xl font-semibold">Alltime Overview</h1>
      <div className="grid  grid-cols-3 gap-4">
        <div className="col-span-2 grid h-40 grid-cols-3 gap-4">
          <TotalDistanceCard totalDistance={32310} />
          <TotalDurationCard totalDuration={1520} />
          <ActivitesNumberCard numberOfActivies={245} />
        </div>
        <div className="col-span-1 ">
          <YearsMonthsControl />
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
    </div>
  );
};

export default OverviewPage;
