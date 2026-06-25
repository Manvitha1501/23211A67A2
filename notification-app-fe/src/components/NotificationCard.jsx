export default function NotificationCard({ item }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        marginBottom: "15px",
        backgroundColor: "#fff",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ margin: 0 }}>{item.Type}</h2>

      <p style={{ marginTop: "10px" }}>{item.Message}</p>

      <small
        style={{
          color: "gray",
        }}
      >
        {item.Timestamp}
      </small>
    </div>
  );
}