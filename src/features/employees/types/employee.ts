import type { z } from "zod";
import type { employeeSchema } from "../schemas/employee.schema";

export interface Employee {
  id: number | string;
  employee_id: string;
  name: string;
  department: string;
  designation: string;
  status: "Active" | "Inactive";
}

export type EmployeeFormValues = z.infer<typeof employeeSchema>;

export interface EmployeeFilters {
  search: string;
  department: string;
  status: string;
}
