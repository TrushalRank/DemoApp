import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppNavigator } from './navigator'
import { SafeAreaProvider} from 'react-native-safe-area-context'
import { Provider } from 'react-redux';
import { store } from './store';
import { PushController } from './screens/PushController /PushController ';

export const Root = () => {

  return (
    <Provider store={store}>
        <SafeAreaProvider style={{ flex: 1 }}>
          <PushController/>
          <StatusBar translucent={true} backgroundColor={'transparent'} />
          <AppNavigator />
        </SafeAreaProvider>
    </Provider>
  )
}

const styles = StyleSheet.create({})