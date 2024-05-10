import { Activity, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Activity[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      distance: 10,
      duration: "00:45:23",
      date: "2021-12-12",
      pace: "00:04:32",
      calories: 100,
    },
    {
      id: "728ed52f",
      distance: 10,
      duration: "00:45:23",
      date: "2021-12-12",
      pace: "00:04:32",
      calories: 100,
    },
    {
      id: "728ed52f",
      distance: 10,
      duration: "00:45:23",
      date: "2021-12-12",
      pace: "00:04:32",
      calories: 100,
    },
    {
      id: "728ed52f",
      distance: 10,
      duration: "00:45:23",
      date: "2021-12-12",
      pace: "00:04:32",
      calories: 100,
    },
    {
      id: "728ed52f",
      distance: 10,
      duration: "00:45:23",
      date: "2021-12-12",
      pace: "00:04:32",
      calories: 100,
    },
  ];
}

export default async function ActivitiesTable() {
  const data = await getData();

  return <DataTable columns={columns} data={data} />;
}
