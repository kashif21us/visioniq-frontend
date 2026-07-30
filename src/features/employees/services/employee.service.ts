import type { Employee, EmployeeFormValues } from "../types/employee";

export async function createEmployee(
  payload: EmployeeFormValues,
): Promise<Employee> {
  console.log("Create Employee:", payload);

  return {
    id: Date.now(),
    ...payload,
  };
}

export async function updateEmployee(
  id: number | string,
  payload: EmployeeFormValues,
): Promise<Employee> {
  console.log("Update Employee:", id, payload);

  return {
    id,
    ...payload,
  };
}

export async function deleteEmployee(
  id: number | string,
): Promise<boolean> {
  console.log("Delete Employee:", id);
  return true;
}
