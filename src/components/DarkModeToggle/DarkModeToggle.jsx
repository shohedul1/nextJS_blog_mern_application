"use client";

import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const DarkModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);
  const [isDarkMode, setIsDarkMode] = useState(mode === "dark");

  // Update local state when context changes
  useEffect(() => {
    setIsDarkMode(mode === "dark");
  }, [mode]);

  const handleClick = () => {
    toggle();
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className="w-[42px] h-[24px] border border-green-800 rounded-md flex items-center justify-between p-2 relative cursor-pointer"
      onClick={handleClick}
    >
      {isDarkMode ? (
        <div className="text-sm">🌙</div>
      ) : (
        <div className="text-sm">🔆</div>
      )}
    </div>
  );
};

export default DarkModeToggle;
