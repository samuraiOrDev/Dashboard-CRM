import { createContext } from "react";

interface LayoutTypeContext {
  changeThemeSidebar: string;
  handleThemeSidebar: (theme: string) => void;
  activeSettings: boolean;
  handleActiveSettings: () => void;
  sideNavType: boolean;
  handleSideNavType: (value: boolean) => void;
}

export const LayoutContext = createContext({} as LayoutTypeContext);
