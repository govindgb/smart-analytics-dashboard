export default function Topbar() {
  return (
    <div className="mb-6 flex justify-between items-center">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <button className="bg-black text-white px-4 py-2 rounded">
        Export
      </button>
    </div>
  );
}