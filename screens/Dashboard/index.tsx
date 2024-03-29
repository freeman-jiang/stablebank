import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Receive } from "./Receive";
import { Spend } from "./Spend";
import { RootStackParamList } from "../../App";
import { Home } from "./Home";
import { Icon, StatusBar, Text, useBreakpointValue, VStack } from "native-base";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { useLang } from "../../context/lang";
import { Account } from "./Account";
import { getScreenWidth } from "../../utils";

type Props = NativeStackScreenProps<RootStackParamList, "Dashboard">;

export type RootTabParamList = {
  Receive: undefined;
  Spend: undefined;
  Home: undefined;
  Account: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export const Dashboard = ({ navigation }: Props) => {
  const tabWidth = useBreakpointValue({
    base: "100%",
    md: getScreenWidth() / 4,
  });

  const tabNavPt = useBreakpointValue({ base: 26, md: 0 });
  const { isEN } = useLang();
  return (
    <>
      <StatusBar animated barStyle={"dark-content"} />
      {/* @ts-ignore */}
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 90,
            paddingTop: tabNavPt,
            borderTopWidth: 0,
            backgroundColor: "#ededed",
            paddingHorizontal: 6,
          },
          lazy: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => {
              const color = focused ? "black" : "gray.500";
              return (
                <VStack alignItems={"center"} space={1} w={tabWidth}>
                  <Icon
                    as={
                      // @ts-ignore
                      <FontAwesome name="home" />
                    }
                    size={7}
                    color={color}
                  />
                  <Text fontWeight={500} color={color}>
                    Home
                  </Text>
                </VStack>
              );
            },
          }}
        />
        <Tab.Screen
          name="Receive"
          component={Receive}
          options={{
            tabBarIcon: ({ focused }) => {
              const color = focused ? "black" : "gray.500";
              return (
                <VStack alignItems={"center"} space={1} w={tabWidth}>
                  <Icon
                    as={
                      // @ts-ignore
                      <MaterialCommunityIcons name="card-plus" />
                    }
                    size={7}
                    color={color}
                  />
                  <Text fontWeight={500} color={color}>
                    {isEN ? "Receive" : "Receber"}
                  </Text>
                </VStack>
              );
            },
          }}
        />
        <Tab.Screen
          name="Spend"
          component={Spend}
          options={{
            tabBarIcon: ({ focused }) => {
              const color = focused ? "black" : "gray.500";
              return (
                <VStack alignItems={"center"} space={1} w={tabWidth}>
                  <Icon
                    // @ts-ignore
                    as={<MaterialCommunityIcons name="credit-card" />}
                    size={7}
                    color={color}
                  />
                  <Text color={color} fontWeight={500}>
                    {isEN ? "Spend" : "Gastar"}
                  </Text>
                </VStack>
              );
            },
          }}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            tabBarIcon: ({ focused }) => {
              const color = focused ? "black" : "gray.500";
              return (
                <VStack alignItems={"center"} space={1} w={tabWidth}>
                  <Icon
                    as={
                      // @ts-ignore
                      <MaterialCommunityIcons
                        name="account-circle"
                        size={24}
                        color="black"
                      />
                    }
                    size={7}
                    color={color}
                  />
                  <Text fontWeight={500} color={color}>
                    {isEN ? "Account" : "Conta"}
                  </Text>
                </VStack>
              );
            },
          }}
        />
      </Tab.Navigator>
    </>
  );
};
