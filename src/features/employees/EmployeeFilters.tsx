"use client";

type Props = {
  search: string;
  setSearch: (value: string) => void;
  department: string;
  setDepartment: (value: string) => void;
  status: string;
  setStatus: (value: string) => void;
  onAddEmployee: () => void;
};

export default function EmployeeFilters({
  search,
  setSearch,
  department,
  setDepartment,
  status,
  setStatus,
  onAddEmployee,
}: Props) {
  return (
    <div className="mt-8 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="grid gap-4 lg:grid-cols-4">

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search employee..."
          className="rounded-lg border p-3"
        />

        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="rounded-lg border p-3"
        >
          <option value="">All Departments</option>
          <option value="IT">IT</option>
          <option value="HR">HR</option>
          <option value="Finance">Finance</option>
        </select>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="rounded-lg border p-3"
        >
          <option value="">All Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>

        <button
          onClick={onAddEmployee}
          className="rounded-lg bg-blue-600 p-3 text-white hover:bg-blue-700"
        >
          + Add Employee
        </button>

      </div>
    </div>
  );
}
