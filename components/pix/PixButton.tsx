import {
  Actionsheet,
  Button,
  Heading,
  Image,
  Text,
  useDisclose,
} from "native-base";
import * as React from "react";
import { Keyboard } from "react-native";
import QRCode from "../../assets/qr-code.png";
import { Currency } from "../../types/international";

interface Props {
  currency: Currency;
  amount: string;
}

export const PixButton = ({ amount, currency }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclose();

  return (
    <>
      <Button
        mt={8}
        bg="black"
        py={4}
        rounded="lg"
        _pressed={{
          bg: "gray.800",
        }}
        onPress={() => {
          onOpen();
          Keyboard.dismiss();
        }}
        isDisabled={!amount || amount === "0"}
      >
        <Text fontWeight={600} fontSize={"md"}>
          Continue with PIX
        </Text>
      </Button>

      <Actionsheet
        isOpen={isOpen}
        onClose={onClose}
        onTouchEnd={onClose}
        _backdrop={{
          bg: "gray.500",
        }}
      >
        <Actionsheet.Content pt={6} bg="white" px={6}>
          <Heading color="gray.900">Scan with PIX</Heading>
          <Text color="gray.600">{`Total: ${amount} ${currency}`}</Text>
          <Image source={QRCode} boxSize={300} alt="PIX QR Code" />
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
};
