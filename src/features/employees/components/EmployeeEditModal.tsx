"use client";

import { X } from "lucide-react";
import EmployeeForm from "./EmployeeForm";
import { updateEmployee } from "../services/employee.service";
import { toast } from "sonner";
import type { Employee } from "../types/employee";


type Props = {
  open: boolean;
  employee: Employee | null;
  onClose: () => void;
};

export default function EmployeeEditModal({
  open,
  employee,
  onClose,
}: Props) {
  if (!open || !employee) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

      <div className="w-full max-w-2xl rounded-xl bg-white shadow-xl">

        <div className="flex items-center justify-between border-b p-5">

          <h2 className="text-xl font-bold">
            Edit Employee
          </h2>

          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-slate-100"
          >
            <X size={20} />
          </button>

        </div>

        <div className="p-6">

          <EmployeeForm
            defaultValues={{
              employee_id: employee.employee_id,
              name: employee.name,
              department: employee.department,
              designation: employee.designation,
              status: employee.status,
            }}
            submitLabel="Save Changes"
            onSubmit={async (values) => {
              await updateEmployee(employee.id, values);
toast.success("Employee updated successfully");
              onClose();
            }}
          />

        </div>

      </div>

    </div>
  );
}
