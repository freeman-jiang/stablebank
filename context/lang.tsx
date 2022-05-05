import React, { createContext, ReactNode, useContext, useState } from "react";

interface LangContextObject {
  isEN: boolean;
  setIsEN(isEN: boolean): void;
}

const LangContext = createContext<LangContextObject>({
  setIsEN: () => {},
  isEN: true,
});

interface ProviderProps {
  children: ReactNode;
}

export const useLang = () => {
  return useContext(LangContext);
};

export const LangProvider = ({ children }: ProviderProps) => {
  const [isEN, setIsEN] = useState(true);
  const value = { isEN, setIsEN };
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
};
