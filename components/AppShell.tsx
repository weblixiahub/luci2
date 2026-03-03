'use client';

import { createContext, useContext, useMemo, useState } from 'react';
import Sidebar from './Sidebar';

type AppShellContextValue = {
  sidebarOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
};

const AppShellContext = createContext<AppShellContextValue | null>(null);

export function useAppShell() {
  const value = useContext(AppShellContext);
  if (!value) {
    throw new Error('useAppShell must be used within AppShell');
  }
  return value;
}

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const value = useMemo(
    () => ({
      sidebarOpen,
      openSidebar: () => setSidebarOpen(true),
      closeSidebar: () => setSidebarOpen(false)
    }),
    [sidebarOpen]
  );

  return (
    <AppShellContext.Provider value={value}>
      <button
        className={`hamburger viewportHamburger fixed top-4 right-4 ${sidebarOpen ? 'invisible' : ''}`}
        onClick={value.openSidebar}
        aria-label="Open menu"
        aria-expanded={sidebarOpen}
      >
        <span />
        <span />
        <span />
      </button>
      <Sidebar open={sidebarOpen} close={value.closeSidebar} />
      {sidebarOpen && <div className="overlay" onClick={value.closeSidebar} />}
      {children}
    </AppShellContext.Provider>
  );
}
