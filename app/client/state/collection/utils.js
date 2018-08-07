export const setAuthToken = token => ({
  headers: { Authorization: `Bearer ${token}` }
});

export const filtersSerializer = params =>
  Object.entries(params)
    .map(([key, value]) => `filter[${key}]=${value}`)
    .join("&");
