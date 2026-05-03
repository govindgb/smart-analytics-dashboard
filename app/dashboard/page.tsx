export default function DashboardPage() {
  return (
    <div>
      <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>
        Dashboard Overview
      </h1>

      {/* KPI Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <div style={cardStyle}>Users: 1200</div>
        <div style={cardStyle}>Revenue: ₹5400</div>
        <div style={cardStyle}>Sessions: 3200</div>
      </div>
    </div>
  );
}

const cardStyle: React.CSSProperties = {
  background: "white",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
};