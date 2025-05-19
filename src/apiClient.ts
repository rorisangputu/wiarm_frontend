import { SignInFormData } from "./pages/AdminSignIn";
import { CampaignType } from "../../wiarm_backend/src/shared/types";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

export type SignInResponse = {
  admin: string; // Matches { admin: admin._id } from adminLogin
};

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

export const signIn = async (
  formData: SignInFormData
): Promise<SignInResponse> => {
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

export const fetchCampaigns = async (): Promise<CampaignType[]> => {
  const response = await fetch(`${API_BASE_URL}/api/campaigns`, {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Unable to fetch campaigns");
  }
  const result = await response.json();
  return result.data;
};

export const createCampaign = async (
  campaignFormData: FormData
): Promise<CampaignType> => {
  const response = await fetch(`${API_BASE_URL}/api/campaigns/create`, {
    method: "POST",
    credentials: "include",
    body: campaignFormData,
  });
  if (!response.ok) {
    throw new Error("Failed to add hotel");
  }
  return response.json();
};

export const editCampaign = async (campaignDataForm: FormData) => {
  const response = await fetch(
    `${API_BASE_URL}/api/campaigns/${campaignDataForm.get("campaignId")}/edit`,
    {
      method: "PUT",
      body: campaignDataForm,
      credentials: "include",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to update Campaign");
  }

  return response.json();
};

export const getCampaignById = async (
  campaignId: string
): Promise<{ data: CampaignType }> => {
  const response = await fetch(`${API_BASE_URL}/api/campaigns/${campaignId}`);
  if (!response) {
    throw new Error("Error fetching Campaign");
  }

  return response.json();
};
