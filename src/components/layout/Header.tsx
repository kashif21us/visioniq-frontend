"use client";

import {
  IconBell,
  IconSearch,
  IconSun,
  IconMoon,
  IconMaximize,
} from "@tabler/icons-react";
import { useState } from "react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <header className="sticky top-0 z-50 h-16 border-b bg-white px-6 flex items-center justify-between shadow-sm">

      {/* Left */}
      <div className="flex items-center gap-6">

        <h1 className="text-xl font-bold text-slate-800">
          VisionIQ Enterprise
        </h1>

        <div className="relative hidden md:block">
          <IconSearch
            size={18}
            className="absolute left-3 top-3 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search employee, camera..."
            className="w-80 rounded-lg border border-slate-200 bg-slate-50 py-2 pl-10 pr-4 outline-none focus:border-blue-500"
          />
        </div>

      </div>

      {/* Right */}

      <div className="flex items-center gap-4">

        <button className="rounded-lg p-2 hover:bg-slate-100">
          <IconBell size={22} />
        </button>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="rounded-lg p-2 hover:bg-slate-100"
        >
          {darkMode ? (
            <IconSun size={22} />
          ) : (
            <IconMoon size={22} />
          )}
        </button>

        <button className="rounded-lg p-2 hover:bg-slate-100">
          <IconMaximize size={22} />
        </button>

        <div className="flex items-center gap-3">

          <div className="text-right">
            <p className="text-sm font-semibold">
              Administrator
            </p>

            <p className="text-xs text-slate-500">
              System Admin
            </p>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
            A
          </div>

        </div>

      </div>

    </header>
  );
}
