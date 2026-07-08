"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./Icons";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const current =
      (document.documentElement.getAttribute("data-theme") as Theme | null) ??
      "light";
    setTheme(current);
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // localStorage can be unavailable; the toggle still works for this session.
    }
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={
        theme == null
          ? "Toggle color theme"
          : `Switch to ${isDark ? "light" : "dark"} theme`
      }
      className="grid h-9 w-9 place-items-center rounded-full border border-line text-muted transition-colors hover:border-teal hover:text-teal"
    >
      {/* Render both icons only once the client knows the theme, to avoid a mismatch. */}
      {theme != null &&
        (isDark ? (
          <SunIcon className="h-[18px] w-[18px]" />
        ) : (
          <MoonIcon className="h-[18px] w-[18px]" />
        ))}
    </button>
  );
}
