#!/bin/bash
set -e

mkdir -p src/features/dashboard

cat > src/features/dashboard/AttendanceChart.tsx <<'EOF'
export default function AttendanceChart() {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm h-80">
      <h2 className="text-lg font-semibold mb-4">Attendance Trend</h2>
      <div className="flex items-center justify-center h-56 text-slate-400">
        Chart will be connected to Backend API
      </div>
    </div>
  );
}
EOF

cat > src/features/dashboard/CameraStatus.tsx <<'EOF'
const cameras = [
  { name: "Camera 01", status: "Online" },
  { name: "Camera 02", status: "Online" },
  { name: "Camera 03", status: "Offline" },
];

export default function CameraStatus() {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Camera Status</h2>
      <div className="space-y-3">
        {cameras.map((c) => (
          <div key={c.name} className="flex justify-between">
            <span>{c.name}</span>
            <span>{c.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
EOF

cat > src/features/dashboard/RecentEvents.tsx <<'EOF'
export default function RecentEvents() {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Recent Events</h2>
      <ul className="space-y-2 text-sm">
        <li>Employee A checked in</li>
        <li>Unknown face detected</li>
        <li>Camera 03 disconnected</li>
      </ul>
    </div>
  );
}
EOF

cat > src/features/dashboard/LiveTracking.tsx <<'EOF'
export default function LiveTracking() {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Live Tracking</h2>
      <div className="text-slate-500">
        Live employee movement will appear here.
      </div>
    </div>
  );
}
EOF

cat > src/app/dashboard/page.tsx <<'EOF'
import AppLayout from "@/components/layout/AppLayout";
import DashboardOverview from "@/features/dashboard/DashboardOverview";
import AttendanceChart from "@/features/dashboard/AttendanceChart";
import CameraStatus from "@/features/dashboard/CameraStatus";
import RecentEvents from "@/features/dashboard/RecentEvents";
import LiveTracking from "@/features/dashboard/LiveTracking";

export default function DashboardPage() {
  return (
    <AppLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">VisionIQ Enterprise</h1>
        <p className="mt-2 text-slate-500">
          Workforce Intelligence Dashboard
        </p>
      </div>

      <DashboardOverview />

      <div className="grid gap-6 mt-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <AttendanceChart />
        </div>

        <CameraStatus />
      </div>

      <div className="grid gap-6 mt-8 lg:grid-cols-2">
        <RecentEvents />
        <LiveTracking />
      </div>
    </AppLayout>
  );
}
EOF

echo "Sprint 02 installed successfully."
