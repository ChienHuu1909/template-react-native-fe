import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

export default function HomeScreen() {
  const handlePress = () => {
    Alert.alert('Hello!', 'Bạn đã nhấn nút 🚀');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏠 Đây là Home Screen</Text>
      <Button title="Nhấn tôi" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
