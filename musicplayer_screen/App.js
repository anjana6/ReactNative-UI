import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MusicScreen from "./src/MusicScreen";
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <MusicScreen/>
    </SafeAreaProvider>
    
  );
}

