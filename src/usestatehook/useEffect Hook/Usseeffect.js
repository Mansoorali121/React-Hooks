// import {ActivityIndicator, FlatList, StyleSheet, Text, View} from 'react-native';
// import React, {useEffect, useState} from 'react';

// const useHook = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Fetch data from API
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(response => response.json())
//       .then(data => {
//         setData(data);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error('Error fetching posts:', error);
//         setLoading(false);
//       });
//   }, []);

  
//   return (
//     <View style={{flex:1, alignItems:"center", marginTop:60}}>
//       {loading ? (
//         <ActivityIndicator size={large} color="blue" />

//       ): (
//         <FlatList data={data} 
//         keyExtractor={(item) => item.id} 
//         renderItem={({item}) => (
//           <Text>{item.title}</Text>
//         )}
//         />


//       )}
//     </View>
//   );
// };

// export default useHook;

// const styles = StyleSheet.create({});


import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <FlatList
          data={posts}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <Text style={styles.item}>{item.title}</Text>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  item: {
    marginVertical: 8,
    fontSize: 16,
    color: 'black',
  },
});

export default App;
