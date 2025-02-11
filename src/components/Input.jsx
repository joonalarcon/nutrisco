import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

const Input = ({ placeholder, placeholderTextColor = "#fff", style, ...props }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        style={[styles.input, style]}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Fondo translúcido sin blur
    marginBottom: 25,
    

    // Estilos de sombra para iOS
    shadowColor: '#000',  // Color de la sombra
    shadowOffset: { width: 0, height: 2 }, // Desplazamiento de la sombra
    shadowOpacity: 0.25, // Opacidad de la sombra
    shadowRadius: 3.5,   // Radio de difuminado de la sombra

    // Estilo de sombra para Android
    elevation: 5, // Elevación de la sombra (sólo en Android)
  },
  input: {
    width: '100%',
    height: 40,
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Input;
