export const getActivities = async ({
  startDate,
  endDate,
  userId,
}: {
  startDate: string;
  endDate: string;
  userId: string;
}) => {
  const response = await fetch(
    "https://localhost:3000/activities?startDate=" +
      startDate +
      "&endDate=" +
      endDate +
      "&userId=" +
      userId,
  );
  const data = await response.json();
  return data;
};
