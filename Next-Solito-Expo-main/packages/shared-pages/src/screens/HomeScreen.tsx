import React from 'react';
import { View, Text } from 'shared-components';
import { greet } from 'shared-utils';

export function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>{greet('User')}</Text>
      <Text>Welcome to the Cross-Platform App!</Text>
    </View>
  );
}
