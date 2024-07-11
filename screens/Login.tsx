import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, Alert, ImageBackground } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/Config';

export default function Login({ navigation }: any) {
  const [correo, setCorreo] = useState('');
  const [contrasenia, setContrasenia] = useState('');

  function login() {
    signInWithEmailAndPassword(auth, correo, contrasenia)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigation.navigate('BottomTabs');
      })
      .catch((error) => {
        const errorCode = error.code;
        let titulo = "";
        let mensaje = "";

        if (errorCode === "auth/wrong-password") {
          titulo = "Error de contraseña";
          mensaje = "La contraseña ingresada es incorrecta";
        } else if (errorCode === "auth/user-not-found") {
          titulo = "Error de usuario";
          mensaje = "El usuario ingresado no existe";
        } else {
          titulo = "Error de Acceso";
          mensaje = "Revisar credenciales";
        }

        Alert.alert(titulo, mensaje);
      });
  }

  return (
    <ImageBackground
      source={{ uri: "https://www.metroecuador.com.ec/resizer/v2/HY4EIT3MUVAADOPHSIRXIIU3EE.jpeg?auth=d2d9365bfff4f863ef86d6ffb972b8674c9078ee7bb35bc09c6d171891722641&width=800&height=1549" }} // Reemplaza con la URL de tu imagen de fondo
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>

        <TextInput
          placeholder='Ingresa tu correo electrónico'
          onChangeText={(texto) => setCorreo(texto)}
          keyboardType='email-address'
          style={styles.input}
        />
        <TextInput
          placeholder='Ingresa contraseña'
          onChangeText={(texto) => setContrasenia(texto)}
          style={styles.input}
          secureTextEntry={true}
        />

        <Button title='Ingresar' onPress={login} color={"black"} />

        <Text onPress={() => navigation.navigate('Registro')}> 👉 Regístrate aquí 👈</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Transparencia para la imagen de fondo
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    color: '#fff', // Color del texto sobre la imagen de fondo
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '100%',
    backgroundColor: '#fff', // Color de fondo del TextInput
  },
  registerText: {
    marginTop: 20,
    fontSize: 16,
    color: '#fff', // Color del texto sobre la imagen de fondo
  },
});
