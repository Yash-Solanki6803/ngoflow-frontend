// src/components/NgoPage.tsx
import {
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  MapPin,
  Share2,
  ThumbsUp,
  Twitter,
} from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Badge } from "../ui/badge";

interface NgoPageProps {
  onToggleFollow: () => void;
  isFollowing: boolean;
}

export const NgoPage = ({ onToggleFollow, isFollowing }: NgoPageProps) => {
  return (
    <div className="space-y-8 mt-10 section-padding">
      <section>
        <div className="relative">
          <div className="bg-muted h-48 md:h-64 lg:h-80 rounded-lg flex items-center justify-center">
            <span className="text-muted-foreground">1920 × 600</span>
          </div>
          <div className="absolute -bottom-16 left-8">
            <div className="bg-muted rounded-lg h-32 w-32 border-4 border-background flex items-center justify-center">
              <span className="text-muted-foreground">400 × 400</span>
            </div>
          </div>
        </div>

        <div className="pt-20 pb-4 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-3xl font-bold">GreenEarth Foundation</h1>
            <p className="text-muted-foreground">Environmental Conservation</p>
          </div>
          <Button variant="outline" onClick={onToggleFollow}>
            {isFollowing ? "Unfollow NGO" : "Follow NGO"}
          </Button>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <section className="lg:col-span-1">
          <h2 className="text-xl font-semibold mb-6">About</h2>
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground mb-4">
                GreenEarth Foundation is dedicated to preserving and restoring
                our planet's natural ecosystems through community engagement,
                education, and direct action programs.
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                Founded in 2010, we've planted over 500,000 trees, restored
                1,200 acres of habitat, and educated more than 25,000
                individuals on sustainable practices.
              </p>
              <p className="text-sm text-muted-foreground">
                Our mission is to create a sustainable future where humans live
                in harmony with nature, protecting biodiversity and combating
                climate change through local and global initiatives.
              </p>
            </CardContent>
          </Card>

          <h2 className="text-xl font-semibold mt-8 mb-6">
            Contact Information
          </h2>
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-sm">Address</p>
                  <p className="text-sm text-muted-foreground">
                    123 Green Street, New York, NY 10001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Globe className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-sm">Website</p>
                  <a href="#" className="text-sm text-primary hover:underline">
                    www.greenearth.org
                  </a>
                </div>
              </div>

              <div>
                <p className="text-sm mb-2">Connect With Us</p>
                <div className="flex space-x-4">
                  <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
                  <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
                  <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
                  <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
                </div>
              </div>
            </CardContent>
          </Card>

          <h2 className="text-xl font-semibold mt-8 mb-6">Followers</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <p className="font-medium">3,241</p>
                <p className="text-sm text-muted-foreground">
                  People following this NGO
                </p>
              </div>

              <div className="flex -space-x-2 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Avatar
                    key={i}
                    className="border-2 border-background h-8 w-8"
                  >
                    <AvatarFallback>{i}</AvatarFallback>
                  </Avatar>
                ))}
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-muted text-xs">
                  +3.2k
                </div>
              </div>

              <p className="text-sm text-muted-foreground">Recent followers</p>
            </CardContent>
          </Card>
        </section>

        <section className="lg:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Active Campaigns</h2>
            <Badge>5 campaigns</Badge>
          </div>

          <div className="space-y-6">
            <Card>
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="bg-muted aspect-[4/3] flex items-center justify-center">
                  <span className="text-muted-foreground">400 × 300</span>
                </div>
                <div className="md:col-span-2 p-6">
                  <div className="flex flex-col h-full">
                    <div>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <Badge>Environment</Badge>
                      </div>
                      <h3 className="text-xl font-bold mb-1">
                        <button
                          //   onClick={() => setCurrentPage("campaign-detail")}
                          className="hover:text-primary"
                        >
                          Tree Planting Initiative
                        </button>
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        May 15-Aug 30, 2023
                      </p>
                      <p className="text-sm text-muted-foreground mb-4">
                        Join us in our mission to plant 10,000 trees across
                        urban areas. Each tree helps combat climate change,
                        reduce air pollution, and create habitats for wildlife.
                      </p>
                    </div>
                    <div className="mt-auto">
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span>76 volunteers</span>
                      </div>
                      <div className="flex items-center gap-4 mt-4">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="flex items-center gap-1"
                        >
                          <ThumbsUp className="h-4 w-4" />
                          Like
                        </Button>
                        <Button
                          variant="default"
                          size="sm"
                          //   onClick={() => setCurrentPage("campaign-detail")}
                        >
                          View Campaign
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="bg-muted aspect-[4/3] flex items-center justify-center">
                  <span className="text-muted-foreground">400 × 300</span>
                </div>
                <div className="md:col-span-2 p-6">
                  <div className="flex flex-col h-full">
                    <div>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <Badge>Environment</Badge>
                        <Badge>Community</Badge>
                      </div>
                      <h3 className="text-xl font-bold mb-1">
                        <button
                          //   onClick={() => setCurrentPage("campaign-detail")}
                          className="hover:text-primary"
                        >
                          Urban Gardens Project
                        </button>
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Jun 1-Sep 30, 2023
                      </p>
                      <p className="text-sm text-muted-foreground mb-4">
                        Help us transform vacant lots into thriving community
                        gardens. We'll be building raised beds, planting
                        vegetables, and creating green spaces for everyone to
                        enjoy.
                      </p>
                    </div>
                    <div className="mt-auto">
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span>42 volunteers</span>
                      </div>
                      <div className="flex items-center gap-4 mt-4">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="flex items-center gap-1"
                        >
                          <ThumbsUp className="h-4 w-4" />
                          Like
                        </Button>
                        <Button
                          variant="default"
                          size="sm"
                          //   onClick={() => setCurrentPage("campaign-detail")}
                        >
                          View Campaign
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-8">
            <Button variant="outline" onClick={() => {}}>
              View All Campaigns
            </Button>
          </div>

          <h2 className="text-xl font-semibold mt-12 mb-6">Recent Updates</h2>
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
                    <CardDescription>2 days ago</CardDescription>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                We're excited to announce our new tree planting campaign! Our
                goal is to plant 10,000 trees by the end of the year. Join us
                and make a difference!
              </p>
              <div className="bg-muted rounded-lg aspect-[2/1] flex items-center justify-center">
                <span className="text-muted-foreground">800 × 400</span>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-muted-foreground">
                125 Likes • 34 Comments
              </div>
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
        </section>
      </div>
    </div>
  );
};
