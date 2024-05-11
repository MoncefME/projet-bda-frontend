"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import { useRouter } from "next/navigation";

const MONTHS_LABELS = [
  "All",
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
];

const YEARS_LABELS = ["Alltimes", 2019, 2020, 2021, 2022, 2023, 2024];

const YearsMonthsControl = ({ slug }: { slug: string[] }) => {
  if (slug.length === 0) {
    slug = ["Alltimes"];
  }
  const [year, month] = slug;
  const [selectedYear, setSelectedYear] = useState<number | string>(
    year === "Alltimes" ? "Alltimes" : parseInt(year),
  );
  const [selectedMonth, setSelectedMonth] = useState<number>(
    month ? parseInt(month) : 0,
  );
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (selectedYear === "Alltimes") {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [selectedMonth, selectedYear]);

  const router = useRouter();

  const handleYearChange = (year: number | string) => {
    setSelectedYear(year);
    if (year === "Alltimes") {
      router.push("/overview");
    } else {
      router.push(`/overview/${year}`);
    }
  };

  const handleMonthChange = (month: string | number) => {
    const monthIndex = MONTHS_LABELS.indexOf(month as string);
    setSelectedMonth(monthIndex);
    if (selectedYear !== "Alltimes") {
      router.push(`/overview/${selectedYear}/${monthIndex}`);
    }
  };

  return (
    <Card>
      <CardContent className="flex flex-col gap-4 py-4">
        <div className="flex  items-center gap-8 ">
          <div className="text-2xl font-semibold ">Years</div>
          <div className="no-scrollbar flex w-full snap-x snap-mandatory gap-2 overflow-x-scroll p-2">
            {YEARS_LABELS.map((year) => {
              return (
                <Button
                  key={year}
                  variant={selectedYear === year ? "destructive" : "secondary"}
                  className="snap-start text-xl"
                  onClick={() => handleYearChange(year)}
                >
                  {year}
                </Button>
              );
            })}
          </div>
        </div>
        <div className="flex items-center gap-4 ">
          <h1 className="w-20 text-2xl font-semibold">Months</h1>
          <div className="no-scrollbar flex w-full snap-x snap-mandatory gap-2 overflow-x-scroll p-2">
            {MONTHS_LABELS.map((month) => {
              return (
                <Button
                  disabled={disabled}
                  key={month}
                  variant={
                    selectedMonth === MONTHS_LABELS.indexOf(month) &&
                    selectedYear !== "Alltimes"
                      ? "destructive"
                      : "secondary"
                  }
                  className="snap-start text-xl"
                  onClick={() => handleMonthChange(month)}
                >
                  {month}
                </Button>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default YearsMonthsControl;
