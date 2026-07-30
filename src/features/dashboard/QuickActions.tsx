const actions = [
  "Add Employee",
  "Enroll Face",
  "Add Camera",
  "Attendance Report",
];

export default function QuickActions() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-3">
        {actions.map((action) => (
          <button
            key={action}
            className="rounded-lg bg-blue-600 px-4 py-3 text-white transition hover:bg-blue-700"
          >
            {action}
          </button>
        ))}
      </div>
    </div>
  );
}
