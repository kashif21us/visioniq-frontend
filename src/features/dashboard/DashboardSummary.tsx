export default function DashboardSummary() {
  return (
    <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold">
        Today's Summary
      </h2>

      <div className="mt-4 grid gap-4 md:grid-cols-4">
        <div>
          <p className="text-sm text-slate-500">Present</p>
          <p className="text-2xl font-bold text-green-600">221</p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Absent</p>
          <p className="text-2xl font-bold text-red-600">24</p>
        </div>

        <div>
          <p className="text-sm text-slate-500">AI Accuracy</p>
          <p className="text-2xl font-bold text-blue-600">99.2%</p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Unknown Faces</p>
          <p className="text-2xl font-bold text-orange-600">5</p>
        </div>
      </div>
    </div>
  );
}
