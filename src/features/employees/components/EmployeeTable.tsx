"use client";

import { useMemo, useState } from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { Eye, Pencil, Trash2, User } from "lucide-react";
import { useEmployees } from "../hooks/useEmployees";
import EmployeeDrawer from "./EmployeeDrawer";
import EmployeeEditModal from "./EmployeeEditModal";
import EmployeeDeleteDialog from "./EmployeeDeleteDialog";
import type { Employee } from "../types/employee";

type EmployeeTableProps = {
  search: string;
  department: string;
  status: string;
};

export default function EmployeeTable({
  search,
  department,
  status,
}: EmployeeTableProps) {
  const { data = [], isLoading, isError } = useEmployees();
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [sorting, setSorting] = useState<SortingState>([]);

  const filteredEmployees = useMemo(() => {
    return data.filter((employee) => {
      const matchesSearch =
        !search ||
        employee.name.toLowerCase().includes(search.toLowerCase()) ||
        employee.employee_id.toLowerCase().includes(search.toLowerCase());
      const matchesDepartment =
        !department || employee.department === department;
      const matchesStatus =
        !status || employee.status === status;
      return matchesSearch && matchesDepartment && matchesStatus;
    });
  }, [data, search, department, status]);

  if (isLoading) {
    return (
      <div className="rounded-xl border bg-white p-6">
        Loading employees...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-red-600">
        Failed to load employees.
      </div>
    );
  }

  return (
    <>
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b p-6">
          <div>
            <h2 className="text-xl font-bold">
              Employees
            </h2>
            <p className="text-sm text-slate-500">
              Enterprise Employee Directory
            </p>
          </div>
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            {filteredEmployees.length} Result(s)
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-slate-100">
              <tr>
                <th className="p-4 text-left">Photo</th>
                <th className="p-4 text-left">Employee ID</th>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Department</th>
                <th className="p-4 text-left">Designation</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.map((employee) => (
                <tr
                  key={employee.id}
                  className="border-t hover:bg-slate-50"
                >
                  <td className="p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200">
                      <User size={18} />
                    </div>
                  </td>
                  <td className="p-4 font-medium">
                    {employee.employee_id}
                  </td>
                  <td className="p-4">
                    {employee.name}
                  </td>
                  <td className="p-4">
                    {employee.department}
                  </td>
                  <td className="p-4">
                    {employee.designation}
                  </td>
                  <td className="p-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        employee.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {employee.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => {
                          setSelectedEmployee(employee);
                          setDrawerOpen(true);
                        }}
                        className="rounded-lg border p-2 hover:bg-slate-100"
                      >
                        <Eye size={16} />
                      </button>
                      <button
                        onClick={() => {
                          setSelectedEmployee(employee);
                          setEditOpen(true);
                        }}
                        className="rounded-lg border p-2 hover:bg-blue-50"
                      >
                        <Pencil size={16} />
                      </button>
                      <button
                        onClick={() => {
                          setSelectedEmployee(employee);
                          setDeleteOpen(true);
                        }}
                        className="rounded-lg border p-2 hover:bg-red-50"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <EmployeeDrawer
        open={drawerOpen}
        employee={selectedEmployee}
        onClose={() => {
          setDrawerOpen(false);
          setSelectedEmployee(null);
        }}
      />

      <EmployeeEditModal
        open={editOpen}
        employee={selectedEmployee}
        onClose={() => {
          setEditOpen(false);
          setSelectedEmployee(null);
        }}
      />

      <EmployeeDeleteDialog
        open={deleteOpen}
        employee={selectedEmployee}
        onClose={() => {
          setDeleteOpen(false);
          setSelectedEmployee(null);
        }}
        onConfirm={() => {
          console.log("Delete Employee:", selectedEmployee);
          setDeleteOpen(false);
          setSelectedEmployee(null);
        }}
      />
    </>
  );
}
