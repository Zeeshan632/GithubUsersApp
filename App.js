import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import Routes from './src/Routes';
import Routes from './src/Routes';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Routes />
      <Toast />
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})