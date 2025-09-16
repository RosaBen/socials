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

  let data;
  const contentType = response.headers.get("content-type");
  if (contentType && contentType.includes("application/json")) {
    data = await response.json();
  } else {
    data = await response.text();
  }

  if (!response.ok) {
    throw new Error(data?.error?.message || data?.message || 'Api error');
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

  editProfile: (username, email, password, bio, id) =>
    request(`/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ username, email, password, bio }),
    }),
};