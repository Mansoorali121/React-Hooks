import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CompoD from './CompoD';

const CompoC = ({user}) => {
  return (
    <View>
      <Text> This is Component C </Text>
            <Text>{user.name}</Text>
      
      <CompoD/>
    </View>
  )
}

export default CompoC;

const styles = StyleSheet.create({})