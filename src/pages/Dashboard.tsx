import { UserRole } from "@/api/types";
import { DeveloperDashboard, Ngo, Volunteer } from "@/components";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { Link } from "react-router";

export const Dashboard = () => {
  const auth = useSelector((state: RootState) => state.auth);

  if (!auth.isLoggedIn) {
    return (
      <section className="flex flex-col gap-10 h-screen items-center justify-center">
        <h2 className="text-4xl font-semibold text-gray-800">
          You need to log in to view this page
        </h2>
        <Link className="text-xl hover:underline" to="/">
          Back to home
        </Link>
      </section>
    );
  }

  switch (auth.user?.role) {
    case UserRole.VOLUNTEER:
      return <Volunteer />;
    case UserRole.NGO:
      return <Ngo />;
    case UserRole.DEV:
      return <DeveloperDashboard />;
    default:
      return <h1>Invalid role</h1>;
  }
};
