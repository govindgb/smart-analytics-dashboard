export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <aside
        style={{
          width: "240px",
          background: "#0f172a",
          color: "white",
          padding: "20px",
        }}
      >
        <h2>Analytics</h2>
        <nav style={{ marginTop: "20px" }}>
          <p>Dashboard</p>
          <p>Reports</p>
          <p>Settings</p>
        </nav>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, background: "#f8fafc", padding: "20px" }}>
        {children}
      </main>
    </div>
  );
}