import React from "react";
import { ThemeDropdownMenu } from "../theme-dropdown-menu";

export const Header = () => {
  return (
    <div className="h-16 bg-transparent backdrop-blur-md sticky top-0 w-full flex justify-end items-center px-2 md:px-4 lg:px-6">
      <div className="flex gap-2 md:gap-4">
        <ThemeDropdownMenu />
      </div>
    </div>
  );
};
