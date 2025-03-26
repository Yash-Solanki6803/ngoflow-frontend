import { Button } from "@/components/ui/button";
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

export const Profile = () => {
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
                    <Label htmlFor="firstName">First name</Label>
                    <Input id="firstName" defaultValue="Sophia" />
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
        </div>
      </div>
    </div>
  );
};
