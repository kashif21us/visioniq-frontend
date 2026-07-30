const cameras = [
  { name: "Camera 01", status: "Online" },
  { name: "Camera 02", status: "Online" },
  { name: "Camera 03", status: "Offline" },
];

export default function CameraStatus() {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Camera Status</h2>
      <div className="space-y-3">
        {cameras.map((c) => (
          <div key={c.name} className="flex justify-between">
            <span>{c.name}</span>
            <span>{c.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
