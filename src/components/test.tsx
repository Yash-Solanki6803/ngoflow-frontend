import { useGetCampaignsQuery } from "../redux/api";

const CampaignList = () => {
  // Call the API & get data
  const { data: campaigns, error, isLoading } = useGetCampaignsQuery();

  // Log the response
  console.log("Campaigns Data:", campaigns);

  // Handle loading and errors
  if (isLoading) return <p>Loading campaigns...</p>;
  if (error) return <p>Error fetching campaigns</p>;

  return (
    <div>
      <h2 className="text-xl font-bold">Campaigns</h2>
      <ul className="list-disc pl-5">
        {campaigns?.map((campaign: any) => (
          <li key={campaign.id}>{campaign.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default CampaignList;
