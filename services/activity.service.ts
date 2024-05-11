import { formatDate } from "@/lib/utils";

export const getActivities = async () => {
  const response = await fetch("http://localhost:8000/activities/all");
  if (response.ok) {
    const data = await response.json();
    console.log(data);
    return data.slice(0, 30).map((activity: any) => ({
      id: activity.id,
      activityId: activity.id,
      title: activity.name,
      distance: activity.distance,
      duration: activity.moving_time,
      date: formatDate(new Date(activity.start_date)),
      pace: activity.average_speed,
      calories: activity.calories,
    }));
  }
  return null;
};
