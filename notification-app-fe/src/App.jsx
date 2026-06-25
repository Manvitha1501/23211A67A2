import { useEffect, useState } from "react";
import { getNotifications } from "./api/notificationApi";
import { Log } from "./utils/logger";
import NotificationCard from "./components/NotificationCard";

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

      setNotifications(data.notifications);
    }

    loadData();
  }, []);

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "20px",
      }}
    >
      <h1>Notifications App</h1>

      <h3>Total Notifications : {notifications.length}</h3>

      {notifications.map((item) => (
        <NotificationCard
          key={item.ID}
          item={item}
        />
      ))}
    </div>
  );
}