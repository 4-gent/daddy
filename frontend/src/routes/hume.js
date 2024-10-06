import { fetchAccessToken } from "hume";

export async function getAccessToken() {
  const apiKey = String(process.env.HUME_API_KEY);
  const secretKey = String(process.env.HUME_SECRET_KEY);
  try {
    const accessToken = await fetchAccessToken({ apiKey, secretKey });
    return accessToken;
  } catch (error) {
    console.error('Error getting access token:', error);
  }
};