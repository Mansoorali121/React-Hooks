import { Button, SafeAreaView, StyleSheet, Text } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';

const UseCallbackExample = () => {
  const [count, setCount] = useState(0);

  const fetchData = useCallback(() => {
    //  This Hooks Stop Rerendering of The Childs 
    console.log('Fetching Data');
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
    </SafeAreaView>
  );
};

export default UseCallbackExample;

const styles = StyleSheet.create({});
