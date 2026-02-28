"use client";

import { useState } from "react";
import Sidebar from "@/components/sidebar";
import ToggleButton from "@/components/toggle-button";

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="flex min-h-screen overflow-x-hidden">
      {/* Sidebar Container */}
      <div
        className={`transition-all duration-500 ease-in-out border-r border-gray-800 ${
          isOpen ? "w-[15rem]" : "w-0 opacity-0 pointer-events-none"
        }`}
      >
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 transition-all duration-500">
        <div className="p-4 flex items-center gap-4">
          <ToggleButton onToggle={toggle} />
        </div>
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}