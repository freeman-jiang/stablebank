import { Feather } from "@expo/vector-icons";
import {
  Heading,
  HStack,
  Icon,
  PresenceTransition,
  Pressable,
  Text,
  VStack,
} from "native-base";
import React from "react";
import { useLang } from "../../context/lang";

export const Account = () => {
  const { isEN, setIsEN } = useLang();
  return (
    <VStack w="100%" h="100%" safeArea alignItems="center" space={0} pt={6}>
      <Heading color="gray.900" fontSize={32} alignSelf="flex-start" ml={6}>
        Account Settings
      </Heading>
      <VStack w="100%" h="100%" space={1} px={6} mt={5}>
        <Heading color="gray.900" fontWeight={500} fontSize="xl">
          Language:
        </Heading>
        <VStack space={2} mt={2}>
          <Pressable
            rounded="lg"
            onPress={() => setIsEN(true)}
            zIndex={3}
            _pressed={{
              bg: "gray.100",
            }}
            shadow={"1"}
            bg="gray.50"
            px={4}
            h={54}
            justifyContent="center"
          >
            <HStack justifyContent={"space-between"} w="100%">
              <Text color={"gray.900"} fontWeight={500}>
                English
              </Text>

              <PresenceTransition
                visible={isEN}
                initial={{
                  scale: 0,
                }}
                animate={{
                  scale: 1,
                  transition: {
                    duration: 100,
                  },
                }}
              >
                <Icon
                  as={
                    // @ts-ignore
                    <Feather name="check" />
                  }
                  size={6}
                  color="blue.500"
                />
              </PresenceTransition>
            </HStack>
          </Pressable>
          <Pressable
            rounded="lg"
            onPress={() => setIsEN(false)}
            zIndex={3}
            _pressed={{
              bg: "gray.100",
            }}
            shadow={"1"}
            bg="gray.50"
            px={4}
            h={54}
            justifyContent="center"
          >
            <HStack justifyContent={"space-between"} w="100%">
              <Text color={"gray.900"} fontWeight={500}>
                Portuguese
              </Text>

              <PresenceTransition
                visible={!isEN}
                initial={{
                  scale: 0,
                }}
                animate={{
                  scale: 1,
                  transition: {
                    duration: 100,
                  },
                }}
              >
                <Icon
                  as={
                    // @ts-ignore
                    <Feather name="check" />
                  }
                  size={6}
                  color="blue.500"
                />
              </PresenceTransition>
            </HStack>
          </Pressable>
        </VStack>
      </VStack>
    </VStack>
  );
};
