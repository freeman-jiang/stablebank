import React from "react";
import {
  Text,
  HStack,
  Center,
  Heading,
  VStack,
  Image,
  Button,
  IconButton,
} from "native-base";
import CreditCard from "../assets/graphic.png";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { StatusBar } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { useLang } from "../context/lang";
import Google from "../assets/google.png";
type Props = NativeStackScreenProps<RootStackParamList, "Landing">;

export const Landing = ({ navigation }: Props) => {
  const { isEN, setIsEN } = useLang();

  return (
    <>
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
            onPress={() => navigation.navigate("SignIn")}
          >
            <Text fontSize={18} color="black" fontWeight={600}>
              {isEN ? "Sign In" : "Entrar"}
            </Text>
          </Button>
          <IconButton
            onPress={() => navigation.navigate("Dashboard")}
            //@ts-ignore
            icon={<FontAwesome name="apple" size={28} color="white" />}
            bg="gray.700"
            w="20%"
            rounded="3xl"
            _pressed={{
              bg: "gray.600",
            }}
          />
          <Button
            onPress={() => navigation.navigate("Dashboard")}
            color="white"
            bg="gray.700"
            w="20%"
            rounded="3xl"
            _pressed={{
              bg: "gray.600",
            }}
          >
            <Image
              source={Google}
              boxSize={6}
              resizeMode="contain"
              alt="Google Logo"
            />
          </Button>
        </HStack>
        <HStack mt={8} justifyContent="flex-end"></HStack>
      </VStack>
    </>
  );
};
