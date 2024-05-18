import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const DistanceVsAverageSpeedChart = ({ data }: any) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const distances = data.map((item: any) => item.distance);
      const averageSpeeds = data.map((item: any) => item.averageSpeed);

      const myChart = new Chart(chartRef.current, {
        type: "scatter",
        data: {
          labels: distances,
          datasets: [
            {
              label: "Distance vs. Average Speed",
              data: data.map((item: any) => ({
                x: item.distance,
                y: item.averageSpeed,
              })),
              backgroundColor: "rgba(75, 192, 192, 0.4)",
              pointRadius: 5,
              pointHoverRadius: 7,
            },
          ],
        },
        options: {
          scales: {
            x: {
              title: {
                display: true,
                text: "Distance",
              },
            },
            y: {
              title: {
                display: true,
                text: "Average Speed",
              },
            },
          },
        },
      });

      return () => {
        myChart.destroy();
      };
    }
  }, [data]);

  return !data || data.length === 0 ? (
    <div>No data</div>
  ) : (
    <canvas ref={chartRef} />
  );
};

export default DistanceVsAverageSpeedChart;
