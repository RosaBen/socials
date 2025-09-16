import Cookies from 'js-cookie';


const API_URL = 'http://localhost:1337/api';

async function request (urlRequest, options = {}) {
  const token = Cookies.get('token');
  const headers = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  };

  const response = await fetch(`${API_URL}${urlRequest}`, {
    ...options,
    headers,
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error?.message || 'Api error');
  }
  return data;
}

export const api = {
  register: (username, email, password) =>
    request("/auth/local/register", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
    }),

  login: (identifier, password) =>
    request("/auth/local", {
      method: "POST",
      body: JSON.stringify({ identifier, password }),
    }),

  getMe: () => request("/users/me"),
};