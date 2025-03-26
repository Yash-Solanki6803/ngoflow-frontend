import { CheckCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

export const GlobalImpact = () => {
  return (
    <div className="space-y-10 section-padding">
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
              <Button size="lg">Start Making Impact</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
