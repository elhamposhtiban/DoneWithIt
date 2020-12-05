import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';

export default function App() {
  let x=1
  return (
   
    <SafeAreaView style={styles.container}>
      <Text> Hi this is Elham phone!</Text>
      <TouchableOpacity onPress={()=> console.log("this image is clicking")}>
      <Image source={{
        width: 200,
        height: 300,
        uri: 'https://picsum.photos/200/300'}}/>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
