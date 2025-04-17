// src/components/Register.tsx
// import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Card, CardContent } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Checkbox } from "../ui/checkbox";
import { Link } from "react-router";
import { registerUser } from "@/api/services";
import { RegisterRequest } from "@/api/types";
import { Button } from "../ui/button";

export const Register = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<RegisterRequest>({
    name: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setIsLoading(true);

    try {
      const response = await registerUser(formData);
      console.log("Register Response:", response); // Log response
      // On success, redirect to login page
      navigate("/login");
    } catch (error) {
      setErrorMessage((error as Error).message || "Registration failed!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Create aqn account</h1>
        <p className="text-muted-foreground mt-2">
          Join our community and start making a difference
        </p>
      </div>

      <Card>
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                required
              />
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

            {errorMessage && (
              <p className="text-red-500 text-sm">{errorMessage}</p>
            )}

            <Button className="w-full" type="submit" disabled={isLoading}>
              {isLoading ? "Registering..." : "Sign Up"}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
