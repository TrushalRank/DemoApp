import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { WelcomeScreen, HomeScreen } from "../screens";
import { Image } from "react-native";
import { images } from "../themes";

export interface Props {
  navigation: any;
  params: any;
  route: any;
  navigate: any;
}

export const BottomNavigator: React.FunctionComponent<any> = (props: Props) => {
  const Tab = createBottomTabNavigator<any>();

  return (
    <Tab.Navigator screenOptions={{ tabBarActiveTintColor: "#D23078" }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <Image
                style={{
                  width: size,
                  height: size,
                  resizeMode: "center",
                  marginTop: 5,
                }}
                source={
                  color === "#D23078" ? images.Pink_Home : images.Black_Home
                }
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <Image
                style={{
                  width: size,
                  height: size,
                  resizeMode: "center",
                  marginTop: 5,
                }}
                source={
                  color === "#D23078" ? images.pink_account : images.account
                }
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
