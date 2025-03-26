import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus } from "lucide-react";

export const Ngo = () => {
  return (
    <div className="space-y-8 mt-10 section-padding">
      <section>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold">NGO Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back, GreenEarth Foundation! Monitor and manage your
              organization.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarFallback>GE</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">GreenEarth Foundation</p>
              <Button
                variant="link"
                className="p-0 h-auto flex items-center"
                // onClick={() => setCurrentPage("ngo-profile")}
              >
                Edit Profile
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">
                Total Followers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3,241</div>
            </CardContent>
            <CardFooter>
              <Button variant="link" className="px-0" onClick={() => {}}>
                View all followers
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
            </CardContent>
            <CardFooter>
              <Button variant="link" className="px-0" onClick={() => {}}>
                View all campaigns
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">
                Active Volunteers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">187</div>
            </CardContent>
            <CardFooter>
              <Button variant="link" className="px-0" onClick={() => {}}>
                View all volunteers
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <section className="lg:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Campaign Management</h2>
            <Button variant="default" onClick={() => {}}>
              <Plus className="h-4 w-4 mr-2" />
              Create Campaign
            </Button>
          </div>

          <Tabs defaultValue="active">
            <TabsList className="mb-4">
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="past">Past</TabsTrigger>
              <TabsTrigger value="drafts">Drafts</TabsTrigger>
            </TabsList>
            <TabsContent value="active" className="space-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between">
                    <CardTitle>Tree Planting Initiative</CardTitle>
                    <Badge>Active</Badge>
                  </div>
                  <CardDescription>May 15-Aug 30, 2023</CardDescription>
                  <CardDescription>Central Park, New York</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">
                    76 volunteers registered
                  </p>
                  <Progress value={76} max={100} className="h-2" />
                </CardContent>
                <CardFooter className="flex justify-end gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    // onClick={() => setCurrentPage("campaign-detail")}
                  >
                    View
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => {}}>
                    Edit
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between">
                    <CardTitle>Urban Gardens Project</CardTitle>
                    <Badge>Active</Badge>
                  </div>
                  <CardDescription>Jun 1-Sep 30, 2023</CardDescription>
                  <CardDescription>Downtown Community Center</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">
                    42 volunteers registered
                  </p>
                  <Progress value={42} max={100} className="h-2" />
                </CardContent>
                <CardFooter className="flex justify-end gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    // onClick={() => setCurrentPage("campaign-detail")}
                  >
                    View
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => {}}>
                    Edit
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between">
                    <CardTitle>Environmental Awareness Workshop</CardTitle>
                    <Badge>Active</Badge>
                  </div>
                  <CardDescription>Jun 20-Jul 5, 2023</CardDescription>
                  <CardDescription>Lincoln High School</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">
                    28 volunteers registered
                  </p>
                  <Progress value={28} max={100} className="h-2" />
                </CardContent>
                <CardFooter className="flex justify-end gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    // onClick={() => setCurrentPage("campaign-detail")}
                  >
                    View
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => {}}>
                    Edit
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="past">
              <div className="p-8 text-center text-muted-foreground">
                No past campaigns to display
              </div>
            </TabsContent>
            <TabsContent value="drafts">
              <div className="p-8 text-center text-muted-foreground">
                No draft campaigns to display
              </div>
            </TabsContent>
          </Tabs>
        </section>

        <section className="lg:col-span-1">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Volunteer Requests</h2>
            <Badge>6 Pending</Badge>
          </div>

          <Card>
            <CardContent className="pt-6 space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>SJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm">Sarah Johnson</p>
                    <p className="text-xs text-muted-foreground">
                      For: Tree Planting Initiative
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Accept
                  </Button>
                  <Button variant="ghost" size="sm">
                    Decline
                  </Button>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>MT</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm">Michael Thompson</p>
                    <p className="text-xs text-muted-foreground">
                      For: Urban Gardens Project
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Accept
                  </Button>
                  <Button variant="ghost" size="sm">
                    Decline
                  </Button>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>ER</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm">Emily Rodriguez</p>
                    <p className="text-xs text-muted-foreground">
                      For: Environmental Awareness Workshop
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Accept
                  </Button>
                  <Button variant="ghost" size="sm">
                    Decline
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="link" className="w-full" onClick={() => {}}>
                View all requests
              </Button>
            </CardFooter>
          </Card>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-6">NGO Profile</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Avatar className="h-20 w-20 mx-auto">
                    <AvatarFallback className="text-xl">GE</AvatarFallback>
                  </Avatar>
                  <h3 className="font-bold mt-4">GreenEarth Foundation</h3>
                  <p className="text-sm text-muted-foreground">
                    Environmental Conservation
                  </p>
                </div>
                <div className="mt-6">
                  <Button
                    variant="outline"
                    className="w-full"
                    // onClick={() => setCurrentPage("ngo-profile")}
                  >
                    Manage your organization's information
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};
