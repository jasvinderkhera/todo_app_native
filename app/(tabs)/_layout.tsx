import { View, Text } from 'react-native'
import React from 'react'
import { Stack, Tabs } from 'expo-router'

const RootLayout = () => {
  return (
    <Stack screenOptions={{headerShown:false}} >
      <Stack.Screen name='(tabs)' options={{headerShown:false}} />
      <Stack.Screen name='index'/>
      <Stack.Screen name='secondPage'/>
      <Stack.Screen name='thirdPage'/>
      <Stack.Screen name='login'/>
      <Stack.Screen name='signup'/>
      <Stack.Screen name='forgot'/>
      <Stack.Screen name='tasks'/>
      <Stack.Screen name='addTask'/>
    </Stack>
  )
}

export default RootLayout