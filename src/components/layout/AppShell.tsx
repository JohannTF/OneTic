"use client";

import { useEffect, useState } from "react";
import { MotionConfig } from "motion/react";
import { Sidebar } from "@/components/layout/Sidebar";
import { TopBar } from "@/components/layout/TopBar";

export function AppShell({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Lock scroll while mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <MotionConfig reducedMotion="user">
    <div className="flex min-h-screen bg-surface-base">
      <Sidebar
        collapsed={collapsed}
        onToggle={() => setCollapsed((c) => !c)}
        mobileOpen={mobileOpen}
        onMobileClose={() => setMobileOpen(false)}
      />
      <div className="flex min-w-0 flex-1 flex-col">
        <TopBar onMobileMenuToggle={() => setMobileOpen((o) => !o)} />
        <main className="flex-1 overflow-x-hidden px-4 py-10 sm:px-8 sm:py-16 lg:px-20 lg:py-24">
          <div className="mx-auto w-full max-w-255">{children}</div>
        </main>
      </div>
    </div>
    </MotionConfig>
  );
}
