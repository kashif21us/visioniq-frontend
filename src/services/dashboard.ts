import { api } from "./api";
import { DashboardStats } from "@/types/dashboard";
import { mockDashboard } from "@/mocks/dashboard";

const USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK === "true";

export const dashboardService = {
  async getStats(): Promise<DashboardStats> {
    if (USE_MOCK) {
      return Promise.resolve(mockDashboard);
    }

    const { data } = await api.get("/dashboard/stats");
    return data;
  },
};
