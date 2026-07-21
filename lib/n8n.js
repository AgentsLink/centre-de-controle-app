const BASE = "https://agencelink.app.n8n.cloud/webhook";


async function call(path, body) {
  const res = await fetch(`${BASE}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-cc-secret": process.env.CC_API_SECRET || "",
    },
    body: JSON.stringify(body),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`n8n ${path} -> HTTP ${res.status}`);
  return res.json();
}

export const n8nRead = (body) => call("/cc-registre-x7Kd94mQvTz2LpWa8Rns", body);
export const n8nWrite = (body) => call("/cc-ecriture-p2Wq7nJx4TkVe9RmB3sd", body);
export const n8nAuth = (body) => call("/cc-auth-t6Yw3RqZk8LmPv2N", body);
