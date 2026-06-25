import { useEffect, useState } from "react";
import { getNotifications } from "./api/notificationApi";
import { Log } from "./utils/logger";

export default function App() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    async function loadData() {
      await Log(
        "frontend",
        "info",
        "component",
        "Fetching Notifications"
      );

      const data = await getNotifications();

      console.log(data.notifications[0]);

      setNotifications(data.notifications);
    }

    loadData();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Notifications App</h1>

      <h3>Total Notifications : {notifications.length}</h3>

      {notifications.map((item) => (
        <div
          key={item.ID}
          style={{
            border: "1px solid gray",
            padding: "10px",
            marginTop: "15px",
            borderRadius: "8px",
          }}
        >
          <h3>{item.Type}</h3>

          <p>{item.Message}</p>

          <small>{item.Timestamp}</small>
        </div>
      ))}
    </div>
  );
}