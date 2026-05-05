"use client";

import { useTheme } from '@/app/hooks/useTheme';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="toggle-button">
      Switch to {theme === "light" ? "dark" : "light"}
    </button>
  );
}
