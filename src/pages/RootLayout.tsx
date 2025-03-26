import { Outlet } from "react-router";
import { Footer, Navbar } from "../components";

export const RootLayout = () => {
  return (
    <main>
      <header>
        <Navbar />
      </header>
      <Outlet />
      <Footer />
    </main>
  );
};
