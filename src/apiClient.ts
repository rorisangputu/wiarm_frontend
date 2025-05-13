import { SignInFormData } from "./pages/SignIn";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

export const validateToken = async () => {
  const response = await fetch(
    `${API_BASE_URL}/api/admin_auth/validate-token`,
    { credentials: "include" }
  );

  if (!response.ok) {
    throw new Error("Invalid Token");
  }
  return response.json();
};

export const signIn = async (formData: SignInFormData) => {
  const response = await fetch(`${API_BASE_URL}/api/admin_auth/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const body = await response.json();
  if (!response.ok) {
    throw new Error(body.message);
  }

  return body;
};

export const logout = async () => {
  const res = await fetch(`${API_BASE_URL}/api/admin_auth/logout`, {
    credentials: "include",
    method: "POST",
  });

  if (!res.ok) {
    throw new Error("Error during sign out");
  }
};
