const alerts = [
  "Camera-03 Offline",
  "Unknown Face at Gate",
  "Low Storage Warning",
  "Attendance Device Offline",
];

export default function ActiveAlerts() {
  return (
    <div className="rounded-xl border border-red-200 bg-red-50 p-6 shadow-sm">
      <h2 className="mb-5 text-lg font-semibold text-red-700">
        Active Alerts
      </h2>

      <ul className="space-y-3">
        {alerts.map((a) => (
          <li key={a} className="rounded bg-white p-3">
            {a}
          </li>
        ))}
      </ul>
    </div>
  );
}
