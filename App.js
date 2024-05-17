import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import Navigation from './src/navigation/navigate';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


