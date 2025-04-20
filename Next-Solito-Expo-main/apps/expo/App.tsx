import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Button } from 'react-native';
import { HomeScreen } from 'shared-pages';
import { ExclusivePage } from './screens/mobile-only/pages/ExclusivePage';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <HomeScreen />;
      case 'mobile':
        return <ExclusivePage />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 10 }}>
        <Button title="Home" onPress={() => setCurrentScreen('home')} />
        <Button title="Mobile Exclusive" onPress={() => setCurrentScreen('mobile')} />
      </View>
      {renderScreen()}
      <StatusBar style="auto" />
    </View>
  );
}
