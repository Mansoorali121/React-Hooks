import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Button = ({onPress, title}) => {
  return (
    <View style={{ alignItems: 'center',}}>
      <TouchableOpacity onPress={onPress}
        activeOpacity={0.7}
        style={{backgroundColor: '#A4B3C2', padding:10, width:"50%", borderRadius:20,top:50, }}>
        <Text style={{color:"#fff", fontSize:20, textAlign:"center"}}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({});
