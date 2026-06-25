const BASE_URL = "http://4.224.186.213/evaluation-service";

const TOKEN = import.meta.env.VITE_AUTH_TOKEN;

export async function Log(stack, level, packageName, message) {
  try {
    const response = await fetch(`${BASE_URL}/logs`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        stack,
        level,
        package: packageName,
        message,
      }),
    });

    const data = await response.json();

    console.log("Log Created Successfully:", data);

    return data;
  } catch (error) {
    console.error("Logging Error:", error);
  }
}