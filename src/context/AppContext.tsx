"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type TabId = "home" | "colleges" | "careers" | "roadmaps" | "insights" | "resources" | "interview" | "nttf" | "about" | "privacy" | "terms";

interface AppContextType {
  activeTab: TabId;
  setActiveTab: (tab: TabId) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [activeTab, setActiveTab] = useState<TabId>("home");

  return (
    <AppContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}
