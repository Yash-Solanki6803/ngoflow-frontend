import { CheckCircle } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export const AboutComponent = () => {
  return (
    <div className="space-y-10 section-padding">
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
              <Button size="lg">Apply as an NGO</Button>
            </div>
          </div>

          <div className="bg-gray-300 rounded-lg aspect-[3/2] flex items-center justify-center">
            <span className="text-muted-foreground">600 × 400</span>
          </div>
        </div>
      </section>
    </div>
  );
};
