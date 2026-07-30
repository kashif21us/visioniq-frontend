"use client";

import { useState } from "react";

import AppLayout from "@/components/layout/AppLayout";
import EmployeeStats from "@/features/employees/EmployeeStats";
import EmployeeFilters from "@/features/employees/EmployeeFilters";
import EmployeeTable from "@/features/employees/components/EmployeeTable";
import EmployeeAddModal from "@/features/employees/components/EmployeeAddModal";

export default function EmployeesPage() {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("");
  const [status, setStatus] = useState("");

  const [addOpen, setAddOpen] = useState(false);

  return (
    <AppLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">
          Employee Management
        </h1>

        <p className="mt-2 text-slate-500">
          Manage employees, departments and face enrollment.
        </p>
      </div>

      <EmployeeStats />

      <EmployeeFilters
        search={search}
        setSearch={setSearch}
        department={department}
        setDepartment={setDepartment}
        status={status}
        setStatus={setStatus}
        onAddEmployee={() => setAddOpen(true)}
      />

      <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <EmployeeTable
          search={search}
          department={department}
          status={status}
        />
      </div>

      <EmployeeAddModal
        open={addOpen}
        onClose={() => setAddOpen(false)}
      />
    </AppLayout>
  );
}
