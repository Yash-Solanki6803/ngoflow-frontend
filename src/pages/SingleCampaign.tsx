// src/pages/SingleCampaign.tsx
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CampaignPage } from "@/components";
import {
  getSingleCampaign,
  registerForCampaign,
  getVolunteersForCampaign,
  unregisterForCampaign,
} from "@/api/services";

export const SingleCampaign = () => {
  const { campaignId } = useParams<{ campaignId: string }>();
  const [isRegistered, setIsRegistered] = useState<boolean>(false);

  useEffect(() => {
    const fetchCampaignData = async () => {
      if (campaignId) {
        try {
          const campaignResponse = await getSingleCampaign(campaignId);
          console.log("Get Single Campaign Response:", campaignResponse.data); // Log response

          const volunteersResponse = await getVolunteersForCampaign(campaignId);
          console.log(
            "Get Volunteers for Campaign Response:",
            volunteersResponse.data
          ); // Log response
        } catch (error) {
          console.error("Error fetching campaign data:", error);
        }
      }
    };
    fetchCampaignData();
  }, [campaignId]);

  const handleRegister = async () => {
    if (campaignId) {
      try {
        const response = await registerForCampaign(campaignId);
        console.log("Register for Campaign Response:", response); // Log response
        setIsRegistered(true); // Update state to reflect registration
      } catch (error) {
        console.error("Error registering for campaign:", error);
      }
    }
  };
  const handleUnregister = async () => {
    if (campaignId) {
      try {
        const response = await unregisterForCampaign(campaignId);
        console.log("Unregister for Campaign Response:", response); // Log response
        // For demo, reset selectedCampaignId after unregistration
      } catch (error) {
        console.error("Error unregistering from campaign:", error);
      }
    }
  };

  return (
    <>
      <CampaignPage
        onUnregister={handleUnregister}
        onRegister={handleRegister}
        isRegistered={isRegistered}
      />
    </>
  );
};
