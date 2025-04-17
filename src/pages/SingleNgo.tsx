// src/pages/SingleNgo.tsx
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { NgoPage } from "@/components";
import {
  getNgoById,
  toggleFollowNgo,
  getNgoFollowers,
  getCampaignsByNgoId,
} from "@/api/services";

export const SingleNgo = () => {
  const { ngoId } = useParams<{ ngoId: string }>();
  const [isFollowing, setIsFollowing] = useState<boolean>(false);

  useEffect(() => {
    const fetchNgoData = async () => {
      if (ngoId) {
        try {
          const ngoResponse = await getNgoById(ngoId);
          console.log("Get NGO by ID Response:", ngoResponse.data); // Log response

          const followersResponse = await getNgoFollowers(ngoId);
          console.log("Get NGO Followers Response:", followersResponse.data); // Log response

          const campaignsResponse = await getCampaignsByNgoId(ngoId);
          console.log(
            "Get Campaigns by NGO ID Response:",
            campaignsResponse.data
          ); // Log response
        } catch (error) {
          console.error("Error fetching NGO data:", error);
        }
      }
    };
    fetchNgoData();
  }, [ngoId]);

  const handleToggleFollow = async () => {
    if (ngoId) {
      try {
        const response = await toggleFollowNgo(ngoId);
        console.log("Toggle Follow Response:", response); // Log response
        setIsFollowing(response.following); // Update state based on response
      } catch (error) {
        console.error("Error toggling follow:", error);
      }
    }
  };

  return (
    <>
      <NgoPage onToggleFollow={handleToggleFollow} isFollowing={isFollowing} />
    </>
  );
};
