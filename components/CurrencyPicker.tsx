import { AntDesign } from "@expo/vector-icons";
import {
  Actionsheet,
  Heading,
  HStack,
  IconButton,
  Pressable,
  Text,
  useDisclose,
  VStack,
} from "native-base";
import React from "react";
import { Keyboard } from "react-native";
import {
  Currency,
  CurrencyFlag,
  CurrencyCountry,
} from "../types/international";
import { CurrencyTab } from "./CurrencyTab";

const currencies = Object.keys(Currency);
interface Props {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
}

export const CurrencyPicker = ({ currency, setCurrency }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclose();

  return (
    <>
      <Pressable
        onPress={() => {
          Keyboard.dismiss();
          onOpen();
        }}
      >
        <HStack
          borderColor={"gray.400"}
          borderWidth={1}
          rounded="lg"
          px={3.5}
          h={16}
          alignItems="center"
        >
          <Text fontSize={18} color="gray.800" fontWeight={700}>
            {`${CurrencyFlag[currency]} ${currency} `}
            <Text fontWeight={400}>{`- ${CurrencyCountry[currency]}`}</Text>
          </Text>
        </HStack>
      </Pressable>
      <Actionsheet
        isOpen={isOpen}
        onClose={onClose}
        onTouchEnd={onClose}
        hideDragIndicator={true}
        _backdrop={{
          bg: "gray.900",
        }}
      >
        <Actionsheet.Content pt={6} bg="#e8e7e6" px={6}>
          <HStack
            px={1}
            justifyContent={"space-between"}
            alignItems="center"
            w="100%"
          >
            <Heading fontWeight={500} color={"gray.900"} fontSize={23}>
              Choose currency
            </Heading>
            <IconButton
              size={28}
              p={0}
              bg="transparent"
              _pressed={{
                bg: "transparent",
              }}
              onPress={onClose}
              icon={
                // @ts-ignore
                <AntDesign name="closecircle" size={24} color="#18181b" />
              }
            />
          </HStack>
          <VStack w="100%" mt={4} space={3}>
            {currencies.map((currency) => (
              <CurrencyTab
                key={currency}
                currency={currency as Currency}
                onClose={onClose}
                setCurrency={setCurrency}
              />
            ))}
          </VStack>
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
};
