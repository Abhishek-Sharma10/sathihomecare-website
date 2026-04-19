export const ADMIN_ACCESS_KEY = "Bholesudha@123";
export const ADMIN_ACCESS_STORAGE_KEY = "sathi-admin-access";

export function hasAdminAccess() {
  if (typeof window === "undefined") return false;
  return window.sessionStorage.getItem(ADMIN_ACCESS_STORAGE_KEY) === "granted";
}

export function grantAdminAccess() {
  if (typeof window === "undefined") return;
  window.sessionStorage.setItem(ADMIN_ACCESS_STORAGE_KEY, "granted");
}
