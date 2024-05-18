import Image from "next/image";

const BestEffotsCard = ({
  distance,
  time,
  icon,
}: {
  distance: string;
  time: string | null;
  icon: string;
}) => {
  if (time == "0") time = "No data";
  if (!time) time = "Loading...";
  return (
    <div className="flex h-16 items-center justify-between rounded-lg bg-white p-4 shadow-md">
      <div className="flex items-center gap-2">
        <Image src={icon} width={30} height={30} alt="icon" />
        <p className="text-2xl font-bold">{distance}</p>
      </div>
      <p className="text-2xl font-extrabold">{time}</p>
    </div>
  );
};

export default BestEffotsCard;
