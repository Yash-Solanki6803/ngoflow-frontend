// src/components/Volunteer.tsx
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MessageSquare, Share2, ThumbsUp } from "lucide-react";
import {
  getFollowedNgos,
  getRegisteredCampaigns,
  unregisterForCampaign,
  getSuggestedCampaigns,
} from "@/api/services";

export const Volunteer = () => {
  const [selectedCampaignId, setSelectedCampaignId] = useState<string | null>(
    null
  ); // For unregister demo

  useEffect(() => {
    const fetchData = async () => {
      try {
        const followedNgosResponse = await getFollowedNgos();
        console.log("Followed NGOs Response:", followedNgosResponse.data); // Log response

        const registeredCampaignsResponse = await getRegisteredCampaigns();
        console.log(
          "Get Registered Campaigns Response:",
          registeredCampaignsResponse.data
        ); // Log response

        const suggestedCampaignsResponse = await getSuggestedCampaigns();
        console.log(
          "Get Suggested Campaigns Response:",
          suggestedCampaignsResponse.data
        ); // Log response
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleUnregister = async () => {
    if (selectedCampaignId) {
      try {
        const response = await unregisterForCampaign(selectedCampaignId);
        console.log("Unregister for Campaign Response:", response); // Log response
        setSelectedCampaignId(null); // Reset after unregistration
      } catch (error) {
        console.error("Error unregistering from campaign:", error);
      }
    }
  };

  return (
    <div className="space-y-8 mt-10 section-padding">
      <section>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold">Volunteer Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back, Sophia! Here's your activity overview.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarFallback>SM</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">Sophia Martinez</p>
              <p className="text-sm text-muted-foreground">Volunteer</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">
                Followed NGOs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
            </CardContent>
            <CardFooter>
              <Button variant="link" className="px-0" onClick={() => {}}>
                View all
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">
                Active Campaigns
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <Button
                variant="outline"
                size="sm"
                className="mt-2"
                onClick={() =>
                  setSelectedCampaignId("7708afa2-e07b-4cd9-ab16-6b562e1a2df9")
                } // Hardcoded ID for testing
                disabled={!selectedCampaignId}
              >
                Select Campaign to Unregister
              </Button>
              <Button
                variant="destructive"
                size="sm"
                className="mt-2"
                onClick={handleUnregister}
                disabled={!selectedCampaignId}
              >
                Unregister
              </Button>
            </CardContent>
            <CardFooter>
              <Button variant="link" className="px-0" onClick={() => {}}>
                View details
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">
                Volunteer Hours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">42</div>
            </CardContent>
            <CardFooter>
              <Button variant="link" className="px-0" onClick={() => {}}>
                View details
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <section className="lg:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">NGO Updates</h2>
            <Button
              variant="link"
              className="flex items-center"
              onClick={() => {}}
            >
              View all
            </Button>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback>GE</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-base">
                        GreenEarth Foundation
                      </CardTitle>
                      <CardDescription>Posted 2 hours ago</CardDescription>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  We're excited to announce our new tree planting campaign! Our
                  goal is to plant 10,000 trees by the end of the year.
                </p>
                <div className="bg-muted rounded-lg aspect-[2/1] flex items-center justify-center">
                  <span className="text-muted-foreground">800 × 400</span>
                </div>
              </CardContent>
              <CardFooter className="flex gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-1"
                >
                  <ThumbsUp className="h-4 w-4" />
                  Like
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-1"
                >
                  <MessageSquare className="h-4 w-4" />
                  Comment
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-1"
                >
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback>CW</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-base">
                        Clean Water Initiative
                      </CardTitle>
                      <CardDescription>Posted 1 day ago</CardDescription>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Thanks to all our amazing volunteers who helped with last
                  week's water filtration system installation. We provided clean
                  water access to over 200 families!
                </p>
              </CardContent>
              <CardFooter className="flex gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-1"
                >
                  <ThumbsUp className="h-4 w-4" />
                  Like
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-1"
                >
                  <MessageSquare className="h-4 w-4" />
                  Comment
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-1"
                >
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        <section className="lg:col-span-1">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Suggested Campaigns</h2>
            <Button
              variant="link"
              className="flex items-center"
              onClick={() => {}}
            >
              View all suggestions
            </Button>
          </div>

          <div className="space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex gap-4">
                  <div className="bg-muted rounded aspect-square w-16 flex items-center justify-center">
                    <span className="text-xs text-muted-foreground">
                      200×200
                    </span>
                  </div>
                  <div>
                    <CardTitle className="text-base">
                      Urban Gardens Initiative
                    </CardTitle>
                    <CardDescription>by GreenEarth Foundation</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Help build community gardens in urban neighborhoods
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  //   onClick={() => setCurrentPage("campaign-detail")}
                >
                  Learn more
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex gap-4">
                  <div className="bg-muted rounded aspect-square w-16 flex items-center justify-center">
                    <span className="text-xs text-muted-foreground">
                      200×200
                    </span>
                  </div>
                  <div>
                    <CardTitle className="text-base">
                      Digital Literacy Program
                    </CardTitle>
                    <CardDescription>by TechForAll</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Teach basic computer skills to seniors in your community
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  //   onClick={() => setCurrentPage("campaign-detail")}
                >
                  Learn more
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex gap-4">
                  <div className="bg-muted rounded aspect-square w-16 flex items-center justify-center">
                    <span className="text-xs text-muted-foreground">
                      200×200
                    </span>
                  </div>
                  <div>
                    <CardTitle className="text-base">
                      Animal Shelter Support
                    </CardTitle>
                    <CardDescription>by Animal Rescue League</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Help care for animals and assist with adoption events
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  //   onClick={() => setCurrentPage("campaign-detail")}
                >
                  Learn more
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};
