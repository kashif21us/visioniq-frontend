#!/bin/bash
set -e

echo "==> Creating Enterprise Dashboard Structure..."

mkdir -p src/features/dashboard/components
mkdir -p src/services
mkdir -p src/types

cat > src/types/dashboard.ts <<'EOF'
export interface DashboardStats {
  totalEmployees: number;
  presentToday: number;
  absentToday: number;
  onlineCameras: number;
  offlineCameras: number;
  unknownFaces: number;
  recognitionAccuracy: number;
  aiEngine: string;
}
EOF

cat > src/services/dashboard.ts <<'EOF'
import { DashboardStats } from "@/types/dashboard";

export const dashboardService = {
  async getStats(): Promise<DashboardStats> {
    // Temporary Mock Data
    return {
      totalEmployees: 245,
      presentToday: 221,
      absentToday: 24,
      onlineCameras: 32,
      offlineCameras: 2,
      unknownFaces: 5,
      recognitionAccuracy: 99.2,
      aiEngine: "Running",
    };
  },
};
EOF

echo ""
echo "=========================================="
echo "Sprint-03 Base Installed Successfully"
echo "=========================================="
