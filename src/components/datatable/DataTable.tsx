"use client";

import type { ColumnDef } from "@tanstack/react-table";

type Props<T> = {
  data: T[];
  columns: ColumnDef<T, unknown>[];
};

export default function DataTable<T>({
  data,
  columns,
}: Props<T>) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold">
          Enterprise Data Grid
        </h2>

        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
          {data.length} Rows
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th
                  key={column.id ?? index}
                  className="border-b bg-slate-100 p-3 text-left"
                >
                  {typeof column.header === "string"
                    ? column.header
                    : "Column"}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            <tr>
              <td
                colSpan={columns.length}
                className="p-6 text-center text-slate-500"
              >
                TanStack Table integration starts in Sprint-08 Part-B.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
