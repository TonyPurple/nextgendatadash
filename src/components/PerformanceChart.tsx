'use client';

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js/auto';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export default function PerformanceChart() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue',
        data: [4000, 3000, 2000, 2780, 1890, 2390],
        borderColor: '#8884d8',
        backgroundColor: '#8884d8',
      },
      {
        label: 'Leads',
        data: [2400, 1398, 9800, 3908, 4800, 3800],
        borderColor: '#82ca9d',
        backgroundColor: '#82ca9d',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Performance Overview',
      },
    },
  };

  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <Line data={data} options={options} />
    </div>
  );
}
