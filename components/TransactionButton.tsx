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
import { InterfaceBoxProps } from "native-base/lib/typescript/components/primitives/Box";
import React from "react";
import { useState } from "react";
import { ListRenderItem } from "react-native";
import { getInitials } from "../utils";
import { MOCK_DATA } from "../utils/mockData";

export interface iTransaction {
  name: string;
  icon: string;
  date: string;
  amount: number;
  type: "debit" | "credit";
}

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
        {getInitials(item.name)}
      </Avatar>
      <VStack maxW={40}>
        <Text fontWeight={600} color="gray.900">
          {item.name}
        </Text>
        <Text color="gray.600" fontSize={"xs"}>
          {item.date}
        </Text>
      </VStack>
    </HStack>
    <Text
      fontSize={"md"}
      fontWeight={500}
      color={item.type === "debit" ? "green.700" : "red.700"}
    >
      {`${item.type === "debit" ? "+" : "-"} $${item.amount.toFixed(2)}`}
    </Text>
  </HStack>
);

export const TransactionButton = (props: InterfaceBoxProps) => {
  const { isOpen, onOpen, onClose } = useDisclose();
  const [expanded, setExpanded] = useState(false);

  return (
    <Box w="100%" px={6} {...props}>
      <Button
        py={3}
        bg="gray.800"
        rounded="xl"
        _pressed={{ bg: "gray.700" }}
        onPress={onOpen}
      >
        <Text color="white" fontSize={16} fontWeight={600}>
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
        <Actionsheet.Content pt={6} bg="#e8e7e6" px={4}>
          <VStack
            mt={2}
            px={1}
            justifyContent={"space-between"}
            alignItems="center"
            w="100%"
          >
            <HStack
              w="100%"
              justifyContent={"space-between"}
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
            initialNumToRender={8}
            pr={3}
            indicatorStyle="black"
            h={expanded ? "100%" : 270}
            mt={4}
            w="100%"
            data={MOCK_DATA}
            renderItem={renderItem}
          />
        </Actionsheet.Content>
      </Actionsheet>
    </Box>
  );
};
