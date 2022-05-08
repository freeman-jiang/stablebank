import { Entypo, FontAwesome, Ionicons } from "@expo/vector-icons";
import {
  Heading,
  VStack,
  Text,
  HStack,
  Switch,
  IconButton,
  Icon,
  Box,
  ScrollView,
} from "native-base";
import React, { useState } from "react";
import { TransactionButton } from "../../components/TransactionButton";
import { useLang } from "../../context/lang";

export const Home = () => {
  const { isEN } = useLang();
  const [showBRL, setShowBRL] = useState(false);
  return (
    <ScrollView>
      <VStack
        w={{ base: "100%", md: 600 }}
        h="100%"
        safeArea
        alignItems="center"
        space={0}
        pt={6}
        mx="auto"
      >
        <VStack w="100%" px={6} space={1}>
          <Heading color="gray.900" fontSize={32}>
            {isEN ? "Overview" : "Visão geral"}
          </Heading>
          <HStack alignItems={"center"} space={0}>
            <Text color={"gray.900"} fontWeight={500} fontSize="md">
              USD
            </Text>
            <Switch
              size="sm"
              onTrackColor={"emerald.500"}
              offTrackColor={"gray.700"}
              value={showBRL}
              onToggle={() => setShowBRL(!showBRL)}
            />
            <Text color={"gray.900"} fontWeight={500} fontSize="md">
              BRL
            </Text>
          </HStack>
        </VStack>
        <VStack my={10} alignItems="center" space={1}>
          <Heading color={"gray.900"} fontWeight={500}>
            {isEN ? "Total Balance" : "Balanço Total"}
          </Heading>
          <Heading color="gray.900" fontSize={34} letterSpacing={"sm"}>
            {showBRL ? "R$ 1,675.55" : "$329.71"}
          </Heading>
        </VStack>
        <HStack w="100%" justifyContent="center" space={3}>
          <VStack alignItems={"center"} space={2} w={20}>
            <IconButton
              boxSize={12}
              rounded="full"
              bg="gray.800"
              //@ts-ignore
              icon={<Icon as={<Entypo name="plus" />} color="white" size={5} />}
              _pressed={{
                bg: "gray.700",
              }}
            />
            <Text color="gray.900" fontWeight={500}>
              {isEN ? "Add" : "Adicionar"}
            </Text>
          </VStack>
          <VStack alignItems={"center"} space={2} w={20}>
            <IconButton
              boxSize={12}
              rounded="full"
              bg="gray.800"
              icon={
                <Icon
                  //@ts-ignore
                  as={<FontAwesome name="bank" />}
                  color="white"
                  size={4}
                />
              }
              _pressed={{
                bg: "gray.700",
              }}
            />
            <Text color="gray.900" fontWeight={500}>
              {isEN ? "Withdraw" : "Retirar"}
            </Text>
          </VStack>
          <VStack alignItems={"center"} space={2} w={20}>
            <IconButton
              boxSize={12}
              rounded="full"
              bg="gray.800"
              icon={
                <Icon
                  //@ts-ignore
                  as={<Ionicons name="send" size={24} color="black" />}
                  color="white"
                  size={4}
                />
              }
              _pressed={{
                bg: "gray.700",
              }}
            />
            <Text color="gray.900" fontWeight={500}>
              {isEN ? "Send" : "Enviar"}
            </Text>
          </VStack>
        </HStack>
        <TransactionButton mt={6} />
      </VStack>
    </ScrollView>
  );
};
