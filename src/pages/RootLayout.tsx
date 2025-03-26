import React from "react";
import { Outlet } from "react-router";

export const RootLayout = () => {
  return (
    <main>
      <header>
        <h1>Root Layout</h1>
      </header>
      <Outlet />
    </main>
  );
};
