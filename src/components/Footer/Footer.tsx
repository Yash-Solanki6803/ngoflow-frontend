import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-muted py-12 mt-12 section-padding">
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
                <button className="text-muted-foreground hover:text-primary">
                  Home
                </button>
              </li>
              <li>
                <button className="text-muted-foreground hover:text-primary">
                  About Us
                </button>
              </li>
              <li>
                <button className="text-muted-foreground hover:text-primary">
                  Featured NGOs
                </button>
              </li>
              <li>
                <button className="text-muted-foreground hover:text-primary">
                  Campaigns
                </button>
              </li>
              <li>
                <button className="text-muted-foreground hover:text-primary">
                  Our Impact
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">For Volunteers</h4>
            <ul className="space-y-2">
              <li>
                <button className="text-muted-foreground hover:text-primary">
                  Sign Up
                </button>
              </li>
              <li>
                <button className="text-muted-foreground hover:text-primary">
                  Login
                </button>
              </li>
              <li>
                <button className="text-muted-foreground hover:text-primary">
                  How It Works
                </button>
              </li>
              <li>
                <button className="text-muted-foreground hover:text-primary">
                  Success Stories
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">For NGOs</h4>
            <ul className="space-y-2">
              <li>
                <button className="text-muted-foreground hover:text-primary">
                  Apply as NGO
                </button>
              </li>
              <li>
                <button className="text-muted-foreground hover:text-primary">
                  NGO Login
                </button>
              </li>
              <li>
                <button className="text-muted-foreground hover:text-primary">
                  NGO Guidelines
                </button>
              </li>
              <li>
                <button className="text-muted-foreground hover:text-primary">
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
};
