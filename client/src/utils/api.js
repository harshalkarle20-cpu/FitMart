// src/utils/api.js

/**
 * Normalized backend API URL.
 * Defaults to "http://localhost:5000" if VITE_API_URL is undefined.
 * Strips any trailing slashes to guarantee clean endpoint concatenation.
 */
const rawUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
export const API_URL = rawUrl.replace(/\/+$/, "");

/** Alias for API_URL for backward compatibility across components */
export const API = API_URL;

/**
 * Standard API base route prefixed with "/api".
 * e.g., "http://localhost:5000/api"
 */
export const API_BASE = `${API_URL}/api`;

export default API_URL;
