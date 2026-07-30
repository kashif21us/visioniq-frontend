"use client";

import { TriangleAlert } from "lucide-react";

type Employee = {
  id: number | string;
  employee_id: string;
  name: string;
};

type Props = {
  open: boolean;
  employee: Employee | null;
  onClose: () => void;
  onConfirm: () => void;
};

export default function EmployeeDeleteDialog({
  open,
  employee,
  onClose,
  onConfirm,
}: Props) {
  if (!open || !employee) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

      <div className="w-full max-w-md rounded-xl bg-white shadow-xl">

        <div className="border-b p-6">
          <div className="flex items-center gap-3">
            <TriangleAlert className="text-red-600" size={28} />
            <h2 className="text-xl font-bold text-red-600">
              Delete Employee
            </h2>
          </div>
        </div>

        <div className="space-y-4 p-6">

          <p className="text-slate-700">
            Are you sure you want to delete this employee?
          </p>

          <div className="rounded-lg bg-slate-100 p-4">

            <p>
              <strong>ID:</strong> {employee.employee_id}
            </p>

            <p>
              <strong>Name:</strong> {employee.name}
            </p>

          </div>

          <p className="text-sm text-red-600">
            This action cannot be undone.
          </p>

        </div>

        <div className="flex justify-end gap-3 border-t p-5">

          <button
            onClick={onClose}
            className="rounded-lg border px-5 py-2"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="rounded-lg bg-red-600 px-5 py-2 text-white hover:bg-red-700"
          >
            Delete Employee
          </button>

        </div>

      </div>

    </div>
  );
}
