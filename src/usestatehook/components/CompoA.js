import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CompoB from './CompoB';

const CompoA = ({user}) => {
  return (
    <View>
      <Text>{user.name}</Text>

      <CompoB  user={user} />
    </View>
  )
}

export default CompoA;

const styles = StyleSheet.create({})