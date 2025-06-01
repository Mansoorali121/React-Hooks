import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'
import Button from './components/Button';

const usestateHook = () => {
    const [count, setCount] = useState(0);

  return (
    <SafeAreaView style={{flex:1, alignItems:"center", justifyContent:"center"}}>
        {/* <TouchableOpacity style={{backgroundColor:"#A4B3C2", padding:20, borderRadius:20, width:"40%"}}>
            <Text style={{textAlign:"center", color:"#fff", fontWeight:"bold", fontSize:20}}> Press </Text>
        </TouchableOpacity> */}
        {/* For Additions  */}
        <Button  onPress={() => setCount(count+1) } title="Addition" />
            <Text style={{color:"black", fontSize:20 }}>{count}</Text>

            <Button onPress={() => setCount(count-1)} title="Substract" />
        

    </SafeAreaView>
  )
}

export default usestateHook;

const styles = StyleSheet.create({})