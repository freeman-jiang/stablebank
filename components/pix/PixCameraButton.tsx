import { BarCodeScanner } from "expo-barcode-scanner";
import {
  Actionsheet,
  HStack,
  Image,
  Pressable,
  Text,
  useDisclose,
} from "native-base";
import { BarCodeScanningResult, Camera, CameraType } from "expo-camera";
import React, { useState } from "react";
import { useLang } from "../../context/lang";
import * as Linking from "expo-linking";
import Pix from "../../assets/pix.png";

export const PixCameraButton = () => {
  const { isEN } = useLang();
  const { isOpen, onOpen, onClose } = useDisclose();
  const [scanned, setScanned] = useState(false);

  const handlePress = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setScanned(false);
    onOpen();
  };

  const handleBarCodeScanned = ({ type, data }: BarCodeScanningResult) => {
    setScanned(true);
    onClose();
    if (type === "org.iso.QRCode") {
      Linking.openURL(data);
    } else {
      alert("Cannot read QR Code format");
    }
  };

  return (
    <>
      <HStack mx={6}>
        <Pressable
          bg="gray.900"
          w="100%"
          py={4}
          rounded="xl"
          _pressed={{
            bg: "gray.800",
          }}
          onPress={handlePress}
        >
          <HStack justifyContent={"center"} alignItems="center">
            <Image
              source={Pix}
              alt="Pix Logo"
              h="100%"
              w={12}
              resizeMode="contain"
            />
            <Text ml={2} fontSize={16} fontWeight={500} color="white">
              {isEN ? "Pay with PIX" : "Pagar com PIX"}
            </Text>
          </HStack>
        </Pressable>
      </HStack>
      <Actionsheet
        isOpen={isOpen}
        onClose={onClose}
        _backdrop={{
          bg: "gray.900",
        }}
      >
        <Actionsheet.Content h={600} pt={4} bg="white" px={6}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={{
              flex: 1,
              width: "100%",
              height: "100%",
              borderRadius: 30,
            }}
            type={CameraType.back}
          />
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
};
