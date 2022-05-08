import { HStack, Text } from "native-base";
import React from "react";
import { Pressable } from "react-native";
import { useLang } from "../context/lang";
import {
  Currency,
  CurrencyFlag,
  CurrencyCountry,
  PTCurrencyCountry,
} from "../types/international";

interface Props {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  onClose: () => void;
}

export const CurrencyTab = ({ currency, setCurrency, onClose }: Props) => {
  const { isEN } = useLang();
  return (
    <Pressable
      onPress={() => {
        onClose();
        setTimeout(() => setCurrency(Currency[currency]), 200);
      }}
    >
      <HStack
        justifyContent={"space-between"}
        bg="gray.100"
        w="100%"
        rounded="xl"
        px={4}
        py={0.5}
      >
        <HStack space={2} alignItems="center">
          <Text fontSize={30} fontWeight={600} color="black">
            {CurrencyFlag[currency]}
          </Text>
          <Text fontSize={18} color="gray.800" fontWeight={700}>
            {currency}
            <Text fontWeight={400}>{` - ${
              isEN ? CurrencyCountry[currency] : PTCurrencyCountry[currency]
            }`}</Text>
          </Text>
        </HStack>
      </HStack>
    </Pressable>
  );
};
