import ActivityCalendar from "react-activity-calendar";

const ActivitiesGraph = ({
  startDate,
  endDate,
  size,
}: {
  startDate: string;
  endDate: string;
  size: number;
}) => {
  const labels = {
    months: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    weekdays: [
      "Sun", // Sunday first!
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
    ],
    legend: {
      less: "Less",
      more: "More",
    },
  };

  const data = Array.from({ length: 365 }, (_, i) => ({
    date: new Date(2021, 0, i + 1).toISOString().split("T")[0],
    count: Math.floor(Math.random() * 10),
    level: Math.floor(Math.random() * 4),
  }));
  return (
    <div className="flex flex-col items-center justify-center py-4">
      <ActivityCalendar
        style={{
          overflowX: "hidden",
          overflowY: "hidden",
        }}
        hideTotalCount={true}
        hideColorLegend={true}
        blockMargin={4}
        blockRadius={2}
        blockSize={18}
        colorScheme="dark"
        data={data}
        fontSize={18}
        maxLevel={4}
        weekStart={0}
        labels={labels}
      />
    </div>
  );
};
export default ActivitiesGraph;
