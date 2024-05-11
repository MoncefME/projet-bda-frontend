import {
  formatDate,
  convertSpeedToPace,
  formatCalories,
  formatDistance,
  formatDuration,
} from "@/lib/utils";

export const getActivities = async () => {
  const response = await fetch("http://localhost:8000/activities/all");
  if (response.ok) {
    const data = await response.json();
    console.log(data);
    return data.map((activity: any) => ({
      id: activity.id,
      activityId: activity.id,
      title: activity.name,
      distance: activity.distance,
      duration: activity.moving_time,
      date: formatDate(new Date(activity.start_date)),
      pace: convertSpeedToPace(activity.average_speed),
      calories: activity.calories,
      elevation: activity.total_elevation_gain,
    }));
  }
  return null;
};

export const getActivityById = async (id: number) => {
  const response = await fetch(`http://localhost:8000/activities/${id}`);
  if (response.ok) {
    const data = await response.json();
    return {
      id: data.id,
      activityId: data.id,
      title: data.name,
      distance: formatDistance(data.distance),
      duration: formatDuration(data.moving_time),
      date: formatDate(new Date(data.start_date)),
      pace: convertSpeedToPace(data.average_speed),
      calories: formatCalories(data.calories),
      elevation: data.total_elevation_gain,
    };
  }
  return null;
};
