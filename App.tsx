import React, { useState } from "react";
import { theme } from "./theme";
import {
  Text,
  HStack,
  Center,
  Heading,
  NativeBaseProvider,
  VStack,
  Image,
  Button,
  IconButton,
} from "native-base";

import CreditCard from "./assets/graphic.png";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { StatusBar } from "react-native";

export default function App() {
  const [isEN, setIsEN] = useState(true);

  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar animated barStyle={"light-content"} />
      <VStack
        px={6}
        w="100%"
        h="100%"
        bg="gray.800"
        safeArea
        justifyContent={"center"}
      >
        <HStack justifyContent={"space-between"} alignItems="center">
          <Heading fontSize={35} color="white">
            Valt.
          </Heading>
          <Button
            bg="white"
            rounded={"2xl"}
            _pressed={{
              bg: "gray.100",
            }}
            boxSize={12}
            onPress={() => setIsEN(!isEN)}
          >
            <Text color={"black"} fontWeight={600}>
              {isEN ? "BR" : "EN"}
            </Text>
          </Button>
        </HStack>
        <Center my={12}>
          <Image
            source={CreditCard}
            w={"100%"}
            h={300}
            alt="Credit Cards"
            resizeMode="contain"
          />
        </Center>
        <VStack space={0}>
          <Heading color="white" fontSize={30}>
            {isEN ? "Receive" : "Receber"} <Text color="pink.400">USD.</Text>
          </Heading>
          <Heading color="white" fontSize={30}>
            {isEN ? "Spend" : "Gastar"} <Text color="green.400">BRL.</Text>
          </Heading>
        </VStack>
        <HStack
          mt={6}
          space={2}
          position="relative"
          h={16}
          px={2}
          justifyContent={"center"}
        >
          <Button
            rounded={20}
            bg="white"
            w="60%"
            _pressed={{
              bg: "gray.100",
            }}
          >
            <Text fontSize={18} color="black" fontWeight={600}>
              {isEN ? "Sign In" : "Entrar"}
            </Text>
          </Button>
          <IconButton
            // @ts-ignore - why is this erroring?
            icon={<FontAwesome name="apple" size={22} color="white" />}
            bg="gray.700"
            w="20%"
            rounded="3xl"
            _pressed={{
              bg: "gray.600",
            }}
          />
          <IconButton
            // @ts-ignore - why is this erroring?
            icon={<AntDesign name="google" size={22} color="white" />}
            bg="gray.700"
            w="20%"
            rounded="3xl"
            _pressed={{
              bg: "gray.600",
            }}
          />
        </HStack>
        <HStack mt={8} justifyContent="flex-end"></HStack>
      </VStack>
    </NativeBaseProvider>
  );
}
