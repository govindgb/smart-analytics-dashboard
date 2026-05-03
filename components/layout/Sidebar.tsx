export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white p-5">
      <h2 className="text-xl font-bold mb-6">Analytics</h2>
      <ul className="space-y-3">
        <li className="hover:text-gray-300 cursor-pointer">Dashboard</li>
        <li className="hover:text-gray-300 cursor-pointer">Reports</li>
        <li className="hover:text-gray-300 cursor-pointer">Settings</li>
      </ul>
    </aside>
  );
}