import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Button from '../usestatehook/components/Button';


//  This is First Property of Use Ref Hook to get The Prvious State 
const Useref = () => {
    const [count , setCount] = useState(0);
    const previosRef = useRef(0);
    useEffect(() => {
        previosRef.current = count;

    },[count])
  return (
    <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
      <Text style={{fontSize:20, color:"#000", fontWeight:"bold"}}>{`Current Count ${count }`}</Text>
      <Text style={{fontSize:20, color:"#000", fontWeight:"bold"}}>{`Previous Count ${previosRef.current }`}</Text>
      <Button onPress={() => setCount(count+1)}  title="Increase Count"/>
    </View>
  )
}

export default Useref;

const styles = StyleSheet.create({})