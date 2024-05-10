import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const DataCard = ({
  data,
  dataType,
}: {
  data: string | number;
  dataType: string;
}) => {
  let icon = "";
  switch (dataType) {
    case "Activities":
      icon = "/icons/rocket_1f680.png";
      break;
    case "Distance":
      icon = "/icons/globe-showing-europe-africa_1f30d.png";
      break;
    case "Duration":
      icon = "/icons/pushpin_1f4cc.png";
      break;
    case "Streak":
      icon = "/icons/chart-increasing_1f4c8.png";
      break;
    case "Break":
      icon = "/icons/chart-decreasing_1f4c9.png";
      break;
    case "Most often":
      icon = "/icons/fire_1f525.png";
      break;
    case "Least often":
      icon = "/icons/sleeping-face_1f634.png";
      break;
    default:
      icon = "/icons/thinking-face_1f914.png";
  }

  let unit = "";
  switch (dataType) {
    case "Activities":
      unit = "Run";
      break;
    case "Distance":
      unit = "Km";
      break;
    case "Duration":
      unit = "Hr";
      break;
    case "Streak":
      unit = "Days";
      break;
    case "Break":
      unit = "Days";
      break;
    case "Most often":
      unit = "51 time";
      break;
    case "Least often":
      unit = "11 time";
      break;
    default:
      unit = "Run";
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex w-full items-center justify-between">
          <p>{dataType}</p>
          <Image src={icon} width={40} height={40} alt="icon" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-end justify-between">
          <p
            className={
              dataType === "Least often" || dataType === "Most often"
                ? "text-4xl font-bold"
                : "text-5xl font-bold"
            }
          >
            {data}
          </p>
          <span className="text-xl font-bold">{unit}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default DataCard;
