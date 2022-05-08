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
import { FontAwesome } from "@expo/vector-icons";
import { StatusBar } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { useLang } from "../context/lang";
import Google from "../assets/google.png";
import { getScreenHeight } from "../utils";
type Props = NativeStackScreenProps<RootStackParamList, "Landing">;

export const Landing = ({ navigation }: Props) => {
  const { isEN, setIsEN } = useLang();
  const handlePress = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Dashboard" }],
    });
  };

  return (
    <>
      <StatusBar animated barStyle={"dark-content"} />

      <VStack px={6} w="100%" h="100%" bg="gray.50" justifyContent={"center"}>
        <HStack justifyContent={"space-between"} alignItems="center">
          <Heading fontSize={35} color="black">
            StableBank
          </Heading>
          <Button
            bg="gray.900"
            rounded={"2xl"}
            _pressed={{
              bg: "gray.700",
            }}
            boxSize={52}
            onPress={() => setIsEN(!isEN)}
          >
            <Text color={"white"} fontWeight={600}>
              {isEN ? "BR" : "EN"}
            </Text>
          </Button>
        </HStack>
        <Center my={12}>
          <Image
            source={CreditCard}
            w={"100%"}
            h={getScreenHeight() * 0.38}
            alt="Credit Cards"
            resizeMode="contain"
          />
        </Center>
        <VStack space={0}>
          <Heading color="black" fontSize={30}>
            {isEN ? "Receive" : "Receber"} <Text color="purple.500">USD.</Text>
          </Heading>
          <Heading color="black" fontSize={30}>
            {isEN ? "Spend" : "Gastar"} <Text color="green.500">BRL.</Text>
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
            bg="gray.900"
            w="60%"
            _pressed={{
              bg: "gray.700",
            }}
            onPress={() => navigation.navigate("SignIn")}
          >
            <Text fontSize={20} color="gray.50" fontWeight={600}>
              {isEN ? "Sign In" : "Entrar"}
            </Text>
          </Button>
          <IconButton
            onPress={handlePress}
            //@ts-ignore
            icon={<FontAwesome name="apple" size={28} color="white" />}
            bg="gray.900"
            w="20%"
            rounded="3xl"
            _pressed={{
              bg: "gray.700",
            }}
          />
          <Button
            onPress={handlePress}
            color="black"
            bg="gray.900"
            w="20%"
            rounded="3xl"
            _pressed={{
              bg: "gray.700",
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
      </VStack>
    </>
  );
};
