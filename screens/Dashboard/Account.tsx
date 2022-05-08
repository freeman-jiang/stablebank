import { AntDesign, Feather } from "@expo/vector-icons";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  Button,
  Heading,
  HStack,
  Icon,
  PresenceTransition,
  Pressable,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import React from "react";
import { RootTabParamList } from ".";
import { RootStackParamList } from "../../App";
import { useLang } from "../../context/lang";

type Props = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList>,
  NativeStackScreenProps<RootStackParamList>
>;

export const Account = ({ navigation }: Props) => {
  const { isEN, setIsEN } = useLang();
  return (
    <ScrollView>
      <VStack
        w={{ base: "100%", md: 600 }}
        h="100%"
        safeArea
        alignItems="center"
        space={0}
        pt={4}
        mx="auto"
      >
        <VStack w="100%" h={50} justifyContent="flex-end">
          <Heading
            color="gray.900"
            fontSize={isEN ? 28 : 24}
            ml={6}
            alignSelf="flex-start"
          >
            {isEN ? "Account Settings" : "Configurações de Conta"}
          </Heading>
        </VStack>
        <VStack w="100%" h="100%" space={1} px={6} mt={5}>
          <Heading color="gray.900" fontWeight={500} fontSize="lg">
            {isEN ? "Language:" : "Língua:"}
          </Heading>
          <VStack space={3} mt={2}>
            <Pressable
              rounded="xl"
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
              rounded="xl"
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
                  Português
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
          <Button
            mt={4}
            onPress={() =>
              navigation.reset({
                index: 0,
                routes: [{ name: "Landing" }],
              })
            }
            px={6}
            py={3}
            alignSelf={"flex-end"}
            rounded="full"
            shadow={"1"}
            bg="gray.900"
            _pressed={{
              bg: "gray.800",
            }}
            rightIcon={
              //@ts-ignore
              <AntDesign name="logout" size={22} color="#fafafa" />
            }
          >
            <Text mr={1} fontWeight={500} color="gray.50">
              {isEN ? "Sign out" : "Sair"}
            </Text>
          </Button>
        </VStack>
      </VStack>
    </ScrollView>
  );
};
