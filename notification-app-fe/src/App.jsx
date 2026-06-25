import { useEffect, useMemo, useState } from "react";
import { getNotifications } from "./api/notificationApi";
import { Log } from "./utils/logger";

import NotificationList from "./components/NotificationList";
import NotificationFilter from "./components/NotificationFilter";

export default function App() {
  const [notifications, setNotifications] = useState([]);
  const [filter, setFilter] = useState("All");

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

  const filteredNotifications = useMemo(() => {
    if (filter === "All") {
      return notifications;
    }

    return notifications.filter(
      (item) => item.Type === filter
    );
  }, [notifications, filter]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Notifications App</h1>

      <h3>
        Total Notifications : {filteredNotifications.length}
      </h3>

      <NotificationFilter
        value={filter}
        onChange={setFilter}
      />

      <br />
      <br />

      <NotificationList
        notifications={filteredNotifications}
      />
    </div>
  );
}