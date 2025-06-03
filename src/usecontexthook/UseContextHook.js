import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { createContext } from 'react'
import CompoA from '../usestatehook/components/CompoA';

// Making Hook
export const userContext = createContext();
const UseContextHook = () => {

  return (
    
  <userContext.Provider
  value={{
    name:"sahito",
    email:"sahito@gmail.com"
  }}
  >
     <SafeAreaView>
    <Text>Component A</Text>
    <CompoA user={{
        name:"Mansoor",
        email:"mansoor@gmail.com"
    }} />
   </SafeAreaView>
  </userContext.Provider>
  )
}

export default UseContextHook;

const styles = StyleSheet.create({})