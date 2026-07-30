const cameras = [
  "Reception",
  "Gate 01",
  "Parking",
  "Warehouse"
];

export default function CameraGrid() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-lg font-semibold">
        Live Camera Grid
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {cameras.map((cam) => (
          <div
            key={cam}
            className="flex aspect-video items-center justify-center rounded-lg bg-slate-900 text-white"
          >
            {cam}
          </div>
        ))}
      </div>
    </div>
  );
}
