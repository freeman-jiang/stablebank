import { Currency } from "./../types/international";
import { Dimensions } from "react-native";
export const getInitials = (fullName: string): string => {
  const fullNameArray = fullName.split(" ");
  if (fullNameArray.length === 0) {
    return "";
  }
  const initials =
    fullNameArray.shift()!.charAt(0) + fullNameArray.pop()!.charAt(0);
  return initials.toUpperCase();
};

export const getScreenHeight = () => {
  return Dimensions.get("window").height;
};

export const getScreenWidth = () => {
  return Dimensions.get("window").width;
};

// CURRENCY CONVERSIONS. UPDATE AS NEEDED OR USE API TO GET RATES
export const exchangeRateBRLtoUSD = 0.19693553; // May 9, 2022, 05:57 UTC
export const exchangeRateCADtoUSD = 0.77227219; // May 9, 2022, 05:57 UTC
export const exchangeRateEURtoUSD = 1.0506725; // May 9, 2022, 05:57 UTC

export const calculateUSDValue = (value: number, currency: Currency) => {
  switch (currency) {
    case Currency.USD:
      return value;
    case Currency.BRL:
      return value * exchangeRateBRLtoUSD;
    case Currency.CAD:
      return value * exchangeRateCADtoUSD;
    case Currency.EUR:
      return value * exchangeRateEURtoUSD;
    default:
      return value;
  }
};

export const convertUSDtoBRL = (value: number) => {
  return value / exchangeRateBRLtoUSD;
};
