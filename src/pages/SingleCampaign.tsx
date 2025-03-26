import { CampaignPage } from "@/components";
import { useParams } from "react-router";

export const SingleCampaign = () => {
  const { campaignId } = useParams();
  return (
    <>
      <CampaignPage />
    </>
  );
};
