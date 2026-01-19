// Auth event utilities for instant navbar refresh
export const triggerAuthChange = () => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("authChanged"));
  }
};
