export default function AttendanceTrend() {
  const days = [
    { day: "Mon", value: 92 },
    { day: "Tue", value: 95 },
    { day: "Wed", value: 91 },
    { day: "Thu", value: 97 },
    { day: "Fri", value: 94 },
    { day: "Sat", value: 82 },
    { day: "Sun", value: 76 },
  ];

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-lg font-semibold">
        Weekly Attendance Trend
      </h2>

      <div className="space-y-3">
        {days.map((d) => (
          <div key={d.day}>
            <div className="mb-1 flex justify-between text-sm">
              <span>{d.day}</span>
              <span>{d.value}%</span>
            </div>

            <div className="h-3 rounded bg-slate-200">
              <div
                className="h-3 rounded bg-blue-600"
                style={{ width: `${d.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
