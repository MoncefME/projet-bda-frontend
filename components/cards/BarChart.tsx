import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

interface MonthlyDistance {
  month: number;
  distance: number;
}

interface BarChartProps {
  data: MonthlyDistance[];
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  const allMonths = Array.from({ length: 12 }, (_, i) => i + 1);
  const chartData = {
    labels: allMonths,
    datasets: [
      {
        label: "Distance (km)",
        data: allMonths.map(
          (month) =>
            (data.find((d) => d.month === month)?.distance ?? 0) / 1000,
        ),
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: "Month",
        },
      },
      y: {
        title: {
          display: true,
          text: "Distance (km)",
        },
        beginAtZero: true,
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Monthly Distances",
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default BarChart;
