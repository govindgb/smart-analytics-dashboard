"use client";

import { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
import StatsCard from "@/components/ui/StatsCard";
import RevenueChart from "@/components/ui/RevenueChart";
import FilterBar from "@/components/ui/FilterBar";
export default function Home() {
  const [range, setRange] = useState("7d");

  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 bg-gray-100 p-6">
        <Topbar />

        <FilterBar selected={range} onChange={setRange} />

        <div className="grid grid-cols-3 gap-6">
          <StatsCard title="Revenue" value="$12,340" />
          <StatsCard title="Users" value="1,230" />
          <StatsCard title="Growth" value="+18%" />
        </div>

       <RevenueChart range={range} />
      </div>
    </div>
  );
}s