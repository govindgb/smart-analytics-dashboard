export default function Home() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-5">
        <h2 className="text-xl font-bold mb-6">Analytics</h2>
        <ul className="space-y-3">
          <li className="hover:text-gray-300 cursor-pointer">Dashboard</li>
          <li className="hover:text-gray-300 cursor-pointer">Reports</li>
          <li className="hover:text-gray-300 cursor-pointer">Settings</li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-6">
        {/* Topbar */}
        <div className="mb-6 flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <button className="bg-black text-white px-4 py-2 rounded">
            Export
          </button>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded shadow">
            <p className="text-gray-500">Revenue</p>
            <h2 className="text-2xl font-bold">$12,340</h2>
          </div>

          <div className="bg-white p-5 rounded shadow">
            <p className="text-gray-500">Users</p>
            <h2 className="text-2xl font-bold">1,230</h2>
          </div>

          <div className="bg-white p-5 rounded shadow">
            <p className="text-gray-500">Growth</p>
            <h2 className="text-2xl font-bold">+18%</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
