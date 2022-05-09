import {
  Actionsheet,
  Heading,
  HStack,
  Image,
  Pressable,
  Text,
  useDisclose,
} from "native-base";
import React from "react";
import { Keyboard } from "react-native";
import Pix from "../../assets/pix.png";
import QRCode from "../../assets/qr-code.png";
import { useBalance } from "../../context/balance";
import { useLang } from "../../context/lang";
import { Currency } from "../../types/international";
import { calculateUSDValue } from "../../utils";

interface Props {
  currency: Currency;
  amount: string;
}

export const PixButton = ({ amount, currency }: Props) => {
  const { isEN } = useLang();
  const { balance, setBalance } = useBalance();
  const { isOpen, onOpen, onClose } = useDisclose();

  return (
    <>
      <HStack mt={8}>
        <Pressable
          bg="gray.800"
          w="100%"
          py={4}
          rounded="xl"
          _pressed={{
            bg: "gray.700",
          }}
          _disabled={{
            bg: "gray.600",
          }}
          onPress={() => {
            Keyboard.dismiss();
            onOpen();
            setBalance(
              balance + calculateUSDValue(parseFloat(amount), currency)
            );
          }}
          isDisabled={!amount || amount === "0"}
        >
          <HStack justifyContent={"center"} alignItems="center">
            <Image
              source={Pix}
              alt="Pix Logo"
              h="100%"
              w={12}
              resizeMode="contain"
            />
            <Text ml={2} fontSize={16} fontWeight={500} color="gray.50">
              {isEN ? "Charge with PIX" : "Cobrar com PIX"}
            </Text>
          </HStack>
        </Pressable>
      </HStack>

      <Actionsheet
        isOpen={isOpen}
        onClose={onClose}
        onTouchEnd={onClose}
        _backdrop={{
          bg: "gray.900",
        }}
      >
        <Actionsheet.Content pt={6} bg="white" px={6}>
          <Heading color="gray.900">
            {isEN ? "Pay with PIX" : "Cobrar com PIX"}
          </Heading>
          <Text color="gray.600">{`Total: ${amount} ${currency}`}</Text>
          <Image source={QRCode} boxSize={300} alt="PIX QR Code" />
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
};
