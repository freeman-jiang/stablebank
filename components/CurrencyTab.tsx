import { Divider, Heading, HStack, Text } from "native-base";
import React from "react";
import { Pressable } from "react-native";
import {
  Currency,
  CurrencyFlag,
  CurrencyCountry,
} from "../types/international";

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
        bg="gray.100"
        w="100%"
        rounded="xl"
        py={1}
        px={4}
      >
        <HStack space={2} alignItems="center">
          <Text fontSize={30} fontWeight={600} color="black">
            {CurrencyFlag[currency]}
          </Text>
          <Text ml={2} fontSize={18} fontWeight={600} color="black">
            {currency}
          </Text>
        </HStack>
      </HStack>
    </Pressable>
  );
};
