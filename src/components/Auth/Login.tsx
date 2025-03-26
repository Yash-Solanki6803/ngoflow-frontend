import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useLoginMutation } from "@/redux/api";
import { loginSuccess } from "@/redux/authSlice";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Link } from "react-router";

export const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading, error }] = useLoginMutation();
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (error) {
      const tempErrorMessage =
        (error as { data?: { message?: string } })?.data?.message ??
        "An error occurred. Please try again.";
      setErrorMessage(tempErrorMessage);
    }
  }, [error]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(""); // Reset error message on new submit

    try {
      const response = await login({ email, password }).unwrap();
      console.log("login response", response);

      // Store the token in localStorage
      localStorage.setItem("token", response.token);

      // Dispatch the login success action
      dispatch(loginSuccess(response));
    } catch (err) {
      console.error("Login failed:", err);
    } finally {
      // Clear the password field
      setEmail("");
      setPassword("");
    }
  };

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
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Button variant="link" className="p-0 h-auto text-sm">
                  Forgot your password?
                </Button>
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
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

            {/* Display error message if login fails */}
            {errorMessage && (
              <p className="text-red-500 text-sm">{errorMessage}</p>
            )}

            <Button className="w-full" type="submit" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
