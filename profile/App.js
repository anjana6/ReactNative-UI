import React from 'react';
import ProfileScreen from './src/ProfileScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context'



export default function App() {
  return (
    <SafeAreaProvider>
      <ProfileScreen/>
    </SafeAreaProvider>
    
    
  );
}

