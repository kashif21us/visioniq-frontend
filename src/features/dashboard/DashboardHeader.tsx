export default function DashboardHeader() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="mb-8 flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          VisionIQ Enterprise
        </h1>

        <p className="mt-2 text-slate-500">
          AI Attendance & Face Recognition Dashboard
        </p>

        <p className="mt-2 text-sm text-slate-400">
          {today}
        </p>
      </div>

      <div className="flex gap-3">
        <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
          Add Employee
        </button>

        <button className="rounded-lg border px-4 py-2 hover:bg-slate-100">
          Generate Report
        </button>
      </div>
    </div>
  );
}
