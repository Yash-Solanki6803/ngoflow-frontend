// src/components/Ngo.tsx
import { useEffect, useState } from "react";
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
import { updateCampaign, deleteCampaign, createCampaign } from "@/api/services";
import { UpdateCampaignRequest, CreateCampaignRequest } from "@/api/types";
import { Input } from "@/components/ui/input"; // Import Input for subcategoryIds
import { Label } from "@/components/ui/label"; // Import Label for better form structure
import { Textarea } from "@/components/ui/textarea";

export const Ngo = () => {
  const [updateFormData, setUpdateFormData] = useState<UpdateCampaignRequest>({
    title: "",
  });
  const [selectedCampaignId, setSelectedCampaignId] = useState<string | null>(
    null
  ); // For update and delete
  const [createFormData, setCreateFormData] = useState<CreateCampaignRequest>({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    location: "",
    subcategoryIds: [], // Initialize as empty array
  });
  const [isCreateFormVisible, setIsCreateFormVisible] =
    useState<boolean>(false);

  useEffect(() => {
    // No initial API call needed for this component yet, but we can add others later
  }, []);

  const handleUpdateCampaign = async () => {
    if (selectedCampaignId && updateFormData.title) {
      try {
        const response = await updateCampaign(
          selectedCampaignId,
          updateFormData
        );
        console.log("Update Campaign Response:", response); // Log response
        setUpdateFormData({ title: "" }); // Reset form after update
        setSelectedCampaignId(null); // Reset selection
      } catch (error) {
        console.error("Error updating campaign:", error);
      }
    }
  };

  const handleDeleteCampaign = async () => {
    if (selectedCampaignId) {
      try {
        const response = await deleteCampaign(selectedCampaignId);
        console.log("Delete Campaign Response:", response); // Log response
        setSelectedCampaignId(null); // Reset selection after deletion
      } catch (error) {
        console.error("Error deleting campaign:", error);
      }
    }
  };

  const handleCreateCampaign = async () => {
    if (
      createFormData.title &&
      createFormData.description &&
      createFormData.startDate &&
      createFormData.endDate &&
      createFormData.location &&
      createFormData.subcategoryIds.length > 0 // Ensure at least one subcategory is selected
    ) {
      try {
        const response = await createCampaign(createFormData);
        console.log("Create Campaign Response:", response); // Log response
        setCreateFormData({
          title: "",
          description: "",
          startDate: "",
          endDate: "",
          location: "",
          subcategoryIds: [], // Reset form after creation
        });
        setIsCreateFormVisible(false); // Hide form after creation
      } catch (error) {
        console.error("Error creating campaign:", error);
      }
    }
  };

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
            <Button
              variant="default"
              onClick={() => setIsCreateFormVisible(true)}
            >
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
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      setSelectedCampaignId(
                        "d9e4608c-a71c-4cec-97fd-fbfbbff4b901"
                      )
                    }
                  >
                    Select to Update
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() =>
                      setSelectedCampaignId(
                        "d9e4608c-a71c-4cec-97fd-fbfbbff4b901"
                      )
                    }
                  >
                    Select to Delete
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
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      setSelectedCampaignId(
                        "7708afa2-e07b-4cd9-ab16-6b562e1a2df9"
                      )
                    }
                  >
                    Select to Update
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() =>
                      setSelectedCampaignId(
                        "7708afa2-e07b-4cd9-ab16-6b562e1a2df9"
                      )
                    }
                  >
                    Select to Delete
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
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      setSelectedCampaignId(
                        "45b36802-7ff8-4cf4-a97a-f9a5924dd496"
                      )
                    }
                  >
                    Select to Update
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() =>
                      setSelectedCampaignId(
                        "45b36802-7ff8-4cf4-a97a-f9a5924dd496"
                      )
                    }
                  >
                    Select to Delete
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

          {/* Update and Delete Campaign Form */}
          {selectedCampaignId && (
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Update Campaign</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="updateTitle">New Title</Label>
                    <Input
                      id="updateTitle"
                      value={updateFormData.title}
                      onChange={(e) =>
                        setUpdateFormData({
                          ...updateFormData,
                          title: e.target.value,
                        })
                      }
                      placeholder="Enter new title"
                    />
                  </div>
                  <Button
                    onClick={handleUpdateCampaign}
                    disabled={!updateFormData.title}
                  >
                    Update Campaign
                  </Button>
                  <Button
                    variant="destructive"
                    onClick={handleDeleteCampaign}
                    className="mt-2"
                    disabled={!selectedCampaignId}
                  >
                    Delete Campaign
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Create Campaign Form */}
          {isCreateFormVisible && (
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Create New Campaign</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="createTitle">Title</Label>
                    <Input
                      id="createTitle"
                      value={createFormData.title}
                      onChange={(e) =>
                        setCreateFormData({
                          ...createFormData,
                          title: e.target.value,
                        })
                      }
                      placeholder="Enter campaign title"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="createDescription">Description</Label>
                    <Textarea
                      id="createDescription"
                      value={createFormData.description}
                      onChange={(e) =>
                        setCreateFormData({
                          ...createFormData,
                          description: e.target.value,
                        })
                      }
                      placeholder="Enter campaign description"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="createStartDate">Start Date</Label>
                    <Input
                      id="createStartDate"
                      type="datetime-local"
                      value={createFormData.startDate}
                      onChange={(e) =>
                        setCreateFormData({
                          ...createFormData,
                          startDate: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="createEndDate">End Date</Label>
                    <Input
                      id="createEndDate"
                      type="datetime-local"
                      value={createFormData.endDate}
                      onChange={(e) =>
                        setCreateFormData({
                          ...createFormData,
                          endDate: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="createLocation">Location</Label>
                    <Input
                      id="createLocation"
                      value={createFormData.location}
                      onChange={(e) =>
                        setCreateFormData({
                          ...createFormData,
                          location: e.target.value,
                        })
                      }
                      placeholder="Enter campaign location"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subcategoryIds">Subcategory IDs</Label>
                    <Input
                      id="subcategoryIds"
                      value={createFormData.subcategoryIds.join(", ")}
                      onChange={(e) => {
                        const ids = e.target.value
                          .split(",")
                          .map((id) => parseInt(id.trim()))
                          .filter((id) => !isNaN(id));
                        setCreateFormData({
                          ...createFormData,
                          subcategoryIds: ids,
                        });
                      }}
                      placeholder="Enter subcategory IDs (e.g., 1, 2, 3)"
                      required
                    />
                  </div>
                  <Button
                    onClick={handleCreateCampaign}
                    disabled={
                      !createFormData.title ||
                      !createFormData.description ||
                      !createFormData.startDate ||
                      !createFormData.endDate ||
                      !createFormData.location ||
                      createFormData.subcategoryIds.length === 0
                    }
                  >
                    Create Campaign
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setIsCreateFormVisible(false)}
                    className="mt-2"
                  >
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
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
