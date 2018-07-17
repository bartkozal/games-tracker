export const setAuthToken = token => ({
  headers: { Authorization: `Bearer ${token}` }
});

export const paramsSerializer = params =>
  Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
