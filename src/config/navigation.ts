import {
  IconLayoutDashboard,
  IconUsers,
  IconCamera,
  IconUserScan,
  IconClipboardList,
  IconAlertTriangle,
  IconReportAnalytics,
  IconSettings,
  IconRoute,
  IconUserShield,
  IconChartBar,
  IconBell,
} from "@tabler/icons-react";

export const navigation = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: IconLayoutDashboard,
  },
  {
    title: "Employees",
    href: "/employees",
    icon: IconUsers,
  },
  {
    title: "Attendance",
    href: "/attendance",
    icon: IconClipboardList,
  },
  {
    title: "Live Tracking",
    href: "/tracking",
    icon: IconRoute,
  },
  {
    title: "Cameras",
    href: "/cameras",
    icon: IconCamera,
  },
  {
    title: "Enrollment",
    href: "/enrollment",
    icon: IconUserScan,
  },
  {
    title: "Unknown Faces",
    href: "/unknown-faces",
    icon: IconAlertTriangle,
  },
  {
    title: "Visitors",
    href: "/visitors",
    icon: IconUserShield,
  },
  {
    title: "Reports",
    href: "/reports",
    icon: IconReportAnalytics,
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: IconChartBar,
  },
  {
    title: "Alerts",
    href: "/alerts",
    icon: IconBell,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: IconSettings,
  },
];
