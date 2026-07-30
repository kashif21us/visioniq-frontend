#!/bin/bash
set -e

echo "==> Creating Dashboard feature..."

mkdir -p src/features/dashboard

cat > src/features/dashboard/StatCard.tsx <<'EOF'
type Props = {
  title: string;
  value: string;
  subtitle?: string;
};

export default function StatCard({ title, value, subtitle }: Props) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-lg transition">
      <p className="text-sm text-slate-500">{title}</p>
      <h2 className="mt-3 text-3xl font-bold">{value}</h2>
      {subtitle && (
        <p className="mt-2 text-xs text-slate-400">{subtitle}</p>
      )}
    </div>
  );
}
EOF

cat > src/features/dashboard/DashboardOverview.tsx <<'EOF'
import StatCard from "./StatCard";

const stats = [
  { title: "Employees", value: "245", subtitle: "Registered" },
  { title: "Present Today", value: "221", subtitle: "Live" },
  { title: "Online Cameras", value: "32", subtitle: "Streaming" },
  { title: "Offline Cameras", value: "2", subtitle: "Needs Attention" },
  { title: "Unknown Faces", value: "5", subtitle: "Needs Review" },
  { title: "Recognition", value: "99.2%", subtitle: "Accuracy" },
  { title: "AI Engine", value: "Running", subtitle: "Healthy" },
  { title: "GPU", value: "Online", subtitle: "CUDA Ready" },
];

export default function DashboardOverview() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => (
        <StatCard key={item.title} {...item} />
      ))}
    </div>
  );
}
EOF

cat > src/app/dashboard/page.tsx <<'EOF'
import AppLayout from "@/components/layout/AppLayout";
import DashboardOverview from "@/features/dashboard/DashboardOverview";

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
    </AppLayout>
  );
}
EOF

echo ""
echo "========================================"
echo "Dashboard Sprint 01 Installed"
echo "========================================"
