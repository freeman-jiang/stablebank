import {
  Box,
  Button,
  Heading,
  HStack,
  StatusBar,
  Text,
  VStack,
} from "native-base";
import React from "react";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { Entypo } from "@expo/vector-icons";
import { useLang } from "../context/lang";
type Props = NativeStackScreenProps<RootStackParamList, "SignIn">;

export const SignIn = ({ navigation }: Props) => {
  const { isEN } = useLang();
  const handlePress = () =>
    navigation.reset({
      index: 0,
      routes: [{ name: "Dashboard" }],
    });

  return (
    <VStack px={6} w="100%" h="100%" bg="gray.800" safeArea py={4}>
      <StatusBar animated barStyle={"light-content"} />
      <HStack>
        <Button
          p={0}
          bg="transparent"
          onPress={() => navigation.goBack()}
          _pressed={{
            bg: "transparent",
          }}
        >
          {/* @ts-ignore */}
          <Entypo name="chevron-left" size={30} color="white" />
        </Button>
      </HStack>

      <Box>
        <VStack pb={"25%"} h="100%" justifyContent={"center"}>
          <Heading fontSize={30}>
            {isEN
              ? "We've emailed you a magic link!"
              : "Enviamos um link mágico para você!"}
          </Heading>
          <Text fontSize={18}>
            {isEN
              ? "Click the link we sent to sign in."
              : "Clique no link que enviamos para fazer login."}
          </Text>
          <Button
            mt={4}
            colorScheme="emerald"
            rounded="xl"
            py={4}
            onPress={handlePress}
          >
            <Text fontWeight={600}>{isEN ? "Continue" : "Continuar"}</Text>
          </Button>
        </VStack>
      </Box>
    </VStack>
  );
};
