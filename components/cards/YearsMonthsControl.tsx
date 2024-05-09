"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Card, CardContent, CardFooter } from "../ui/card";

const YearsMonthsControl = () => {
  const [selectedYear, setSelectedYear] = useState<number | string>("Alltimes");
  const [selectedMonth, setSelectedMonth] = useState<string>("Jan");
  return (
    <Card>
      <CardContent className="flex flex-col gap-4 py-4">
        <div className="flex  items-center gap-8 ">
          <div className="text-2xl font-semibold ">Years</div>
          <div className="no-scrollbar flex w-full snap-x snap-mandatory gap-2 overflow-x-scroll p-2">
            {["Alltimes", 2019, 2020, 2021, 2022, 2023, 2024].map((year) => {
              return (
                <Button
                  key={year}
                  variant={selectedYear === year ? "destructive" : "secondary"}
                  className="snap-start text-xl"
                  onClick={() => setSelectedYear(year)}
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
            {[
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
            ].map((month) => {
              return (
                <Button
                  key={month}
                  variant={
                    selectedMonth === month ? "destructive" : "secondary"
                  }
                  className="snap-start text-xl"
                  onClick={() => setSelectedMonth(month)}
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
