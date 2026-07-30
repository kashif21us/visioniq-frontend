"use client";

import { useEffect, useState } from "react";
import StatCard from "./StatCard";
import { dashboardService } from "@/services/dashboard";
import { DashboardStats } from "@/types/dashboard";

export default function DashboardOverview() {
  const [stats, setStats] = useState<DashboardStats | null>(null);

  useEffect(() => {
    dashboardService.getStats().then(setStats);
  }, []);

  if (!stats) {
    return (
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="col-span-4 rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <h2 className="text-lg font-semibold text-slate-700">
            Loading Dashboard...
          </h2>
        </div>
      </div>
    );
  }

  const cards = [
    {
      title: "Employees",
      value: stats.totalEmployees,
      subtitle: "Registered",
    },
    {
      title: "Present Today",
      value: stats.presentToday,
      subtitle: "Live",
    },
    {
      title: "Absent Today",
      value: stats.absentToday,
      subtitle: "Today",
    },
    {
      title: "Online Cameras",
      value: stats.onlineCameras,
      subtitle: "Streaming",
    },
    {
      title: "Offline Cameras",
      value: stats.offlineCameras,
      subtitle: "Needs Attention",
    },
    {
      title: "Unknown Faces",
      value: stats.unknownFaces,
      subtitle: "Review Required",
    },
    {
      title: "AI Accuracy",
      value: `${stats.recognitionAccuracy}%`,
      subtitle: stats.aiEngine,
    },
    {
      title: "System Health",
      value: "Healthy",
      subtitle: "Enterprise Ready",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <StatCard
          key={card.title}
          title={card.title}
          value={String(card.value)}
          subtitle={card.subtitle}
        />
      ))}
    </div>
  );
}
