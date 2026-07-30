type Props = {
  title: string;
  value: string;
  subtitle?: string;
};

export default function StatCard({ title, value, subtitle }: Props) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-lg transition">
      <p className="text-sm text-slate-500">{title}</p>
      <h2 className="mt-3 text-3xl font-bold">{value}</h2>
      {subtitle && (
        <p className="mt-2 text-xs text-slate-400">{subtitle}</p>
      )}
    </div>
  );
}
