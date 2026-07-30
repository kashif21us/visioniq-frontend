export default function EmployeeStats() {
  const stats = [
    {
      title: "Total Employees",
      value: "245",
      color: "text-blue-600",
    },
    {
      title: "Active",
      value: "221",
      color: "text-green-600",
    },
    {
      title: "Inactive",
      value: "24",
      color: "text-red-600",
    },
    {
      title: "Face Enrolled",
      value: "238",
      color: "text-purple-600",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => (
        <div
          key={item.title}
          className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <p className="text-sm text-slate-500">{item.title}</p>

          <h2 className={`mt-2 text-3xl font-bold ${item.color}`}>
            {item.value}
          </h2>
        </div>
      ))}
    </div>
  );
}
