import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Screen4 = ({ navigation, route }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleNext = () => {
    if (phoneNumber.trim() === '') {
      alert('Please enter your phone number.');
      return;
    }
    navigation.navigate('Screen5', { ...route.params, phoneNumber });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What’s the best number to reach you for investment advice? 📞</Text>
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <Button title="Continue" onPress={handleNext} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 18, marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 20, borderRadius: 5 },
});

export default Screen4;
