export default function SystemHealth() {
  const items = [
    { name: "API", status: "Online", color: "bg-green-500" },
    { name: "Database", status: "Healthy", color: "bg-green-500" },
    { name: "AI Engine", status: "Running", color: "bg-green-500" },
    { name: "GPU", status: "CUDA Ready", color: "bg-blue-500" },
    { name: "Storage", status: "71%", color: "bg-yellow-500" },
    { name: "RAM", status: "48%", color: "bg-indigo-500" },
  ];

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold">
        System Health
      </h2>

      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between"
          >
            <span>{item.name}</span>

            <div className="flex items-center gap-2">
              <span
                className={`h-3 w-3 rounded-full ${item.color}`}
              />
              <span className="text-sm text-slate-600">
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
