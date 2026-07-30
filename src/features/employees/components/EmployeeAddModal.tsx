"use client";

import { X } from "lucide-react";
import EmployeeForm from "./EmployeeForm";
import { createEmployee } from "../services/employee.service";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function EmployeeAddModal({
  open,
  onClose,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

      <div className="w-full max-w-2xl rounded-xl bg-white shadow-xl">

        <div className="flex items-center justify-between border-b p-5">
          <h2 className="text-xl font-bold">
            Add New Employee
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
            submitLabel="Create Employee"
            onSubmit={async (values) => {
              await createEmployee(values);
              onClose();
            }}
          />
        </div>

      </div>

    </div>
  );
}
