import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Home } from "./Home";
import { Wallet } from "./Wallet";
import { RootStackParamList } from "../../App";
import { Profile } from "./Profile";
import { Box, Icon, Text, VStack } from "native-base";
import { Entypo, FontAwesome } from "@expo/vector-icons";

export type RootTabParamList = {
  Home: undefined;
  Wallet: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

type Props = NativeStackScreenProps<RootStackParamList, "Dashboard">;

export const Dashboard = ({ navigation }: Props) => {
  return (
    // @ts-ignore
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 90,
          paddingTop: 26,
          borderTopWidth: 0,
          backgroundColor: "#ededed",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            const color = focused ? "black" : "gray.500";
            return (
              <VStack alignItems={"center"} space={1}>
                <Icon
                  // @ts-ignore
                  as={<Entypo name="home" size={24} />}
                  size={6}
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
        name="Wallet"
        component={Wallet}
        options={{
          tabBarIcon: ({ focused }) => {
            const color = focused ? "black" : "gray.500";
            return (
              <VStack alignItems={"center"} space={1}>
                <Icon
                  // @ts-ignore
                  as={<FontAwesome name="credit-card-alt" size={24} />}
                  size={6}
                  color={color}
                />

                <Text color={color} fontWeight={500}>
                  Spend
                </Text>
              </VStack>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
