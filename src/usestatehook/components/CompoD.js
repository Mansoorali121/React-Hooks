import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { userContext } from '../../usecontexthook/UseContextHook'

const CompoD = () => {
    const newuser = useContext(userContext);
  return (
    <View>
        <Text>This is Component D from the UseContext Hook </Text>
      <Text>{newuser.name}</Text>
    </View>
  )
}

export default CompoD;

const styles = StyleSheet.create({})