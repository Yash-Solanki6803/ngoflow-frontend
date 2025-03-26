import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

export const Testimonials = () => {
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
    <div className="space-y-10 section-padding">
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
      </section>
    </div>
  );
};
