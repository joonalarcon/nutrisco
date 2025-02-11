import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Vibration } from 'react-native';

const Button = ({ title, onPress, backgroundColor = '#007BFF', textColor = '#FFF', style }) => {
  const handlePress = () => {
    // Vibrar por 200 ms cuando se presiona el botón
    Vibration.vibrate(100);
    if (onPress) {
      onPress();
    }
  };

  return (
    <TouchableOpacity 
      style={[styles.button, { backgroundColor }, style]} 
      onPress={handlePress}
      activeOpacity={0.8}
    >
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "80%",
    height: 50,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Button;
