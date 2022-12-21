import { Alert, FlatList, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { callApiWatcher } from '../../store/actions';
import { ScreenProps } from 'react-native-screens';
import { styles } from './WelcomeScreen.styles';

export const WelcomeScreen = (props: ScreenProps) => {
  const dispatch = useDispatch()
  const [resData, setResData] = useState(null)

useEffect(() => {
  apicall()
}, [])

  const renderItem = ({item, index}:any) => (
    <View key={index} style={styles.ListBox}>
      <Text>Title : - {item.title}</Text>
      <Text>Description : - {item.body}</Text>
    </View>
  )

  const apicall = () => {
    dispatch(callApiWatcher(
      '',
      ((res: any) => setResData(res)),
      ((e: any) => Alert.alert('====================================>e<==', e)),
    ))
  }
  return (
      <View style={styles.mainContainer} >
        <FlatList
          renderItem={renderItem}
          data={resData}
        />
      </View >
  )
}