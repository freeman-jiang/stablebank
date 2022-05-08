import { Heading, HStack, Pressable, Text, VStack } from "native-base";
import React, { useState } from "react";
import {
  Keyboard,
  NativeSyntheticEvent,
  TextInput,
  TextInputChangeEventData,
} from "react-native";
import { CurrencyPicker } from "../../components/CurrencyPicker";
import { PixButton } from "../../components/pix/PixButton";
import { useLang } from "../../context/lang";
import { Currency } from "../../types/international";

export const Receive = () => {
  const { isEN } = useLang();
  const [currency, setCurrency] = useState<Currency>(Currency.BRL);
  const [amount, setAmount] = useState<string>("");

  const formatAmount = () => {
    if (!amount) {
      return;
    }
    const numericalAmount = parseFloat(amount) || 0;
    setAmount(numericalAmount.toString());
  };

  const handleAmount = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    const amountString = e.nativeEvent.text;
    setAmount(amountString);
  };

  return (
    <Pressable onPress={() => Keyboard.dismiss()}>
      <VStack px={6} py={6} w="100%" h="100%" safeArea>
        <Heading color="gray.900" fontSize={isEN ? 32 : 28}>
          {isEN ? "Receive Payment" : "Receber Pagamento"}
        </Heading>
        <VStack mt={4} space={2}>
          <Text color="gray.600" fontSize={16}>
            {isEN ? "Currency" : "Moeda"}
          </Text>
          <CurrencyPicker currency={currency} setCurrency={setCurrency} />
        </VStack>

        <VStack mt={4} space={2}>
          <Text color="gray.600" fontSize={16}>
            {isEN ? "Amount" : "Quantidade"}
          </Text>
          <HStack
            borderColor={"gray.400"}
            borderWidth={1}
            rounded="lg"
            px={3.5}
            h={16}
            alignItems="center"
          >
            <TextInput
              onEndEditing={formatAmount}
              keyboardType="decimal-pad"
              returnKeyLabel="Done"
              returnKeyType="done"
              onChange={handleAmount}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 8,
                fontSize: 18,
                color: "#27272a",
                fontWeight: "500",
              }}
              value={amount}
              placeholder="0.00"
              placeholderTextColor={"#a1a1aa"}
            ></TextInput>
          </HStack>
        </VStack>

        <PixButton currency={currency} amount={amount} />
      </VStack>
    </Pressable>
  );
};
