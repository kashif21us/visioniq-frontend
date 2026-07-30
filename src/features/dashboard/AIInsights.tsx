export default function AIInsights() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-lg font-semibold">
        AI Insights
      </h2>

      <div className="space-y-4">
        <div className="flex justify-between">
          <span>Recognition Accuracy</span>
          <strong>99.2%</strong>
        </div>

        <div className="flex justify-between">
          <span>Today's Recognitions</span>
          <strong>1,286</strong>
        </div>

        <div className="flex justify-between">
          <span>Unknown Faces</span>
          <strong>5</strong>
        </div>

        <div className="flex justify-between">
          <span>Average Processing</span>
          <strong>0.18 sec</strong>
        </div>
      </div>
    </div>
  );
}
