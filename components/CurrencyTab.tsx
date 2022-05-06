import { Divider, Heading, HStack, Text } from "native-base";
import React from "react";
import { Pressable } from "react-native";
import { Currency, CurrencyFlag } from "../types/international";

interface Props {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  onClose: () => void;
}

export const CurrencyTab = ({ currency, setCurrency, onClose }: Props) => {
  return (
    <Pressable
      onPress={() => {
        onClose();
        setTimeout(() => setCurrency(Currency[currency]), 200);
      }}
    >
      <HStack
        justifyContent={"space-between"}
        bg="white"
        w="100%"
        p={3.5}
        rounded="xl"
      >
        <HStack space={2} alignItems="center">
          <Text fontSize={18} fontWeight={600} color="black">
            {CurrencyFlag[currency]}
          </Text>
          <Text fontSize={18} fontWeight={600} color="black">
            {currency}
          </Text>
        </HStack>
      </HStack>
    </Pressable>
  );
};
