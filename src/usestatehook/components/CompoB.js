import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CompoC from './CompoC';

const CompoB = ({user}) => {
  return (
    <View>

      <Text>This is Component B </Text>
      {/* <Text>{user.name}</Text> */}
            <Text>{user.name}</Text>

            <CompoC  user={user}/>
      
      
    </View>
  )
}

export default CompoB;

const styles = StyleSheet.create({})