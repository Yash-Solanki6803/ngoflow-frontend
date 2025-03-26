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
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";

export const DeveloperDashboard = () => {
  return (
    <div className="space-y-8 mt-10 section-padding">
      <section>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground">
              Monitor and manage platform activities, NGO applications, and user
              engagements.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarFallback>SM</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">Sophia Martinez</p>
              <p className="text-sm text-muted-foreground">Admin</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">
                Pending NGO Applications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
            </CardContent>
            <CardFooter>
              <Button variant="link" className="px-0" onClick={() => {}}>
                Review applications
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Active NGOs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">287</div>
            </CardContent>
            <CardFooter>
              <Button variant="link" className="px-0" onClick={() => {}}>
                View all NGOs
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
              <div className="text-2xl font-bold">842</div>
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
                Registered Users
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12,498</div>
            </CardContent>
            <CardFooter>
              <Button variant="link" className="px-0" onClick={() => {}}>
                View user stats
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <section className="lg:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">NGO Applications</h2>
          </div>

          <Tabs defaultValue="pending">
            <TabsList className="mb-4">
              <TabsTrigger value="pending">Pending (24)</TabsTrigger>
              <TabsTrigger value="approved">Approved (287)</TabsTrigger>
              <TabsTrigger value="rejected">Rejected (56)</TabsTrigger>
            </TabsList>
            <TabsContent value="pending" className="space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex gap-4">
                    <div className="bg-muted rounded aspect-square w-16 flex items-center justify-center">
                      <span className="text-xs text-muted-foreground">
                        200×200
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <CardTitle className="text-lg">
                          Wildlife Rescue Network
                        </CardTitle>
                        <Badge>Pending Review</Badge>
                      </div>
                      <CardDescription>Animal Conservation</CardDescription>
                      <CardDescription className="text-xs">
                        Applicant: James Wilson (james.wilson@example.com)
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    <span className="font-medium">Mission:</span> Dedicated to
                    rescuing, rehabilitating, and releasing injured wildlife
                    back into their natural habitats.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Submitted: May 12, 2023 (3 days ago)
                  </p>
                </CardContent>
                <CardFooter className="flex justify-end gap-2">
                  <Button variant="outline" size="sm" onClick={() => {}}>
                    View Details
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => {}}>
                    Reject
                  </Button>
                  <Button size="sm" onClick={() => {}}>
                    Approve
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex gap-4">
                    <div className="bg-muted rounded aspect-square w-16 flex items-center justify-center">
                      <span className="text-xs text-muted-foreground">
                        200×200
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <CardTitle className="text-lg">
                          Global Arts Initiative
                        </CardTitle>
                        <Badge>Pending Review</Badge>
                      </div>
                      <CardDescription>Arts & Culture</CardDescription>
                      <CardDescription className="text-xs">
                        Applicant: Maria Garcia (maria.garcia@example.com)
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    <span className="font-medium">Mission:</span> Promoting
                    cultural understanding through arts education programs in
                    underserved communities.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Submitted: May 10, 2023 (5 days ago)
                  </p>
                </CardContent>
                <CardFooter className="flex justify-end gap-2">
                  <Button variant="outline" size="sm" onClick={() => {}}>
                    View Details
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => {}}>
                    Reject
                  </Button>
                  <Button size="sm" onClick={() => {}}>
                    Approve
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="approved">
              <div className="p-8 text-center text-muted-foreground">
                Showing approved NGOs would be displayed here
              </div>
            </TabsContent>
            <TabsContent value="rejected">
              <div className="p-8 text-center text-muted-foreground">
                Showing rejected NGO applications would be displayed here
              </div>
            </TabsContent>
          </Tabs>
        </section>

        <section className="lg:col-span-1">
          <h2 className="text-xl font-semibold mb-6">Platform Analytics</h2>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">
                Monthly activity and engagement metrics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-48 bg-muted rounded flex items-center justify-center mb-6">
                <span className="text-muted-foreground">
                  User Registrations Chart
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium">Avg. Daily Active Users</p>
                  <div className="flex items-end gap-2">
                    <p className="text-2xl font-bold">8,942</p>
                    <Badge
                      variant="outline"
                      className="bg-green-50 text-green-700 border-green-200 mb-1"
                    >
                      ↑ 12% increase
                    </Badge>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium">New NGO Approval Rate</p>
                  <div className="flex items-end gap-2">
                    <p className="text-2xl font-bold">78%</p>
                    <Badge
                      variant="outline"
                      className="bg-green-50 text-green-700 border-green-200 mb-1"
                    >
                      ↑ 5% increase
                    </Badge>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium">Campaign Engagement</p>
                  <div className="flex items-end gap-2">
                    <p className="text-2xl font-bold">64%</p>
                    <Badge
                      variant="outline"
                      className="bg-green-50 text-green-700 border-green-200 mb-1"
                    >
                      ↑ 8% increase
                    </Badge>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium">Volunteer Retention</p>
                  <div className="flex items-end gap-2">
                    <p className="text-2xl font-bold">82%</p>
                    <Badge
                      variant="outline"
                      className="bg-green-50 text-green-700 border-green-200 mb-1"
                    >
                      ↑ 3% increase
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};
