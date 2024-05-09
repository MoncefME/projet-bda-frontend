import ActivityCalendar from "react-activity-calendar";
// import { Activity as CalendarActivity } from "react-activity-calendar";

const ActivitiesGraph = ({
  startDate,
  endDate,
  size,
}: {
  startDate: string;
  endDate: string;
  size: number;
}) => {
  const data = Array.from({ length: 365 }, (_, i) => ({
    date: new Date(2021, 0, i + 1).toISOString().split("T")[0],
    count: Math.floor(Math.random() * 10),
    level: Math.floor(Math.random() * 4),
  }));
  return (
    <div className="flex flex-col items-center justify-center py-4">
      <ActivityCalendar
        style={{
          // overflowX: "scroll",
          overflowY: "hidden",
        }}
        hideColorLegend={true}
        hideTotalCount={true}
        blockMargin={4}
        blockRadius={2}
        blockSize={18}
        colorScheme="dark"
        data={data}
        fontSize={14}
        maxLevel={4}
        weekStart={0}
      />
    </div>
  );
};
export default ActivitiesGraph;
