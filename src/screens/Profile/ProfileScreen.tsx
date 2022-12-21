import { Text, View } from 'react-native'
import React from 'react'

export interface Props {
  navigation:any;
  params: any;
  route: any;
  navigate: any;
}

export const ProfileScreen: React.FunctionComponent<any> = (props: Props) => {
  return (
    <View>
      <Text>ProfileScreen</Text>
    </View>
  )
}