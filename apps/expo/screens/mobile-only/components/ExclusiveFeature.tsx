import React from 'react';
import { View, Text } from 'react-native';

// Mobile-only feature component for Expo app
export function ExclusiveFeature() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>Mobile-Only Feature</Text>
      <Text>This feature is exclusive to the mobile app built with Expo.</Text>
    </View>
  );
}
