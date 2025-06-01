import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Button from '../usestatehook/components/Button';

//  This is First Property of Use Ref Hook to get The Prvious State
const Useref = () => {
  const [count, setCount] = useState(0);
  const previosRef = useRef(0);


  const [timer,setTimer] = useState(0);
  const intervalRef = useRef(null);

  //     Input ref Property to do focus on the fields
  const inputRef = useRef(null);
  const inputRef2 = useRef(null);

  ///////
  
  useEffect(() => {
    previosRef.current = count;
  }, [count]);


  /// Use Timer
// Use Timer
useEffect(() => {
  intervalRef.current = setInterval(() => {
    setTimer(prev => prev + 1);
  }, 1000);

  return () => clearInterval(intervalRef.current);
}, []); // <-- fixed by adding []

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text
        style={{
          fontSize: 20,
          color: '#000',
          fontWeight: 'bold',
        }}>{`Current Count ${count}`}</Text>
      <Text
        style={{
          fontSize: 20,
          color: '#000',
          fontWeight: 'bold',
        }}>{`Previous Count ${previosRef.current}`}</Text>
      <Button onPress={() => setCount(count + 1)} title="Increase Count" />

      <TextInput
        ref={inputRef}
        placeholder="Enter Name "
        style={{
          top: 60,
          borderWidth: 1,
          borderColor: 'red',
          padding: 20,
          width: '70%',
          marginBottom: 20,
        }}
      />
      <TextInput
        ref={inputRef2}
        placeholder="Enter Age "
        style={{
          top: 60,
          borderWidth: 1,
          borderColor: 'red',
          padding: 20,
          width: '70%',
        }}
      />

      <View style={{padding: 20}}></View>
      <Button title="Do Focus " onPress={() => inputRef.current.focus()} />

        <Text style={{marginTop:60, fontSize:20}}>{`Timer ${timer}`}</Text>

        <Button onPress={()=> {clearInterval(intervalRef.current)}} title="Stop Timer " />
    </View>
  );
};

export default Useref;

const styles = StyleSheet.create({});
