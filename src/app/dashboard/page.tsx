import AppLayout from "@/components/layout/AppLayout";

import DashboardHeader from "@/features/dashboard/DashboardHeader";
import DashboardOverview from "@/features/dashboard/DashboardOverview";
import DashboardSummary from "@/features/dashboard/DashboardSummary";

import AttendanceTrend from "@/features/dashboard/AttendanceTrend";
import CameraGrid from "@/features/dashboard/CameraGrid";
import AIInsights from "@/features/dashboard/AIInsights";
import ActiveAlerts from "@/features/dashboard/ActiveAlerts";

import RecentEvents from "@/features/dashboard/RecentEvents";
import LiveTracking from "@/features/dashboard/LiveTracking";
import SystemHealth from "@/features/dashboard/SystemHealth";
import QuickActions from "@/features/dashboard/QuickActions";

export default function DashboardPage() {
  return (
    <AppLayout>

      <DashboardHeader />

      <DashboardOverview />

      <DashboardSummary />

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <AttendanceTrend />
        <CameraGrid />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <AIInsights />
        <ActiveAlerts />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <RecentEvents />
        <LiveTracking />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <SystemHealth />
        <QuickActions />
      </div>

    </AppLayout>
  );
}
