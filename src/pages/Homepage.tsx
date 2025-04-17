// src/pages/Homepage.tsx
import { useEffect } from "react";
import {
  AboutComponent,
  GlobalImpact,
  HeroComponent,
  SearchNgosCampaigns,
  Testimonials,
  TrendingCampaigns,
} from "../components";
import { getAllCampaigns } from "@/api/services";

export const Homepage = () => {
  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await getAllCampaigns();
        console.log("Get All Campaigns Response:", response.data); // Log response
      } catch (error) {
        console.error("Error fetching campaigns:", error);
      }
    };
    fetchCampaigns();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroComponent />

      <AboutComponent />
      <GlobalImpact />
      <SearchNgosCampaigns />
      <TrendingCampaigns />
      <Testimonials />
    </div>
  );
};
