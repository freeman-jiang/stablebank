import React, { createContext, ReactNode, useContext, useState } from "react";

interface BalanceContextObject {
  balance: number;
  setBalance(balance: number): void;
}

const BalanceContext = createContext<BalanceContextObject>({
  setBalance: () => {},
  balance: 0,
});

interface ProviderProps {
  children: ReactNode;
}

export const useBalance = () => {
  return useContext(BalanceContext);
};

export const BalanceProvider = ({ children }: ProviderProps) => {
  const [balance, setBalance] = useState(Math.random() * 500);

  const value = {
    balance,
    setBalance,
  };
  return (
    <BalanceContext.Provider value={value}>{children}</BalanceContext.Provider>
  );
};
