import {
  AboutComponent,
  GlobalImpact,
  HeroComponent,
  SearchNgosCampaigns,
  Testimonials,
  TrendingCampaigns,
} from "../components";

export const Homepage = () => {
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
