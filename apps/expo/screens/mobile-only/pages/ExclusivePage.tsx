import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Mobile-only page/screen for Expo app
// This page is exclusive to the mobile platform and can be tied to a navigation route
export function ExclusivePage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mobile-Only Exclusive Page</Text>
      <Text style={styles.description}>
        This is a full page exclusive to the mobile app built with Expo. It can be accessed via navigation.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
});
