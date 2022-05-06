import { AntDesign } from "@expo/vector-icons";
import {
  Actionsheet,
  CheckIcon,
  Divider,
  FormControl,
  Heading,
  HStack,
  IconButton,
  Input,
  Pressable,
  Select,
  Text,
  useDisclose,
  View,
  VStack,
  WarningOutlineIcon,
} from "native-base";
import React, { useState } from "react";
import { TextInput } from "react-native";
import { CurrencyTab } from "../../components/CurrencyTab";
import {
  Currency,
  CurrencyFlag,
  CurrencyName,
} from "../../types/international";
const currencies = Object.keys(Currency);

export const Home = () => {
  const [currency, setCurrency] = useState<Currency>(Currency.BRL);
  const { isOpen, onOpen, onClose } = useDisclose();

  return (
    <VStack px={6} py={6} w="100%" h="100%" safeArea>
      {/* <VStack justifyContent={"center"} alignItems="center" pb={4} space={1}>
        <Heading color="black">Valt.</Heading>
        <Divider color="red.200" />
      </VStack> */}
      <Heading color="gray.900" fontSize={32}>
        Receive Payment
      </Heading>
      <VStack mt={4} space={2}>
        <Text color="gray.600" fontSize={16}>
          Currency
        </Text>
        <Pressable onPress={onOpen}>
          <HStack borderColor={"gray.400"} borderWidth={1} rounded="lg" p={3.5}>
            <Text fontSize={16} color="gray.800" fontWeight={700}>
              {`${CurrencyFlag[currency]} ${currency} `}
              <Text fontWeight={400}>{`- ${CurrencyName[currency]}`}</Text>
            </Text>
          </HStack>
        </Pressable>
        <Actionsheet
          isOpen={isOpen}
          onClose={onClose}
          onTouchEnd={onClose}
          hideDragIndicator={true}
          _backdrop={{
            bg: "gray.500",
          }}
        >
          <Actionsheet.Content pt={6} bg="#e8e7e6" px={6}>
            <HStack
              px={1}
              justifyContent={"space-between"}
              alignItems="center"
              w="100%"
            >
              <Heading color={"gray.900"} fontSize={22}>
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
      </VStack>
      <VStack mt={4} space={2}>
        <Text color="gray.600" fontSize={16}>
          Amount
        </Text>
        <TextInput
          keyboardType="decimal-pad"
          onChange={(e) => console.log(e.nativeEvent.text)}
          style={{
            borderColor: "green",
            borderWidth: 1,
            padding: 18,
            borderRadius: 7,
          }}
          // borderWidth={1}
          // rounded="lg"
          // p={3.5}
        ></TextInput>
      </VStack>
    </VStack>
  );
};
