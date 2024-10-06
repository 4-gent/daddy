import { fetchAccessToken } from "hume";

export async function getAccessToken() {
  const apiKey = String(process.env.HUME_API_KEY);
  const secretKey = String(process.env.HUME_SECRET_KEY);
  const accessToken = await fetchAccessToken({ apiKey, secretKey });
  if (!accessToken) {
    throw new Error();
  }
  return accessToken;
};