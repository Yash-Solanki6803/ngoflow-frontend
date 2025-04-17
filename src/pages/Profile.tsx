// src/components/Profile.tsx
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { applyForNgo } from "@/api/services";
import { ApplyForNgoRequest, UserRole } from "@/api/types";
import { Button } from "@/components/ui/button";
import { RootState } from "@/redux/store";

export const Profile = () => {
  const auth = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    username: "",
    phone: "",
    location: "",
    bio: "",
    interests: {
      environment: false,
      education: false,
      health: false,
      animals: false,
      community: false,
      arts: false,
    },
  });
  const [ngoFormData, setNgoFormData] = useState<ApplyForNgoRequest>({
    name: "",
    description: "",
    mission: "",
    categoryId: 0,
    location: "",
    contactEmail: "",
    contactPhone: "",
  });
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleNgoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setIsLoading(true);

    try {
      const response = await applyForNgo(ngoFormData);
      console.log("Apply for NGO Response:", response); // Log response
    } catch (error) {
      setErrorMessage((error as Error).message || "Failed to apply for NGO!");
    } finally {
      setIsLoading(false);
      setNgoFormData({
        name: "",
        description: "",
        mission: "",
        categoryId: 0,
        location: "",
        contactEmail: "",
        contactPhone: "",
      });
    }
  };

  return (
    <div className="space-y-8 mt-10 section-padding">
      <section>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold">Account Settings</h1>
            <p className="text-muted-foreground">
              Manage your account preferences and information
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
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <nav className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              Profile Information
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Password
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Notifications
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Privacy
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Connected Accounts
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Apply for NGO
            </Button>
          </nav>
        </div>

        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Profile Picture</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-muted rounded-lg h-40 w-40 flex items-center justify-center">
                  <span className="text-muted-foreground">200x200</span>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Button>Change Photo</Button>
                    <Button variant="outline">Remove</Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Recommended size: 200x200px (Max: 1MB)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" defaultValue="Sophia" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last name</Label>
                    <Input id="lastName" defaultValue="Martinez" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <div className="flex items-center">
                    <span className="text-sm text-muted-foreground mr-2">
                      ngoflow.org/
                    </span>
                    <Input id="username" defaultValue="sophiam" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email address</Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue="sophia.martinez@example.com"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone number</Label>
                    <Input id="phone" defaultValue="(555) 123-4567" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" defaultValue="New York, NY" />
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>About Me</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  placeholder="Tell us about yourself"
                  className="min-h-[100px]"
                  defaultValue="Passionate about environmental conservation and community service. I enjoy participating in beach cleanups and literacy programs."
                />
                <p className="text-xs text-muted-foreground">
                  Brief description for your profile. Maximum 300 characters.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Your Interests</CardTitle>
              <CardDescription>
                Select categories you're interested in to receive relevant
                suggestions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="environment" defaultChecked />
                  <label
                    htmlFor="environment"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Environment
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="education" defaultChecked />
                  <label
                    htmlFor="education"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Education
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="health" defaultChecked />
                  <label
                    htmlFor="health"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Health & Medical
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="animals" />
                  <label
                    htmlFor="animals"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Animal Welfare
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="community" />
                  <label
                    htmlFor="community"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Community Development
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="arts" />
                  <label
                    htmlFor="arts"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Arts & Culture
                  </label>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>

          {/* New Section for NGO Application */}
          {auth.user?.role === UserRole.VOLUNTEER && (
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Apply for NGO</CardTitle>
                <CardDescription>
                  Submit an application to become an NGO
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleNgoSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="ngoName">NGO Name</Label>
                    <Input
                      id="ngoName"
                      value={ngoFormData.name}
                      onChange={(e) =>
                        setNgoFormData({ ...ngoFormData, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ngoDescription">Description</Label>
                    <Textarea
                      id="ngoDescription"
                      value={ngoFormData.description}
                      onChange={(e) =>
                        setNgoFormData({
                          ...ngoFormData,
                          description: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ngoMission">Mission</Label>
                    <Textarea
                      id="ngoMission"
                      value={ngoFormData.mission}
                      onChange={(e) =>
                        setNgoFormData({
                          ...ngoFormData,
                          mission: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ngoCategoryId">Category ID</Label>
                    <Input
                      id="ngoCategoryId"
                      type="number"
                      value={ngoFormData.categoryId}
                      onChange={(e) =>
                        setNgoFormData({
                          ...ngoFormData,
                          categoryId: parseInt(e.target.value),
                        })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ngoLocation">Location</Label>
                    <Input
                      id="ngoLocation"
                      value={ngoFormData.location}
                      onChange={(e) =>
                        setNgoFormData({
                          ...ngoFormData,
                          location: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ngoContactEmail">Contact Email</Label>
                    <Input
                      id="ngoContactEmail"
                      type="email"
                      value={ngoFormData.contactEmail}
                      onChange={(e) =>
                        setNgoFormData({
                          ...ngoFormData,
                          contactEmail: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ngoContactPhone">Contact Phone</Label>
                    <Input
                      id="ngoContactPhone"
                      value={ngoFormData.contactPhone}
                      onChange={(e) =>
                        setNgoFormData({
                          ...ngoFormData,
                          contactPhone: e.target.value,
                        })
                      }
                      required
                    />
                  </div>

                  {errorMessage && (
                    <p className="text-red-500 text-sm">{errorMessage}</p>
                  )}

                  <Button className="w-full" type="submit" disabled={isLoading}>
                    {isLoading ? "Applying..." : "Submit Application"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};
