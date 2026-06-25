import { useEffect, useMemo, useState } from "react";
import { getNotifications } from "./api/notificationApi";
import { Log } from "./utils/logger";

import NotificationList from "./components/NotificationList";
import NotificationFilter from "./components/NotificationFilter";
import NotificationSort from "./components/NotificationSort";
import SearchBar from "./components/SearchBar";

export default function App() {
  const [notifications, setNotifications] = useState([]);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("latest");

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
    return notifications
      .filter((item) => {
        const matchesType =
          filter === "All" || item.Type === filter;

        const matchesSearch =
          item.Message.toLowerCase().includes(
            search.toLowerCase()
          ) ||
          item.Type.toLowerCase().includes(
            search.toLowerCase()
          );

        return matchesType && matchesSearch;
      })
      .sort((a, b) => {
        if (sort === "latest") {
          return (
            new Date(b.Timestamp) -
            new Date(a.Timestamp)
          );
        }

        return (
          new Date(a.Timestamp) -
          new Date(b.Timestamp)
        );
      });
  }, [notifications, filter, search, sort]);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f7fb",
        padding: "30px",
      }}
    >
      <div
        style={{
          maxWidth: "950px",
          margin: "auto",
        }}
      >
        <h1
          style={{
            color: "#1565C0",
            marginBottom: "5px",
          }}
        >
          📢 Campus Notifications
        </h1>

        <p
          style={{
            color: "#555",
            marginTop: 0,
            marginBottom: "25px",
          }}
        >
          Stay updated with campus activities
        </p>

        <h3>
          Total Notifications :{" "}
          {filteredNotifications.length}
        </h3>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "15px",
            marginBottom: "20px",
          }}
        >
          <NotificationFilter
            value={filter}
            onChange={setFilter}
          />

          <NotificationSort
            value={sort}
            onChange={setSort}
          />
        </div>

        <SearchBar
          value={search}
          onChange={setSearch}
        />

        <NotificationList
          notifications={filteredNotifications}
        />
      </div>
    </div>
  );
}