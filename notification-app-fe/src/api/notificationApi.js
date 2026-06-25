const BASE_URL = "http://4.224.186.213/evaluation-service";

const TOKEN = import.meta.env.VITE_AUTH_TOKEN;

export async function getNotifications() {
  try {
    const response = await fetch(`${BASE_URL}/notifications`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch notifications");
    }

    const data = await response.json();

    console.log("Notifications:", data);

    return data;
  } catch (error) {
    console.error("Notification API Error:", error);

    return {
      notifications: [],
    };
  }
}