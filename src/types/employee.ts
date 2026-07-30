export interface Employee {
  id: number;
  employee_id: string;
  name: string;
  email: string;
  phone: string;
  department: string;
  designation: string;
  status: "Active" | "Inactive";
  created_at?: string;
}
