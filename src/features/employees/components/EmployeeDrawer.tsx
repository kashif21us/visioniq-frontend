"use client";

import { X } from "lucide-react";
import type { Employee } from "../types/employee";


type Props = {
  open: boolean;
  employee: Employee | null;
  onClose: () => void;
};

export default function EmployeeDrawer({
  open,
  employee,
  onClose,
}: Props) {
  if (!open || !employee) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40">

      <div className="h-full w-full max-w-md bg-white shadow-xl">

        <div className="flex items-center justify-between border-b p-5">
          <h2 className="text-xl font-bold">
            Employee Details
          </h2>

          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-slate-100"
          >
            <X size={20} />
          </button>
        </div>

        <div className="space-y-5 p-6">

          <div>
            <label className="text-sm text-slate-500">
              Employee ID
            </label>

            <p className="font-semibold">
              {employee.employee_id}
            </p>
          </div>

          <div>
            <label className="text-sm text-slate-500">
              Name
            </label>

            <p className="font-semibold">
              {employee.name}
            </p>
          </div>

          <div>
            <label className="text-sm text-slate-500">
              Department
            </label>

            <p className="font-semibold">
              {employee.department}
            </p>
          </div>

          <div>
            <label className="text-sm text-slate-500">
              Designation
            </label>

            <p className="font-semibold">
              {employee.designation}
            </p>
          </div>

          <div>
            <label className="text-sm text-slate-500">
              Status
            </label>

            <p className="font-semibold">
              {employee.status}
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}
