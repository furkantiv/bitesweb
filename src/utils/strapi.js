import axios from "axios";
import qs from "qs";

const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

const strapi = axios.create({
  baseURL: `${strapiUrl}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add authentication token if needed
if (process.env.STRAPI_API_TOKEN) {
  strapi.defaults.headers.Authorization = `Bearer ${process.env.STRAPI_API_TOKEN}`;
}

export default strapi;

// Helper functions for common operations
export const getStrapiData = async (path, params = {}) => {
  try {
    const query = qs.stringify(params, { encodeValuesOnly: true });
    const response = await strapi.get(`${path}?${query}`);
    return response.data;
  } catch (error) {
    console.error("Strapi API Error:", error);
    throw error;
  }
};

export const getStrapiSingle = async (path, params = {}) => {
  const data = await getStrapiData(path, params);
  return data.data;
};

export const getStrapiCollection = async (path, params = {}) => {
  const data = await getStrapiData(path, params);
  return data.data;
};
