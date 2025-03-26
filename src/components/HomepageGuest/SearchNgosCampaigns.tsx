import { useState } from "react";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export const SearchNgosCampaigns = ({ searchType = "all" }) => {
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
    <div
      className="space-y-8 section-padding
"
    >
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
              <SelectContent className="">
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
                      <button className="hover:text-primary">
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
                <Button variant="outline" className="w-full">
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
};
