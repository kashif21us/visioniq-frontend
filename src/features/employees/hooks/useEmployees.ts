"use client";

import { useQuery } from "@tanstack/react-query";
import { employeeService } from "@/services/employee";

export function useEmployees() {
  return useQuery({
    queryKey: ["employees"],
    queryFn: employeeService.getAll,
  });
}
