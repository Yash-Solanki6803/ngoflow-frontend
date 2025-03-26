import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { Button } from "../ui/button";
import { logout } from "@/redux/authSlice";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

export const Navbar = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const state = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  // function foo() {
  //   console.log("state", state);
  // }

  const handleLogout = () => {
    dispatch(logout());
    setIsDialogOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm section-padding sticky top-0 z-50">
      {/* <div className="px-4 sm:px-6 lg:px-8"> */}
      <div className="flex justify-between h-16">
        <div className="flex-shrink-0 flex items-center">
          <Link to="/">
            <h1 className="text-xl font-bold text-gray-800">NGOFlow</h1>
          </Link>
        </div>
        <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-1 md:space-x-8">
          <Link
            to="/"
            className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
          >
            Home
          </Link>
          <Link
            to="#about"
            className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
          >
            About
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
          >
            NGOs
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
          >
            Campaigns
          </Link>
          {/* <button onClick={foo}>Click</button> */}
          {state.auth.isLoggedIn ? (
            <>
              <Link to="/dashboard">Dashboard</Link>
              <Button
                onClick={() => setIsDialogOpen(true)}
                className="bg-red-500 text-white hover:bg-red-700 px-4 py-2 rounded-md text-sm font-medium cursor-pointer"
              >
                Logout
              </Button>
            </>
          ) : (
            <div className="flex gap-1">
              <Link
                to="/login"
                className="border border-blue-600 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-md text-sm font-medium"
              >
                Sign Up
              </Link>
            </div>
          )}
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Confirm Logout</DialogTitle>
                <p className="text-sm text-muted-foreground">
                  Are you sure you want to log out?
                </p>
              </DialogHeader>
              <DialogFooter>
                <Button
                  variant="outline"
                  onClick={() => setIsDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button variant="destructive" onClick={handleLogout}>
                  Logout
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      {/* </div> */}
    </nav>
  );
};
