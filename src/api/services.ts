// src/api/services.ts
import { api, handleApiError } from "./axios";
import {
  RegisterRequest,
  RegisterResponse,
  LoginRequest,
  LoginResponse,
  SetUserInterestsRequest,
  UpdateUserInterestsRequest,
  GetFollowedNgosResponse,
  ApplyForNgoRequest,
  ApplyForNgoResponse,
  GetNgoByIdResponse,
  ToggleFollowNgoResponse,
  GetNgoFollowersResponse,
  GetAllCampaignsResponse,
  GetSingleCampaignResponse,
  GetCampaignsByNgoIdResponse,
  RegisterForCampaignResponse,
  GetRegisteredCampaignsResponse,
  GetVolunteersForCampaignResponse,
  UnregisterForCampaignResponse,
  GetSuggestedCampaignsResponse,
  UpdateCampaignRequest,
  UpdateCampaignResponse,
  DeleteCampaignResponse,
  CreateCampaignRequest,
  CreateCampaignResponse,
} from "./types";

// Register User
export const registerUser = async (
  data: RegisterRequest
): Promise<RegisterResponse> => {
  try {
    const response = await api.post("/auth/register", data);
    console.log("Register Response:", response.data); // Log response for debugging
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

// Login User
export const loginUser = async (data: LoginRequest): Promise<LoginResponse> => {
  try {
    const response = await api.post("/auth/login", data);
    console.log("Login Response:", response.data); // Log response for debugging
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

// Set User Interests
export const setUserInterests = async (
  data: SetUserInterestsRequest
): Promise<void> => {
  try {
    const response = await api.post("/auth/interests", data);
    console.log("Set User Interests Response:", response.data); // Log response for debugging
  } catch (error) {
    handleApiError(error);
  }
};

// Update User Interests
export const updateUserInterests = async (
  data: UpdateUserInterestsRequest
): Promise<void> => {
  try {
    const response = await api.patch("/auth/interests", data);
    console.log("Update User Interests Response:", response.data); // Log response for debugging
  } catch (error) {
    return handleApiError(error);
  }
};

// Get Followed NGOs
export const getFollowedNgos = async (): Promise<GetFollowedNgosResponse> => {
  try {
    const response = await api.get("/users/followed-ngos");
    console.log("Get Followed NGOs Response:", response.data); // Log response for debugging
    return { data: response.data }; // Wrap data in the expected response structure
  } catch (error) {
    return handleApiError(error);
  }
};

export const applyForNgo = async (
  data: ApplyForNgoRequest
): Promise<ApplyForNgoResponse> => {
  try {
    const response = await api.post("/ngos/apply", data);
    console.log("Apply for NGO Response:", response.data); // Log response for debugging
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const getNgoById = async (
  ngoId: string
): Promise<GetNgoByIdResponse> => {
  try {
    const response = await api.get(`/ngos/${ngoId}`);
    console.log("Get NGO by ID Response:", response.data); // Log response for debugging
    return { data: response.data };
  } catch (error) {
    return handleApiError(error);
  }
};

export const toggleFollowNgo = async (
  ngoId: string
): Promise<ToggleFollowNgoResponse> => {
  try {
    const response = await api.post(`/ngos/${ngoId}/toggleFollow`);
    console.log("Toggle Follow NGO Response:", response.data); // Log response for debugging
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const getNgoFollowers = async (
  ngoId: string
): Promise<GetNgoFollowersResponse> => {
  try {
    const response = await api.get(`/ngos/${ngoId}/followers`);
    console.log("Get NGO Followers Response:", response.data); // Log response for debugging
    return { data: response.data };
  } catch (error) {
    return handleApiError(error);
  }
};

export const getAllCampaigns = async (): Promise<GetAllCampaignsResponse> => {
  try {
    const response = await api.get("/campaigns");
    console.log("Get All Campaigns Response:", response.data); // Log response for debugging
    return { data: response.data };
  } catch (error) {
    return handleApiError(error);
  }
};

export const getSingleCampaign = async (
  campaignId: string
): Promise<GetSingleCampaignResponse> => {
  try {
    const response = await api.get(`/campaigns/${campaignId}`);
    console.log("Get Single Campaign Response:", response.data); // Log response for debugging
    return { data: response.data };
  } catch (error) {
    return handleApiError(error);
  }
};

export const getCampaignsByNgoId = async (
  ngoId: string
): Promise<GetCampaignsByNgoIdResponse> => {
  try {
    const response = await api.get(`/campaigns?ngoId=${ngoId}`);
    console.log("Get Campaigns by NGO ID Response:", response.data); // Log response for debugging
    return { data: response.data };
  } catch (error) {
    return handleApiError(error);
  }
};

export const registerForCampaign = async (
  campaignId: string
): Promise<RegisterForCampaignResponse> => {
  try {
    const response = await api.post(`/campaigns/${campaignId}/register`);
    console.log("Register for Campaign Response:", response.data); // Log response for debugging
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const unregisterForCampaign = async (
  campaignId: string
): Promise<UnregisterForCampaignResponse> => {
  try {
    const response = await api.delete(`/campaigns/${campaignId}/register`);
    console.log("Unregister for Campaign Response:", response.data); // Log response for debugging
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const getRegisteredCampaigns =
  async (): Promise<GetRegisteredCampaignsResponse> => {
    try {
      const response = await api.get("/campaigns/registered");
      console.log("Get Registered Campaigns Response:", response.data); // Log response for debugging
      return { data: response.data };
    } catch (error) {
      return handleApiError(error);
    }
  };

export const getVolunteersForCampaign = async (
  campaignId: string
): Promise<GetVolunteersForCampaignResponse> => {
  try {
    const response = await api.get(`/campaigns/${campaignId}/volunteers`);
    console.log("Get Volunteers for Campaign Response:", response.data); // Log response for debugging
    return { data: response.data };
  } catch (error) {
    return handleApiError(error);
  }
};

export const getSuggestedCampaigns =
  async (): Promise<GetSuggestedCampaignsResponse> => {
    try {
      const response = await api.get("/campaigns/suggested");
      console.log("Get Suggested Campaigns Response:", response.data); // Log response for debugging
      return { data: response.data };
    } catch (error) {
      return handleApiError(error);
    }
  };

export const updateCampaign = async (
  campaignId: string,
  data: UpdateCampaignRequest
): Promise<UpdateCampaignResponse> => {
  try {
    const response = await api.put(`/campaigns/${campaignId}`, data);
    console.log("Update Campaign Response:", response.data); // Log response for debugging
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const deleteCampaign = async (
  campaignId: string
): Promise<DeleteCampaignResponse> => {
  try {
    const response = await api.delete(`/campaigns/${campaignId}`);
    console.log("Delete Campaign Response:", response.data); // Log response for debugging
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const createCampaign = async (
  data: CreateCampaignRequest
): Promise<CreateCampaignResponse> => {
  try {
    const response = await api.post("/campaigns", data);
    console.log("Create Campaign Response:", response.data); // Log response for debugging
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};
