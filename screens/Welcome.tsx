import React from 'react';
import { Button, StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function WelcomeScreen({ navigation }: any) {
  function InicioSesion() {
    navigation.navigate("Login");
  }

  function Registro() {
    navigation.navigate("Registro");
  }

  return (
    <ImageBackground
      source={{ uri: "https://yt3.googleusercontent.com/ytc/AIdro_lLonKEec_h1nh5LST-HSQb2EiCSlWZm0Ov3VLFz-OfCd4=s900-c-k-c0x00ffffff-no-rj" }} // Aquí debes poner la URL de tu imagen de fondo
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Bienvenidos!!!</Text>
        <Button title='Inicio de Sesion' onPress={InicioSesion} color={"blue"} />
        <Button title='Registro' onPress={Registro} color={"blue"} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover", // Cubrir toda la pantalla
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Transparencia para la imagen de fondo
    padding: 20,
  },
  welcomeText: {
    fontSize: 30,
    marginBottom: 20,
    color: '#fff', // Color del texto sobre la imagen de fondo
  },
});
