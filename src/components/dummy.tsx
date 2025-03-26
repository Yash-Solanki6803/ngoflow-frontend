"use client";

import { useState } from "react";
import {
  LogIn,
  UserPlus,
  LogOut,
  Heart,
  Share2,
  MessageSquare,
  ThumbsUp,
  CheckCircle,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MapPin,
  Globe,
  Plus,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

// Main App Component
export default function NGOFlow() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState("volunteer"); // volunteer, ngo, admin

  // Function to render the appropriate page based on currentPage state
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage setCurrentPage={setCurrentPage} />;
      case "about":
        return <HowItWorksPage setCurrentPage={setCurrentPage} />;
      case "ngos":
        return <SearchPage setCurrentPage={setCurrentPage} searchType="ngos" />;
      case "campaigns":
        return <TrendingCampaignsPage setCurrentPage={setCurrentPage} />;
      case "search":
        return <SearchPage setCurrentPage={setCurrentPage} searchType="all" />;
      case "login":
        return (
          <LoginPage
            setCurrentPage={setCurrentPage}
            setIsLoggedIn={setIsLoggedIn}
            setUserType={setUserType}
          />
        );
      case "signup":
        return <SignupPage setCurrentPage={setCurrentPage} />;
      case "dashboard":
        return userType === "volunteer" ? (
          <VolunteerDashboard setCurrentPage={setCurrentPage} />
        ) : userType === "ngo" ? (
          <NGODashboard setCurrentPage={setCurrentPage} />
        ) : (
          <AdminDashboard setCurrentPage={setCurrentPage} />
        );
      case "impact":
        return <GlobalImpactPage setCurrentPage={setCurrentPage} />;
      case "testimonials":
        return <TestimonialsPage setCurrentPage={setCurrentPage} />;
      case "ngo-profile":
        return <NGOProfilePage setCurrentPage={setCurrentPage} />;
      case "campaign-detail":
        return <CampaignDetailPage setCurrentPage={setCurrentPage} />;
      case "settings":
        return <AccountSettingsPage setCurrentPage={setCurrentPage} />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header
        setCurrentPage={setCurrentPage}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        userType={userType}
      />
      <main className="container mx-auto px-4 py-4">{renderPage()}</main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

// Footer Component
function Footer({ setCurrentPage }) {
  return (
    <footer className="bg-muted py-12 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">NGOFlow</h3>
            <p className="text-muted-foreground mb-4">
              Connecting passionate volunteers with impactful NGOs to create
              positive change in communities worldwide.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
            </div>
          </div>
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  className="text-muted-foreground hover:text-primary"
                  onClick={() => setCurrentPage("home")}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  className="text-muted-foreground hover:text-primary"
                  onClick={() => setCurrentPage("about")}
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  className="text-muted-foreground hover:text-primary"
                  onClick={() => setCurrentPage("ngos")}
                >
                  Featured NGOs
                </button>
              </li>
              <li>
                <button
                  className="text-muted-foreground hover:text-primary"
                  onClick={() => setCurrentPage("campaigns")}
                >
                  Campaigns
                </button>
              </li>
              <li>
                <button
                  className="text-muted-foreground hover:text-primary"
                  onClick={() => setCurrentPage("impact")}
                >
                  Our Impact
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">For Volunteers</h4>
            <ul className="space-y-2">
              <li>
                <button
                  className="text-muted-foreground hover:text-primary"
                  onClick={() => setCurrentPage("signup")}
                >
                  Sign Up
                </button>
              </li>
              <li>
                <button
                  className="text-muted-foreground hover:text-primary"
                  onClick={() => setCurrentPage("login")}
                >
                  Login
                </button>
              </li>
              <li>
                <button
                  className="text-muted-foreground hover:text-primary"
                  onClick={() => setCurrentPage("about")}
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  className="text-muted-foreground hover:text-primary"
                  onClick={() => setCurrentPage("testimonials")}
                >
                  Success Stories
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">For NGOs</h4>
            <ul className="space-y-2">
              <li>
                <button
                  className="text-muted-foreground hover:text-primary"
                  onClick={() => setCurrentPage("signup")}
                >
                  Apply as NGO
                </button>
              </li>
              <li>
                <button
                  className="text-muted-foreground hover:text-primary"
                  onClick={() => setCurrentPage("login")}
                >
                  NGO Login
                </button>
              </li>
              <li>
                <button
                  className="text-muted-foreground hover:text-primary"
                  onClick={() => setCurrentPage("about")}
                >
                  NGO Guidelines
                </button>
              </li>
              <li>
                <button
                  className="text-muted-foreground hover:text-primary"
                  onClick={() => setCurrentPage("about")}
                >
                  Resources
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2023 NGOFlow. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <button className="text-sm text-muted-foreground hover:text-primary">
                Privacy Policy
              </button>
              <button className="text-sm text-muted-foreground hover:text-primary">
                Terms of Service
              </button>
              <button className="text-sm text-muted-foreground hover:text-primary">
                Cookies
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Home Page
function HomePage({ setCurrentPage }) {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Ready to Make a Difference Today?
            </h1>
            <p className="text-xl text-muted-foreground">
              Join thousands of volunteers and NGOs creating positive impact
              across communities worldwide. Start your journey with NGOFlow now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => setCurrentPage("signup")}>
                Sign Up Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setCurrentPage("ngos")}
              >
                Explore NGOs
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Join 10,000+ volunteers already making impact
            </p>
          </div>
          <div className="bg-muted rounded-lg aspect-video flex items-center justify-center">
            <span className="text-muted-foreground">800 × 600</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Get Started Today</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Create your volunteer profile in minutes and start connecting
                with meaningful causes.
              </p>
              <Button
                className="mt-4"
                variant="outline"
                onClick={() => setCurrentPage("signup")}
              >
                Create Account <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>For NGOs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Apply to join our platform and connect with passionate
                volunteers for your initiatives.
              </p>
              <Button
                className="mt-4"
                variant="outline"
                onClick={() => setCurrentPage("signup")}
              >
                Apply as NGO <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Learn More</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Discover how NGOFlow works and the impact we're making in
                communities worldwide.
              </p>
              <Button
                className="mt-4"
                variant="outline"
                onClick={() => setCurrentPage("about")}
              >
                About NGOFlow <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Trusted Organizations */}
      <section className="py-12">
        <h2 className="text-2xl font-bold text-center mb-8">
          Trusted by leading organizations worldwide
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="bg-muted rounded flex items-center justify-center h-10"
            >
              <span className="text-xs text-muted-foreground">120 x 40</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// Search Page for NGOs and Campaigns
function SearchPage({ setCurrentPage, searchType = "all" }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [selectedType, setSelectedType] = useState("All Types");
  const [filters, setFilters] = useState({
    remote: false,
    environment: false,
  });

  // Dummy data for search results
  const searchResults = [
    {
      id: 1,
      name: "Wildlife Rescue Network",
      type: "NGO",
      location: "New York",
      categories: [
        "Animal Welfare",
        "Wildlife",
        "Conservation",
        "Animal Rescue",
      ],
      description:
        "Dedicated to rescuing and rehabilitating injured wildlife back into their natural habitats across...",
    },
    {
      id: 2,
      name: "Beach Cleanup Drive",
      type: "Campaign",
      organization: "OceanCare",
      location: "Miami",
      categories: ["Environment", "Conservation", "Oceans"],
      description:
        "Join our monthly cleanup efforts to remove plastic and debris from Miami's beautiful....",
    },
    {
      id: 3,
      name: "Education For All",
      type: "NGO",
      location: "Chicago",
      categories: ["Education", "Literacy", "Youth"],
      description:
        "Providing educational resources and literacy programs to underserved communities and...",
    },
    {
      id: 4,
      name: "Tree Planting Initiative",
      type: "Campaign",
      organization: "GreenEarth Foundation",
      location: "New York",
      categories: ["Environment", "Climate", "Urban"],
      description:
        "Help us plant 10,000 trees across urban areas in New York. Each tree helps combat climate...",
    },
    {
      id: 5,
      name: "Feeding America Now",
      type: "NGO",
      location: "National",
      categories: ["Food", "Poverty", "Community"],
      description:
        "Working to end hunger in America through a nationwide network of food banks, pantries, and...",
    },
    {
      id: 6,
      name: "Digital Literacy Program",
      type: "Campaign",
      organization: "TechForAll",
      location: "Remote",
      categories: ["Education", "Technology", "Seniors"],
      description:
        "Volunteer to teach basic computer skills to seniors. Help bridge the digital divide and...",
    },
  ];

  // Filter results based on search type
  const filteredResults =
    searchType === "all"
      ? searchResults
      : searchResults.filter((result) =>
          searchType === "ngos"
            ? result.type === "NGO"
            : result.type === "Campaign"
        );

  return (
    <div className="space-y-8">
      <section className="py-8">
        <h1 className="text-3xl font-bold mb-2">Find NGOs & Campaigns</h1>
        <p className="text-muted-foreground mb-6">
          Discover opportunities to make a difference in your community
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-4">
            <Input
              type="text"
              placeholder="Search for NGOs, campaigns, or keywords"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="mb-4"
            />
          </div>

          <div>
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All Categories">All Categories</SelectItem>
                <SelectItem value="Environment">Environment</SelectItem>
                <SelectItem value="Education">Education</SelectItem>
                <SelectItem value="Health">Health</SelectItem>
                <SelectItem value="Animal Welfare">Animal Welfare</SelectItem>
                <SelectItem value="Food Security">Food Security</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Select
              value={selectedLocation}
              onValueChange={setSelectedLocation}
            >
              <SelectTrigger>
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All Locations">All Locations</SelectItem>
                <SelectItem value="New York">New York</SelectItem>
                <SelectItem value="Chicago">Chicago</SelectItem>
                <SelectItem value="Miami">Miami</SelectItem>
                <SelectItem value="Remote">Remote</SelectItem>
                <SelectItem value="National">National</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger>
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All Types">All Types</SelectItem>
                <SelectItem value="NGO">NGO</SelectItem>
                <SelectItem value="Campaign">Campaign</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Button className="w-full">Search</Button>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="remote"
              checked={filters.remote}
              onCheckedChange={(checked) =>
                setFilters({ ...filters, remote: checked === true })
              }
            />
            <label
              htmlFor="remote"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Remote Only
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="environment"
              checked={filters.environment}
              onCheckedChange={(checked) =>
                setFilters({ ...filters, environment: checked === true })
              }
            />
            <label
              htmlFor="environment"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Environment
            </label>
          </div>

          <Button variant="link" className="text-sm">
            Clear All
          </Button>
        </div>
      </section>

      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">
            Results ({filteredResults.length})
          </h2>
          <Select defaultValue="relevance">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="relevance">Relevance</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResults.map((result) => (
            <Card key={result.id} className="overflow-hidden">
              <div className="bg-muted aspect-[2/1] flex items-center justify-center">
                <span className="text-muted-foreground">600 × 300</span>
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">
                      <button
                        onClick={() =>
                          setCurrentPage(
                            result.type === "NGO"
                              ? "ngo-profile"
                              : "campaign-detail"
                          )
                        }
                        className="hover:text-primary"
                      >
                        {result.name}
                      </button>
                    </CardTitle>
                    <CardDescription>
                      {result.type === "NGO" ? (
                        <span>
                          {result.type} • {result.location}
                        </span>
                      ) : (
                        <span>
                          By {result.organization} • {result.location}
                        </span>
                      )}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {result.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {result.categories.slice(0, 3).map((category, index) => (
                    <Badge key={index} variant="secondary">
                      {category}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() =>
                    setCurrentPage(
                      result.type === "NGO" ? "ngo-profile" : "campaign-detail"
                    )
                  }
                >
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="icon" disabled>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="bg-primary text-primary-foreground"
            >
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              3
            </Button>
            <span>...</span>
            <Button variant="outline" size="sm">
              10
            </Button>
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

// Trending Campaigns Page
function TrendingCampaignsPage({ setCurrentPage }) {
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
    <div className="space-y-12">
      <section>
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold">Trending Campaigns</h1>
            <p className="text-muted-foreground">
              Join these popular initiatives making significant impact right now
            </p>
          </div>
          <Button
            variant="link"
            className="flex items-center"
            onClick={() => setCurrentPage("search")}
          >
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
                      <button
                        onClick={() => setCurrentPage("campaign-detail")}
                        className="hover:text-primary text-left"
                      >
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
                <Button
                  className="w-full"
                  onClick={() => setCurrentPage("campaign-detail")}
                >
                  Join Campaign
                </Button>
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
              <Button
                variant="secondary"
                className="w-full"
                onClick={() => setCurrentPage("signup")}
              >
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
                      <button
                        onClick={() => setCurrentPage("campaign-detail")}
                        className="hover:text-primary text-left"
                      >
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
                <Button
                  className="w-full"
                  onClick={() => setCurrentPage("campaign-detail")}
                >
                  Join Campaign
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

// Global Impact Page
function GlobalImpactPage({ setCurrentPage }) {
  return (
    <div className="space-y-16">
      <section className="py-8">
        <h1 className="text-3xl font-bold text-center mb-2">
          Our Global Impact
        </h1>
        <p className="text-xl text-muted-foreground text-center mb-12">
          Together, we're creating meaningful change across communities
          worldwide
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-4xl font-bold">10,580+</CardTitle>
              <CardDescription className="text-lg">
                Active Volunteers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Badge
                variant="outline"
                className="bg-green-50 text-green-700 border-green-200"
              >
                12% growth this month
              </Badge>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-4xl font-bold">500+</CardTitle>
              <CardDescription className="text-lg">
                Registered NGOs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Badge
                variant="outline"
                className="bg-blue-50 text-blue-700 border-blue-200"
              >
                8% growth this month
              </Badge>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-4xl font-bold">750+</CardTitle>
              <CardDescription className="text-lg">
                Active Campaigns
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Badge
                variant="outline"
                className="bg-purple-50 text-purple-700 border-purple-200"
              >
                15% growth this month
              </Badge>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-4xl font-bold">87</CardTitle>
              <CardDescription className="text-lg">
                Communities Impacted
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Badge
                variant="outline"
                className="bg-amber-50 text-amber-700 border-amber-200"
              >
                5 new this month
              </Badge>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Our Mission Impact</h2>
            <p className="text-lg text-muted-foreground mb-8">
              NGOFlow connects passionate volunteers with impactful
              organizations to create sustainable change across communities
              worldwide.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-medium">
                    324 Completed Campaigns
                  </h3>
                  <p className="text-muted-foreground">
                    Successfully delivered impact across various sectors and
                    regions
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-medium">
                    $2.8M Resources Mobilized
                  </h3>
                  <p className="text-muted-foreground">
                    In volunteer hours, skills, and direct support for
                    communities
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-medium">42 Countries Reached</h3>
                  <p className="text-muted-foreground">
                    Global impact across developing and developed nations
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">
              Join Our Growing Community
            </h2>
            <div className="grid grid-cols-2 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-3xl font-bold">78%</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Return rate for volunteers</CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-3xl font-bold">65%</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>First-time volunteers</CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-3xl font-bold">92%</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>NGO satisfaction rate</CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-3xl font-bold">4.8/5</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Average platform rating</CardDescription>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <Button size="lg" onClick={() => setCurrentPage("signup")}>
                Start Making Impact
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// How It Works Page
function HowItWorksPage({ setCurrentPage }) {
  return (
    <div className="space-y-16">
      <section className="py-8">
        <h1 className="text-3xl font-bold text-center mb-2">
          How NGOFlow Works
        </h1>
        <p className="text-xl text-muted-foreground text-center mb-12">
          Our platform connects volunteers and NGOs through a simple, effective
          process
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <CardTitle>Create an Account</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Sign up as a volunteer in minutes. Complete your profile to
                match with relevant opportunities.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Simple registration process</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">
                    Personalized interest selection
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">
                    Email verification for security
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <CardTitle>Discover Opportunities</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Explore NGOs and campaigns that match your interests, skills,
                and availability.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Advanced search filters</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">AI-powered recommendations</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Verified NGO profiles</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <CardTitle>Engage & Make Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Register for campaigns, follow NGOs you care about, and track
                your volunteer journey.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">
                    One-click campaign registration
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Track volunteer hours</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Receive campaign updates</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-6">For NGOs</h2>
            <p className="text-lg text-muted-foreground mb-8">
              NGOFlow helps organizations reach dedicated volunteers, manage
              campaigns, and maximize impact.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-lg">
                    Create and manage effective campaigns
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-lg">
                    Connect with skilled, passionate volunteers
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-lg">
                    Track campaign progress and volunteer engagement
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-lg">
                    Increase visibility and community outreach
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button size="lg" onClick={() => setCurrentPage("signup")}>
                Apply as an NGO
              </Button>
            </div>
          </div>

          <div className="bg-muted rounded-lg aspect-[3/2] flex items-center justify-center">
            <span className="text-muted-foreground">600 × 400</span>
          </div>
        </div>
      </section>
    </div>
  );
}

// Testimonials Page
function TestimonialsPage({ setCurrentPage }) {
  // Dummy data for testimonials
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Volunteer",
      campaigns: 12,
      organization: "",
      quote:
        "NGOFlow made it so easy to find meaningful volunteer opportunities. I've connected with amazing organizations and made a real difference in my community.",
      rating: 5,
      since: "2022",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Program Director",
      campaigns: 0,
      organization: "Education First Alliance",
      quote:
        "NGOFlow has transformed how we recruit and manage volunteers. Our campaign efficiency has increased by 40% and we've reached communities we never could before.",
      rating: 5,
      since: "2021",
    },
    {
      id: 3,
      name: "David Ramirez",
      role: "Volunteer",
      campaigns: 0,
      organization: "",
      quote:
        "The campaign suggestions are spot-on! I found opportunities that perfectly match my interests and availability.",
      rating: 5,
      since: "",
    },
    {
      id: 4,
      name: "Aisha Patel",
      role: "",
      campaigns: 0,
      organization: "Health For All Initiative",
      quote:
        "The volunteer management system has streamlined our operations. We can now focus more on our mission rather than administration.",
      rating: 5,
      since: "",
    },
    {
      id: 5,
      name: "James Wilson",
      role: "Volunteer",
      campaigns: 0,
      organization: "",
      quote:
        "I've participated in 5 campaigns through NGOFlow. The platform makes it easy to track my impact and stay connected.",
      rating: 5,
      since: "",
    },
  ];

  return (
    <div className="space-y-12">
      <section className="py-8">
        <h1 className="text-3xl font-bold text-center mb-2">
          What Our Community Says
        </h1>
        <p className="text-xl text-muted-foreground text-center mb-12">
          Hear from volunteers and NGOs who are making a difference through
          NGOFlow
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {testimonials.slice(0, 2).map((testimonial) => (
            <Card key={testimonial.id} className="flex flex-col h-full">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback>
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>{testimonial.name}</CardTitle>
                    <CardDescription>
                      {testimonial.role}
                      {testimonial.campaigns > 0 &&
                        ` • ${testimonial.campaigns} Campaigns`}
                      {testimonial.organization &&
                        ` • ${testimonial.organization}`}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="italic text-muted-foreground">
                  "{testimonial.quote}"
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                {testimonial.since && (
                  <span className="text-sm text-muted-foreground">
                    {testimonial.role === "Volunteer"
                      ? "Volunteer"
                      : "NGO partner"}{" "}
                    since {testimonial.since}
                  </span>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.slice(2, 5).map((testimonial) => (
            <Card key={testimonial.id}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback>
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">
                      {testimonial.name}
                    </CardTitle>
                    <CardDescription>
                      {testimonial.organization || testimonial.role}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="italic text-muted-foreground text-sm">
                  "{testimonial.quote}"
                </p>
              </CardContent>
              <CardFooter>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="lg"
            onClick={() => setCurrentPage("testimonials")}
          >
            Read More Success Stories
          </Button>
        </div>
      </section>
    </div>
  );
}

// Login Page
function LoginPage({ setCurrentPage, setIsLoggedIn, setUserType }) {
  return (
    <div className="max-w-md mx-auto py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Sign in</h1>
        <p className="text-muted-foreground mt-2">
          Connect, engage, and make a difference
        </p>
      </div>

      <Card>
        <CardContent className="pt-6">
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input id="email" type="email" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Button
                  variant="link"
                  className="p-0 h-auto text-sm"
                  onClick={() => {}}
                >
                  Forgot your password?
                </Button>
              </div>
              <Input id="password" type="password" />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <label
                htmlFor="remember"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember me
              </label>
            </div>
            <Button
              className="w-full"
              type="button"
              onClick={() => {
                setIsLoggedIn(true);
                setUserType("volunteer");
                setCurrentPage("dashboard");
              }}
            >
              Login
            </Button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or sign in with
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <Button variant="outline">
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Google
              </Button>
              <Button variant="outline">
                <Facebook className="mr-2 h-4 w-4" />
                Facebook
              </Button>
            </div>
          </div>

          <div className="mt-6 text-center text-sm">
            Don't have an account?{" "}
            <Button
              variant="link"
              className="p-0 h-auto"
              onClick={() => setCurrentPage("signup")}
            >
              Sign Up
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Sign Up Page
function SignupPage({ setCurrentPage }) {
  return (
    <div className="max-w-md mx-auto py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Create an account</h1>
        <p className="text-muted-foreground mt-2">
          Join our community and start making a difference
        </p>
      </div>

      <Card>
        <CardContent className="pt-6">
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First name</Label>
                <Input id="firstName" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last name</Label>
                <Input id="lastName" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input id="email" type="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="accountType">I am a</Label>
              <RadioGroup defaultValue="volunteer" className="flex">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="volunteer" id="volunteer" />
                  <Label htmlFor="volunteer">Volunteer</Label>
                </div>
                <div className="flex items-center space-x-2 ml-4">
                  <RadioGroupItem value="ngo" id="ngo" />
                  <Label htmlFor="ngo">NGO</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree to the{" "}
                <Button variant="link" className="p-0 h-auto text-sm">
                  terms of service
                </Button>{" "}
                and{" "}
                <Button variant="link" className="p-0 h-auto text-sm">
                  privacy policy
                </Button>
              </label>
            </div>
            <Button
              className="w-full"
              type="button"
              onClick={() => setCurrentPage("dashboard")}
            >
              Sign Up
            </Button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or sign up with
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <Button variant="outline">
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Google
              </Button>
              <Button variant="outline">
                <Facebook className="mr-2 h-4 w-4" />
                Facebook
              </Button>
            </div>
          </div>

          <div className="mt-6 text-center text-sm">
            Already have an account?{" "}
            <Button
              variant="link"
              className="p-0 h-auto"
              onClick={() => setCurrentPage("login")}
            >
              Login
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Volunteer Dashboard
function VolunteerDashboard({ setCurrentPage }) {
  return (
    <div className="space-y-8">
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
                  onClick={() => setCurrentPage("campaign-detail")}
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
                  onClick={() => setCurrentPage("campaign-detail")}
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
                  onClick={() => setCurrentPage("campaign-detail")}
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
}

// NGO Dashboard
function NGODashboard({ setCurrentPage }) {
  return (
    <div className="space-y-8">
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
                onClick={() => setCurrentPage("ngo-profile")}
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
                    onClick={() => setCurrentPage("campaign-detail")}
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
                    onClick={() => setCurrentPage("campaign-detail")}
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
                    onClick={() => setCurrentPage("campaign-detail")}
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
                    onClick={() => setCurrentPage("ngo-profile")}
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
}

// Admin Dashboard
function AdminDashboard({ setCurrentPage }) {
  return (
    <div className="space-y-8">
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
}

// NGO Profile Page
function NGOProfilePage({ setCurrentPage }) {
  return (
    <div className="space-y-8">
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
          <Button variant="outline" onClick={() => {}}>
            Follow NGO
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
                          onClick={() => setCurrentPage("campaign-detail")}
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
                          onClick={() => setCurrentPage("campaign-detail")}
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
                          onClick={() => setCurrentPage("campaign-detail")}
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
                          onClick={() => setCurrentPage("campaign-detail")}
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
}

// Campaign Detail Page
function CampaignDetailPage({ setCurrentPage }) {
  return (
    <div className="space-y-8">
      <section>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <button
            onClick={() => setCurrentPage("home")}
            className="hover:text-primary"
          >
            Home
          </button>
          <span>&gt;</span>
          <button
            onClick={() => setCurrentPage("campaigns")}
            className="hover:text-primary"
          >
            Campaigns
          </button>
          <span>&gt;</span>
          <button
            onClick={() => setCurrentPage("search")}
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
                onClick={() => setCurrentPage("ngo-profile")}
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
}

// Account Settings Page
function AccountSettingsPage({ setCurrentPage }) {
  return (
    <div className="space-y-8">
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
}
