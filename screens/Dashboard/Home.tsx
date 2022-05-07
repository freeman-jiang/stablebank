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
} from "native-base";
import React, { useState } from "react";
import { TransactionSheet } from "../../components/TransactionSheet";

export const Home = () => {
  const [showBRL, setShowBRL] = useState(false);
  return (
    <VStack w="100%" h="100%" safeArea alignItems="center" space={0} pt={6}>
      <HStack
        w="100%"
        justifyContent={"space-between"}
        alignItems="center"
        px={6}
      >
        <Heading color="gray.900" fontSize={32} alignSelf="flex-start">
          Overview
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
      </HStack>
      <VStack my={10} alignItems="center" space={1}>
        <Heading color={"gray.900"} fontWeight={500}>
          Total Balance
        </Heading>
        <Heading color="gray.900" fontSize={34} letterSpacing={"sm"}>
          {showBRL ? "R$ 1,675.55" : "$329.71"}
        </Heading>
      </VStack>

      <HStack w="100%" px={16} justifyContent="space-between">
        <VStack alignItems={"center"} space={2}>
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
            Add
          </Text>
        </VStack>
        <VStack alignItems={"center"} space={2}>
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
            Withdraw
          </Text>
        </VStack>
        <VStack alignItems={"center"} space={2}>
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
            Send
          </Text>
        </VStack>
      </HStack>
      <Box w="100%" mt={3}>
        <TransactionSheet />
      </Box>
    </VStack>
  );
};
