"use client";

import { createContext, useContext, ReactNode } from "react";

interface NavLink {
  name: string;
  address: string;
}

interface NavProps {
  links: NavLink[];
}

const NavigationContext = createContext<NavProps | undefined>(undefined);

const NavigationProvider = ({ children }: { children: ReactNode }) => {
  const navProps: NavProps = {
    links: [
      {
        name: "About Us",
        address: "/about",
      },
      {
        name: "Blogs",
        address: "/blogs",
      },
      {
        name: "Live Jobs",
        address: "/jobs",
      },
    ],
  };

  return (
    <NavigationContext.Provider value={navProps}>
      {children}
    </NavigationContext.Provider>
  );
};

const useNavigation = (): NavProps => {
  const context = useContext(NavigationContext);

  if (context === undefined)
    throw new Error("Context was used outside provider");

  return context;
};

// const defaultValue: NavigationContextType = {
//   isOpen: false,
//   toggle: () => {},
// };

// const NavigationContext = createContext<NavigationContextType>(defaultValue);
