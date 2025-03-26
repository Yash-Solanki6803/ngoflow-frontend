import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";

export const TrendingCampaigns = () => {
  // Dummy data for trending campaigns
  const trendingCampaigns = [
    {
      id: 1,
      name: "Clean Ocean Initiative",
      organization: "Ocean Conservation Network",
      category: "Environment",
      description:
        "Join our mission to remove plastic waste from coastal areas and educate communities about ocean conservation.",
      progress: 72,
      volunteersNeeded: 25,
      volunteersRegistered: 18,
    },
    {
      id: 2,
      name: "Literacy for All",
      organization: "Education First Alliance",
      category: "Education",
      description:
        "Help provide books and educational resources to underserved communities and promote literacy skills.",
      progress: 80,
      volunteersNeeded: 40,
      volunteersRegistered: 32,
    },
    {
      id: 3,
      name: "Community Health Outreach",
      organization: "Health For All Initiative",
      category: "Healthcare",
      description:
        "Support mobile health clinics bringing essential services to remote areas and underserved populations.",
      progress: 24,
      volunteersNeeded: 50,
      volunteersRegistered: 12,
    },
    {
      id: 4,
      name: "Tree Planting Initiative",
      organization: "GreenEarth Foundation",
      category: "Environment",
      description:
        "Help us plant 10,000 trees across urban areas. Each tree helps combat climate change and creates habitats for wildlife.",
      progress: 45,
      volunteersNeeded: 100,
      volunteersRegistered: 45,
    },
    {
      id: 5,
      name: "Food Bank Volunteers",
      organization: "Helping Hands",
      category: "Food Security",
      description:
        "Help sort and distribute food to families in need through our network of food banks and community centers.",
      progress: 60,
      volunteersNeeded: 80,
      volunteersRegistered: 48,
    },
    {
      id: 6,
      name: "Digital Literacy Program",
      organization: "TechForAll",
      category: "Education",
      description:
        "Teach basic computer skills to seniors in your community. Help bridge the digital divide and empower older adults.",
      progress: 35,
      volunteersNeeded: 60,
      volunteersRegistered: 21,
    },
  ];

  // Campaign statistics
  const campaignStats = {
    activeCampaigns: 128,
    volunteersEngaged: "5,280+",
    communitiesReached: 87,
    completedCampaigns: 324,
  };

  // Popular categories
  const popularCategories = [
    { name: "Environment", percentage: 32 },
    { name: "Education", percentage: 28 },
    { name: "Healthcare", percentage: 20 },
  ];

  return (
    <div className="space-y-10 section-padding">
      <section>
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold">Trending Campaigns</h1>
            <p className="text-muted-foreground">
              Join these popular initiatives making significant impact right now
            </p>
          </div>
          <Button variant="link" className="flex items-center">
            All Campaigns <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingCampaigns.slice(0, 3).map((campaign) => (
            <Card key={campaign.id} className="overflow-hidden">
              <div className="bg-muted aspect-[2/1] flex items-center justify-center">
                <span className="text-muted-foreground">600 × 300</span>
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <Badge>{campaign.category}</Badge>
                    <CardTitle className="mt-2">
                      <button className="hover:text-primary text-left">
                        {campaign.name}
                      </button>
                    </CardTitle>
                    <CardDescription>{campaign.organization}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {campaign.description}
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span className="font-medium">{campaign.progress}%</span>
                  </div>
                  <Progress value={campaign.progress} className="h-2" />
                  <div className="text-sm text-muted-foreground">
                    Volunteers needed: {campaign.volunteersRegistered}/
                    {campaign.volunteersNeeded}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Join Campaign</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <section className="lg:col-span-1">
          <h2 className="text-2xl font-bold mb-6">Campaign Statistics</h2>
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-3xl font-bold">
                  {campaignStats.activeCampaigns}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Active Campaigns</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-3xl font-bold">
                  {campaignStats.volunteersEngaged}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Volunteers Engaged</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-3xl font-bold">
                  {campaignStats.communitiesReached}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Communities Reached</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-3xl font-bold">
                  {campaignStats.completedCampaigns}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Completed Campaigns</CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="lg:col-span-1">
          <h2 className="text-2xl font-bold mb-6">Popular Categories</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {popularCategories.map((category, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span>{category.name}</span>
                      <span>{category.percentage}%</span>
                    </div>
                    <Progress value={category.percentage} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="lg:col-span-1">
          <h2 className="text-2xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <Card className="bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle>Join thousands of volunteers</CardTitle>
              <CardDescription className="text-primary-foreground/80">
                Creating positive change in communities around the world.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button variant="secondary" className="w-full">
                Sign Up Now
              </Button>
            </CardFooter>
          </Card>
        </section>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-6">More Campaigns</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingCampaigns.slice(3, 6).map((campaign) => (
            <Card key={campaign.id} className="overflow-hidden">
              <div className="bg-muted aspect-[2/1] flex items-center justify-center">
                <span className="text-muted-foreground">600 × 300</span>
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <Badge>{campaign.category}</Badge>
                    <CardTitle className="mt-2">
                      <button className="hover:text-primary text-left">
                        {campaign.name}
                      </button>
                    </CardTitle>
                    <CardDescription>{campaign.organization}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {campaign.description}
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span className="font-medium">{campaign.progress}%</span>
                  </div>
                  <Progress value={campaign.progress} className="h-2" />
                  <div className="text-sm text-muted-foreground">
                    Volunteers needed: {campaign.volunteersRegistered}/
                    {campaign.volunteersNeeded}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Join Campaign</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};
