import React from "react";
import { theme } from "./theme";
import { NativeBaseProvider } from "native-base";
import { Landing } from "./screens/Landing";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Dashboard } from "./screens/Dashboard";
import { SignIn } from "./screens/SignIn";
import { LangProvider } from "./context/lang";

export type RootStackParamList = {
  Landing: undefined;
  Dashboard: undefined;
  SignIn: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <LangProvider>
      <NativeBaseProvider theme={theme}>
        <NavigationContainer>
          {/*@ts-ignore*/}
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              animation: "default",
            }}
            initialRouteName="Landing"
          >
            <Stack.Screen name="Landing" component={Landing} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="SignIn" component={SignIn} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </LangProvider>
  );
};

export default App;
