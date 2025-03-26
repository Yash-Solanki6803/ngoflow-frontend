import React from "react";
import { Outlet } from "react-router";
import { Navbar } from "../components";

export const RootLayout = () => {
  return (
    <main>
      <header>
        <Navbar />
      </header>
      <Outlet />
    </main>
  );
};
