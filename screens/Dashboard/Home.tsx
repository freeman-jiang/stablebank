import { VStack } from "native-base";
import React from "react";
import { Text } from "react-native";

export const Home = () => {
  return (
    <VStack px={6} w="100%" h="100%" safeArea justifyContent={"center"}>
      <Text>Home</Text>
    </VStack>
  );
};
