import { z } from "zod";

export const employeeSchema = z.object({
  employee_id: z
    .string()
    .min(1, "Employee ID is required"),

  name: z
    .string()
    .min(2, "Employee name is required"),

  department: z
    .string()
    .min(2, "Department is required"),

  designation: z
    .string()
    .min(2, "Designation is required"),

  status: z.enum(["Active", "Inactive"]),
});

export type EmployeeSchema = z.infer<typeof employeeSchema>;
