import { Employee } from "@/types/employee";

export const mockEmployees: Employee[] = [
  {
    id: 1,
    employee_id: "EMP-0001",
    name: "Muhammad Ali",
    email: "ali@visioniq.local",
    phone: "+92-300-1111111",
    department: "IT",
    designation: "System Engineer",
    status: "Active",
  },
  {
    id: 2,
    employee_id: "EMP-0002",
    name: "Ahmed Khan",
    email: "ahmed@visioniq.local",
    phone: "+92-300-2222222",
    department: "HR",
    designation: "HR Manager",
    status: "Active",
  },
  {
    id: 3,
    employee_id: "EMP-0003",
    name: "Sara Ahmed",
    email: "sara@visioniq.local",
    phone: "+92-300-3333333",
    department: "Finance",
    designation: "Accountant",
    status: "Inactive",
  }
];
