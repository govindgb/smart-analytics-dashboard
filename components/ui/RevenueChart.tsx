"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

type Props = {
  range: string;
};

export default function RevenueChart({ range }: Props) {
  const dataMap: any = {
    "7d": [
      { name: "Mon", revenue: 1000 },
      { name: "Tue", revenue: 2000 },
      { name: "Wed", revenue: 1500 },
      { name: "Thu", revenue: 3000 },
      { name: "Fri", revenue: 2500 },
      { name: "Sat", revenue: 4000 },
      { name: "Sun", revenue: 3500 },
    ],
    "30d": [
      { name: "Week 1", revenue: 8000 },
      { name: "Week 2", revenue: 12000 },
      { name: "Week 3", revenue: 10000 },
      { name: "Week 4", revenue: 15000 },
    ],
    "6m": [
      { name: "Jan", revenue: 4000 },
      { name: "Feb", revenue: 3000 },
      { name: "Mar", revenue: 5000 },
      { name: "Apr", revenue: 4000 },
      { name: "May", revenue: 6000 },
      { name: "Jun", revenue: 7000 },
    ],
  };

  const data = dataMap[range];

  return (
    <div className="bg-white p-5 rounded shadow mt-6">
      <h2 className="text-lg font-semibold mb-4">
        Revenue Overview ({range})
      </h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="revenue" stroke="#000" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}