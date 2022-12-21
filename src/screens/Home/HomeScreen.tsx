import { Text, View } from "react-native";
import React, { useEffect } from "react";
import { styles } from "./HomeScreen.styles";
import PushNotification from "react-native-push-notification";
import messaging from '@react-native-firebase/messaging'

export interface Props {
  navigation:any;
  params: any;
  route: any;
  navigate: any;
}

export const HomeScreen: React.FunctionComponent<any> = (props: Props) => {

  useEffect(() => {
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('====================================');
      console.log('notification',remoteMessage);
      console.log('====================================');
    });
  }, []);

  useEffect(() => {
    PushNotification.configure({
      onNotification: function(notification :any) {
          console.log('====================================');
          console.log(notification);
          console.log('====================================');
          props.navigation.navigate('WelcomeScreen')
      }
  });
  }, [])
  

  return (
    <View style={styles.mainContainer}>
      <Text onPress={()=> props.navigation.navigate('WelcomeScreen')}>HomeScreen</Text>
    </View>
  );
};
