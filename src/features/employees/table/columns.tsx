"use client";

import type { ColumnDef } from "@tanstack/react-table";
import type { Employee } from "../types/employee";

export const employeeColumns: ColumnDef<Employee>[] = [
  {
    accessorKey: "employee_id",
    header: "Employee ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "department",
    header: "Department",
  },
  {
    accessorKey: "designation",
    header: "Designation",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
];
