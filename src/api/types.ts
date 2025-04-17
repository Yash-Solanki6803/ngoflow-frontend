// src/api/types.ts

// Enum for user roles
export enum UserRole {
  VOLUNTEER = "volunteer",
  NGO = "ngo",
  DEV = "dev",
}

// User interface
export interface User {
  id: number;
  name?: string; // Optional for some responses
  email: string;
  password?: string; // Only included in login response, hashed
  role: UserRole;
  lastInterestUpdate?: string | null; // Timestamp or null
}

// Register Request
export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

// Register Response
export interface RegisterResponse {
  message: string;
}

// Login Request
export interface LoginRequest {
  email: string;
  password: string;
}

// Login Response
export interface LoginResponse {
  user: User;
  token: string;
}

// Set User Interests Request
export interface SetUserInterestsRequest {
  categoryIds: number[];
  subcategoryIds: number[];
}

// Update User Interests Request
export interface UpdateUserInterestsRequest {
  categoryIds: number[];
  subcategoryIds: number[];
}

// Followed NGO
export interface FollowedNgo {
  id: string;
  name: string;
}

// Get Followed NGOs Response
export interface GetFollowedNgosResponse {
  data: FollowedNgo[];
}

export interface ApplyForNgoRequest {
  name: string;
  description: string;
  mission: string;
  categoryId: number;
  location: string;
  contactEmail: string;
  contactPhone: string;
}

export interface ApplyForNgoResponse {
  message?: string; // Optional, as the backend might not return a message in some cases
}

export interface Ngo {
  id: string;
  name: string;
  description: string;
  location: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  owner: {
    id: number;
    name: string;
  };
  category: {
    id: number;
    name: string;
  };
  followerCount: number;
  campaignCount: number;
  totalRegistrations: number;
}

export interface GetNgoByIdResponse {
  data: Ngo;
}

export interface ToggleFollowNgoResponse {
  message: string;
  following: boolean;
}

export interface NgoFollower {
  id: string | number; // Adjust based on actual response (string or number)
  name: string;
}

export interface GetNgoFollowersResponse {
  data: NgoFollower[];
}

// export interface Campaign {
//   id: string;
//   title: string;
//   description: string;
//   startDate: string;
//   endDate: string;
//   ngo: {
//     id: string;
//     name: string;
//     user: {
//       name: string;
//     };
//   };
//   createdAt: string;
//   updatedAt: string;
// }

export interface GetAllCampaignsResponse {
  data: Campaign[];
}

// src/api/types.ts
// ... (existing imports and interfaces)

export interface Volunteer {
  id: number;
  name: string;
  email: string;
  role: UserRole;
}

export interface Campaign {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  ngo: {
    id: string;
    name: string;
    description: string;
    mission: string;
    location: string;
    contactEmail: string;
    contactPhone: string;
    status: string;
    createdAt: string;
    updatedAt: string;
  };
  volunteers: Volunteer[];
  createdAt: string;
  updatedAt: string;
}

export interface GetSingleCampaignResponse {
  data: Campaign;
}

export interface GetCampaignsByNgoIdResponse {
  data: Campaign[];
}

export interface RegisterForCampaignResponse {
  message: string;
}

export interface GetRegisteredCampaignsResponse {
  data: Campaign[];
}

export interface GetVolunteersForCampaignResponse {
  data: Campaign;
}

export interface UnregisterForCampaignResponse {
  message: string;
}

export interface GetSuggestedCampaignsResponse {
  data: Campaign[];
}

export interface UpdateCampaignRequest {
  title?: string;
  description?: string;
  startDate?: string;
  endDate?: string;
  location?: string;
}

export interface UpdateCampaignResponse {
  message: string;
  campaign: Campaign;
}

export interface DeleteCampaignResponse {
  message: string;
}

export interface CreateCampaignRequest {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  subcategoryIds: number[]; // Array of subcategory IDs
}

export interface CreateCampaignResponse {
  message: string;
  campaign: Campaign;
}
