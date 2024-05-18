"use client";
import ActivityCalendar, { ThemeInput } from "react-activity-calendar";
import { DailyValue } from "@/services/insights.service";

const ActivitiesGraph = ({
  dailyValue,
}: {
  dailyValue: DailyValue[] | null;
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
    weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    legend: {
      less: "Less",
      more: "More",
    },
  };

  const data = dailyValue || [{ date: "2020-02-03", count: 0, level: 0 }];

  const redTheme: ThemeInput = {
    light: ["#FFEBEE", "#FFCDD2", "#EF9A9A", "#E57373", "#EF5350"],
    dark: ["#D32F2F", "#C62828", "#B71C1C", "#880E4F", "#4A148C"],
  };

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
        colorScheme="light"
        theme={redTheme}
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
