export const exportHandeler = (err) => {
  if (err.status && err.status === 401) {
    return { shouldRedirect: true, path: "/login" };
  }
};
