"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { employeeSchema } from "../schemas/employee.schema";
import type { EmployeeFormValues } from "../types/employee";

type Props = {
  defaultValues?: Partial<EmployeeFormValues>;
  submitLabel: string;
  onSubmit?: (values: EmployeeFormValues) => void;
};

export default function EmployeeForm({
  defaultValues,
  submitLabel,
  onSubmit,
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EmployeeFormValues>({
    resolver: zodResolver(employeeSchema),
    defaultValues: {
      employee_id: defaultValues?.employee_id ?? "",
      name: defaultValues?.name ?? "",
      department: defaultValues?.department ?? "",
      designation: defaultValues?.designation ?? "",
      status: defaultValues?.status ?? "Active",
    },
  });

  return (
    <form
      onSubmit={handleSubmit((data) => onSubmit?.(data))}
      className="grid gap-5 md:grid-cols-2"
    >
      <div>
        <label className="mb-2 block text-sm font-medium">
          Employee ID
        </label>

        <input
          {...register("employee_id")}
          className="w-full rounded-lg border p-3"
        />

        {errors.employee_id && (
          <p className="mt-1 text-sm text-red-600">
            {errors.employee_id.message}
          </p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Name
        </label>

        <input
          {...register("name")}
          className="w-full rounded-lg border p-3"
        />

        {errors.name && (
          <p className="mt-1 text-sm text-red-600">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Department
        </label>

        <input
          {...register("department")}
          className="w-full rounded-lg border p-3"
        />

        {errors.department && (
          <p className="mt-1 text-sm text-red-600">
            {errors.department.message}
          </p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Designation
        </label>

        <input
          {...register("designation")}
          className="w-full rounded-lg border p-3"
        />

        {errors.designation && (
          <p className="mt-1 text-sm text-red-600">
            {errors.designation.message}
          </p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Status
        </label>

        <select
          {...register("status")}
          className="w-full rounded-lg border p-3"
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>

        {errors.status && (
          <p className="mt-1 text-sm text-red-600">
            {errors.status.message}
          </p>
        )}
      </div>

      <div className="md:col-span-2 flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? "Saving..." : submitLabel}
        </button>
      </div>
    </form>
  );
}
