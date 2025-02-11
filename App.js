import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, KeyboardAvoidingView, ScrollView, Platform, TouchableWithoutFeedback, Keyboard, Text } from 'react-native';

// Hooks 
import { useState, useEffect } from 'react'; // Importa useState y useEffect

// importaciones de componentes
import Input from './src/components/Input';
import Button from './src/components/Button';

// importaciones de iconos
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function App() {
  
  // Estado para el color del icono
  const [iconColor, setIconColor] = useState('white'); 

  // Estado para capturar el usuario y la contraseña
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Función para alternar el color cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setIconColor((prevColor) => (prevColor === 'white' ? 'rgb(255, 119, 0)' : 'white'));
    }, 1000); // Cambia el color cada 1 segundo

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, []); // El segundo argumento vacío asegura que solo se ejecute una vez al montar el componente

  // Función para manejar el "Ingreso"
  const handleIngreso = () => {
    console.log("-------------------");
    console.log('Ingreso');
    console.log('Usuario:', username);
    console.log('Contraseña:', password);
    console.log("-------------------");
  };

  // Función para manejar la "Salida"
  const handleSalida = () => {
    console.log("-------------------");
    console.log('Salida');
    console.log('Usuario:', username);
    console.log('Contraseña:', password);
    console.log("-------------------");
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"} 
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.inner}>
          <StatusBar style="light" />

          <Image style={styles.logo} source={require('./assets/nutriscoLogo.webp')} />

          <View style={styles.input}>
            <Input 
              placeholder="Ingrese Usuario" 
              placeholderTextColor="grey" 
              value={username} // Establece el valor del input
              onChangeText={setUsername} // Actualiza el estado del usuario
            />
            <Input 
              placeholder="Ingrese Contraseña" 
              placeholderTextColor="grey" 
              secureTextEntry={true} 
              value={password} // Establece el valor del input
              onChangeText={setPassword} // Actualiza el estado de la contraseña
            />
          </View>

          <View style={styles.containerButtons}>
            <Button title="Ingreso Frío 🧊" onPress={handleIngreso} />
            <Button style={{backgroundColor: 'rgb(255, 119, 0)'}} title="Salida Frío ⛱️" onPress={handleSalida} />
          </View>

          <Text style={styles.endText}> Designed with  <MaterialCommunityIcons 
              name="robot-love" 
              size={17} 
              color={iconColor} // Cambia el color del icono automáticamente
            />  by 
            <Text style={{color: 'rgb(255, 119, 0)', fontWeight: 'bold'}}> PairCode</Text>
          </Text>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Fondo oscuro
  },
  logo: {
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 50
  },
  inner: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 40, // Espacio extra para evitar que los botones queden ocultos
  },
  input: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  containerButtons: {
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%'
  },
  endText: {
    color: 'white',
    marginTop: 20
  }
});
