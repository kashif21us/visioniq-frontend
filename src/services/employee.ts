import { api } from "./api";
import { Employee } from "@/types/employee";
import { mockEmployees } from "@/mocks/employees";

const USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK === "true";

export const employeeService = {
  async getAll(): Promise<Employee[]> {
    if (USE_MOCK) {
      return Promise.resolve(mockEmployees);
    }

    const { data } = await api.get("/employees/");
    return data;
  },

  async getById(id: string): Promise<Employee> {
    if (USE_MOCK) {
      const employee = mockEmployees.find(
        (e) => e.id === Number(id)
      );

      if (!employee) {
        throw new Error("Employee not found");
      }

      return Promise.resolve(employee);
    }

    const { data } = await api.get(`/employees/${id}`);
    return data;
  },

  async create(employee: Partial<Employee>) {
    if (USE_MOCK) {
      console.log("Mock create:", employee);
      return Promise.resolve({ data: employee });
    }

    return api.post("/employees/", employee);
  },

  async update(id: string, employee: Partial<Employee>) {
    if (USE_MOCK) {
      console.log("Mock update:", id, employee);
      return Promise.resolve({ data: employee });
    }

    return api.put(`/employees/${id}`, employee);
  },

  async delete(id: string) {
    if (USE_MOCK) {
      console.log("Mock delete:", id);
      return Promise.resolve({ data: true });
    }

    return api.delete(`/employees/${id}`);
  },
};
