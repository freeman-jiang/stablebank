import { Feather } from "@expo/vector-icons";
import {
  Actionsheet,
  Avatar,
  Box,
  Button,
  Heading,
  HStack,
  IconButton,
  Text,
  useDisclose,
  VStack,
  FlatList,
} from "native-base";
import React from "react";
import { useState } from "react";
import { ListRenderItem } from "react-native";

interface iTransaction {
  name: string;
  icon: string;
  date: string;
  amount: number;
  type: "debit" | "credit";
}

const DATA: iTransaction[] = [
  {
    name: "João Queirós",
    icon: "https://avatars0.githubusercontent.com/u/1500684?s=460&v=4",
    date: "Sept 14, 12:35 PM",
    amount: 32.23,
    type: "debit",
  },
  {
    name: "Sofia Cardoso",
    icon: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    date: "Sept 14, 12:35 PM",
    amount: 142.28,
    type: "credit",
  },
  {
    name: "João Queirós",
    icon: "https://avatars0.githubusercontent.com/u/1500684?s=460&v=4",
    date: "Sept 14, 12:35 PM",
    amount: 32.23,
    type: "debit",
  },
  {
    name: "João Queirós",
    icon: "https://avatars0.githubusercontent.com/u/1500684?s=460&v=4",
    date: "Sept 14, 12:35 PM",
    amount: 32.23,
    type: "debit",
  },
  {
    name: "Sofia Cardoso",
    icon: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    date: "Sept 14, 12:35 PM",
    amount: 18.28,
    type: "credit",
  },
  {
    name: "João Queirós",
    icon: "https://avatars0.githubusercontent.com/u/1500684?s=460&v=4",
    date: "Sept 14, 12:35 PM",
    amount: 32.23,
    type: "debit",
  },
  {
    name: "João Queirós",
    icon: "https://avatars0.githubusercontent.com/u/1500684?s=460&v=4",
    date: "Sept 14, 12:35 PM",
    amount: 32.23,
    type: "debit",
  },
  {
    name: "Sofia Cardoso",
    icon: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    date: "Sept 14, 12:35 PM",
    amount: 18.28,
    type: "credit",
  },
  {
    name: "João Queirós",
    icon: "https://avatars0.githubusercontent.com/u/1500684?s=460&v=4",
    date: "Sept 14, 12:35 PM",
    amount: 32.23,
    type: "debit",
  },
  {
    name: "João Queirós",
    icon: "https://avatars0.githubusercontent.com/u/1500684?s=460&v=4",
    date: "Sept 14, 12:35 PM",
    amount: 32.23,
    type: "debit",
  },
  {
    name: "Sofia Cardoso",
    icon: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    date: "Sept 14, 12:35 PM",
    amount: 18.28,
    type: "credit",
  },
  {
    name: "João Queirós",
    icon: "https://avatars0.githubusercontent.com/u/1500684?s=460&v=4",
    date: "Sept 14, 12:35 PM",
    amount: 32.23,
    type: "debit",
  },
  {
    name: "Sofia Cardoso",
    icon: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    date: "Sept 14, 12:35 PM",
    amount: 18.28,
    type: "credit",
  },
  {
    name: "João Queirós",
    icon: "https://avatars0.githubusercontent.com/u/1500684?s=460&v=4",
    date: "Sept 14, 12:35 PM",
    amount: 32.23,
    type: "debit",
  },
  {
    name: "João Queirós",
    icon: "https://avatars0.githubusercontent.com/u/1500684?s=460&v=4",
    date: "Sept 14, 12:35 PM",
    amount: 32.23,
    type: "debit",
  },
  {
    name: "Sofia Cardoso",
    icon: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    date: "Sept 14, 12:35 PM",
    amount: 18.28,
    type: "credit",
  },
  {
    name: "João Queirós",
    icon: "https://avatars0.githubusercontent.com/u/1500684?s=460&v=4",
    date: "Sept 14, 12:35 PM",
    amount: 32.23,
    type: "debit",
  },
];

const renderItem: ListRenderItem<iTransaction> = ({ index, item }) => (
  <HStack
    justifyContent={"space-between"}
    alignItems="center"
    py={2.5}
    w="100%"
  >
    <HStack space={4} alignItems="center">
      <Avatar
        bg="gray.800"
        source={{
          uri: item.icon,
        }}
      >
        AJ
      </Avatar>
      <VStack maxW={32}>
        <Text fontWeight={600} color="gray.900">
          {item.name}
        </Text>
        <Text color="gray.600" fontSize={"xs"}>
          {item.date}
        </Text>
      </VStack>
    </HStack>
    <Text
      fontSize={"lg"}
      fontWeight={500}
      color={item.type === "debit" ? "green.700" : "red.700"}
    >
      {`${item.type === "debit" ? "+" : "-"} $${item.amount}`}
    </Text>
  </HStack>
);

export const TransactionSheet = () => {
  const { isOpen, onOpen, onClose } = useDisclose();
  const [expanded, setExpanded] = useState(false);

  return (
    <Box mt={2} w="100%" px={6}>
      <Button
        bg="gray.900"
        rounded="xl"
        _pressed={{ bg: "gray.800" }}
        onPress={onOpen}
      >
        <Text color="gray.50" fontWeight={600} py={1}>
          View transactions
        </Text>
      </Button>
      <Actionsheet
        isOpen={isOpen}
        onClose={onClose}
        _backdrop={{
          bg: "gray.900",
        }}
        h={"100%"}
      >
        <Actionsheet.Content pt={6} bg="#e8e7e6" px={6}>
          <VStack
            mt={2}
            px={1}
            justifyContent={"space-between"}
            alignItems="center"
            w="100%"
          >
            <HStack
              w="100%"
              justifyContent={"center"}
              alignItems={"center"}
              space={4}
            >
              <Heading fontWeight={500} color={"gray.900"} fontSize={23}>
                Recent Transactions
              </Heading>

              <IconButton
                onPress={() => setExpanded(!expanded)}
                icon={
                  expanded ? (
                    //@ts-ignore
                    <Feather name="arrow-down" size={20} color="black" />
                  ) : (
                    //@ts-ignore
                    <Feather name="arrow-up" size={20} color="black" />
                  )
                }
                rounded="3xl"
                _pressed={{
                  bg: "gray.300",
                }}
                bg="gray.300"
              />
            </HStack>
          </VStack>
          <FlatList
            pr={3}
            indicatorStyle="black"
            h={expanded ? "100%" : 270}
            mt={4}
            w="100%"
            data={DATA}
            renderItem={renderItem}
          />
        </Actionsheet.Content>
      </Actionsheet>
    </Box>
  );
};
