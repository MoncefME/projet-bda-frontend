"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Card, CardContent } from "../ui/card";
import { Button } from "@/components/ui/button";
import { useActivitiesStore } from "@/store/activities.store";
import { formatDate } from "@/lib/utils";

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

const YEARS_LABELS = ["Alltimes", 2021, 2022, 2023, 2024];

const YearsMonthsControl = ({
  slug,
  route,
}: {
  slug: string[];
  route: string;
}) => {
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

  const { startDay, endDay, setStartDay, setEndDay } = useActivitiesStore();
  const getStartDay = (): Date => {
    return startDay;
  };

  // Function to get the endDay value
  const getEndDay = (): Date => {
    return endDay;
  };

  useEffect(() => {
    if (selectedYear === "Alltimes") {
      setDisabled(true);
    } else {
      setDisabled(false);
    }

    if (selectedYear === "Alltimes") {
      setDisabled(true);
      const firstYear = parseInt(YEARS_LABELS[1].toString());
      const lastYear = parseInt(
        YEARS_LABELS[YEARS_LABELS.length - 1].toString(),
      );
      setStartDay(new Date(firstYear, 0, 1)); // Start date: January 1st of the first year
      setEndDay(new Date(lastYear, 11, 31)); // End date: December 31st of the last year
      return;
    }

    const startDate =
      selectedMonth === 0
        ? new Date(selectedYear as number, 0, 1)
        : new Date(selectedYear as number, selectedMonth - 1, 1);

    const endDate =
      selectedMonth === 0
        ? new Date(selectedYear as number, 11, 31)
        : new Date(selectedYear as number, selectedMonth, 0);

    setStartDay(startDate);
    setEndDay(endDate);
  }, [selectedMonth, selectedYear]);

  //console.log("--------------->", formatDate(startDay), formatDate(endDay));

  const router = useRouter();

  const handleYearChange = (year: number | string) => {
    setSelectedYear(year);
    if (year === "Alltimes") {
      // router.push("/overview");
      router.push(`/${route}`);
    } else {
      router.push(`/${route}/${year}`);
    }
  };

  const handleMonthChange = (month: string | number) => {
    const monthIndex = MONTHS_LABELS.indexOf(month as string);
    setSelectedMonth(monthIndex);
    if (selectedYear !== "Alltimes") {
      router.push(`/${route}/${selectedYear}/${monthIndex}`);
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
