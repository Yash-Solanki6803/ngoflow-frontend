import { Button } from "../ui/button";
import { CheckCircle, Facebook, Heart, Share2 } from "lucide-react";
import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Progress } from "../ui/progress";
import { Avatar, AvatarFallback } from "../ui/avatar";

export const CampaignPage = () => {
  return (
    <div className="space-y-8 mt-10 section-padding">
      <section>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <button
            // onClick={() => setCurrentPage("home")}
            className="hover:text-primary"
          >
            Home
          </button>
          <span>&gt;</span>
          <button
            // onClick={() => setCurrentPage("campaigns")}
            className="hover:text-primary"
          >
            Campaigns
          </button>
          <span>&gt;</span>
          <button
            // onClick={() => setCurrentPage("search")}
            className="hover:text-primary"
          >
            Environmental
          </button>
          <span>&gt;</span>
          <span>Tree Planting Initiative</span>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold">Tree Planting Initiative</h1>
            <div className="flex items-center gap-2 mt-1">
              <p className="text-muted-foreground">Organized by</p>
              <button
                // onClick={() => setCurrentPage("ngo-profile")}
                className="font-medium hover:text-primary"
              >
                GreenEarth Foundation
              </button>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" className="flex items-center gap-1">
              <Share2 className="h-4 w-4" />
              Share
            </Button>
            <Button variant="outline" className="flex items-center gap-1">
              <Heart className="h-4 w-4" />
              Like Campaign
            </Button>
            <Button>Register as Volunteer</Button>
          </div>
        </div>

        <div className="bg-muted rounded-lg aspect-[2/1] flex items-center justify-center mb-6">
          <span className="text-muted-foreground">1200 × 600</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge>Environment</Badge>
              <Badge>Community</Badge>
              <Badge>New York</Badge>
            </div>

            <div className="flex items-center gap-2 mb-6">
              <Badge
                variant="outline"
                className="bg-green-50 text-green-700 border-green-200"
              >
                Active Campaign
              </Badge>
              <p className="text-sm text-muted-foreground">
                May 15-Aug 30, 2023
              </p>
            </div>

            <h2 className="text-xl font-semibold mb-4">About This Campaign</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Join us in our mission to plant 10,000 trees across urban areas
                in New York. Each tree helps combat climate change, reduce air
                pollution, and create habitats for wildlife.
              </p>
              <p>Our Tree Planting Initiative focuses on:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Planting native tree species that are well-adapted to the
                  local climate
                </li>
                <li>
                  Targeting neighborhoods with the lowest tree canopy coverage
                </li>
                <li>Engaging local communities in planting and tree care</li>
                <li>
                  Sequester over 500 tons of carbon dioxide annually once trees
                  mature
                </li>
                <li>
                  Increase urban biodiversity by providing habitat for birds and
                  beneficial insects
                </li>
                <li>
                  Reduce urban heat island effect in targeted neighborhoods
                </li>
                <li>
                  Beautify neighborhoods and create more inviting public spaces
                </li>
              </ul>
            </div>

            <h2 className="text-xl font-semibold mt-8 mb-4">
              Upcoming Planting Events
            </h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    Central Park - North Meadow
                  </CardTitle>
                  <CardDescription>
                    May 28, 2023 9:00 AM - 1:00 PM
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">
                    Aiming to plant 200 saplings with 50 volunteers
                  </p>
                  <Badge
                    variant="outline"
                    className="bg-green-50 text-green-700 border-green-200"
                  >
                    Beginner Friendly
                  </Badge>
                  <span className="text-xs text-muted-foreground ml-2">
                    23/50 slots filled
                  </span>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    Riverside Park - North Section
                  </CardTitle>
                  <CardDescription>
                    June 10, 2023 10:00 AM - 2:00 PM
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">
                    Aiming to plant 150 saplings with 30 volunteers
                  </p>
                  <Badge
                    variant="outline"
                    className="bg-green-50 text-green-700 border-green-200"
                  >
                    Beginner Friendly
                  </Badge>
                  <span className="text-xs text-muted-foreground ml-2">
                    12/30 slots filled
                  </span>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    Prospect Park - Eastern Parklands
                  </CardTitle>
                  <CardDescription>
                    June 17, 2023 9:00 AM - 1:00 PM
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">
                    Aiming to plant 180 saplings with 40 volunteers
                  </p>
                  <Badge
                    variant="outline"
                    className="bg-green-50 text-green-700 border-green-200"
                  >
                    Beginner Friendly
                  </Badge>
                  <span className="text-xs text-muted-foreground ml-2">
                    8/40 slots filled
                  </span>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-xl font-semibold mt-8 mb-4">Comments (24)</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <Input placeholder="Add a comment..." className="flex-1" />
                <Button>Post</Button>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <button className="font-medium">Most Recent</button>
                <span>•</span>
                <button className="text-muted-foreground hover:text-foreground">
                  Most Liked
                </button>
                <span>•</span>
                <button className="text-muted-foreground hover:text-foreground">
                  Newest First
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Volunteers Needed</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold">150</p>
                    <p className="text-xs text-muted-foreground">
                      Volunteers Needed
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">76</p>
                    <p className="text-xs text-muted-foreground">
                      Already Registered
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">74</p>
                    <p className="text-xs text-muted-foreground">
                      Spots Available
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>50% of volunteer positions filled</span>
                  </div>
                  <Progress value={50} className="h-2" />
                  <p className="text-xs text-muted-foreground">
                    Registration closes on May 25, 2023
                  </p>
                </div>

                <Button className="w-full">Register Now</Button>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Location</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted rounded-lg aspect-[3/2] flex items-center justify-center mb-4">
                  <span className="text-muted-foreground">600 × 400</span>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Experience Level</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <p className="text-sm">Beginner Friendly</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <p className="text-sm">Physical Demand</p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <p className="text-sm">Moderate</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <p className="text-sm">Equipment Provided</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Volunteers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <Avatar
                        key={i}
                        className="border-2 border-background h-8 w-8"
                      >
                        <AvatarFallback>{i}</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                  <div className="text-sm">
                    <p>76 joined</p>
                    <p className="text-xs text-muted-foreground">
                      Join Sarah, Michael, Jennifer, and 73 others in making a
                      difference for our environment.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Share Campaign</CardTitle>
                <CardDescription>
                  Help us spread the word and reach more volunteers!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-muted rounded-lg p-4">
                    <p className="font-medium mb-2">Tree Planting initiative</p>
                    <p className="text-xs text-muted-foreground mb-2">
                      https://ngoflow.org/campaigns
                    </p>
                    <div className="bg-background rounded-lg aspect-[2/1] flex items-center justify-center">
                      <span className="text-xs text-muted-foreground">
                        1200 x 600
                      </span>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full flex items-center gap-2"
                  >
                    <Facebook className="h-4 w-4" />
                    Facebook
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};
