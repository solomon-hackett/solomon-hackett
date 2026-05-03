"use client";

import { useTheme } from "@/app/hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="px-3 py-2 border rounded">
      Switch to {theme === "light" ? "dark" : "light"}
    </button>
  );
}
