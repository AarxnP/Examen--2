import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ImageBackground, Alert } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/Config';

export default function Registro({ navigation }: any) {
    const [correo, setCorreo] = useState('');
    const [contrasenia, setContrasenia] = useState('');
    const [telefono, setTelefono] = useState('');
    const [usuario, setUsuario] = useState('');

    function registro() {
        createUserWithEmailAndPassword(auth, correo, contrasenia)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);

            // Aquí puedes almacenar el usuario adicional en tu base de datos
            // Puedes usar Firebase Firestore o Realtime Database para esto

            navigation.navigate('Login'); // Cambié a navigate en lugar de replace como originalmente tenías
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorCode, errorMessage);
            Alert.alert('Error', errorMessage);
        });
    }

    return (
        <ImageBackground
            source={{ uri: "https://www.metroecuador.com.ec/resizer/v2/HY4EIT3MUVAADOPHSIRXIIU3EE.jpeg?auth=d2d9365bfff4f863ef86d6ffb972b8674c9078ee7bb35bc09c6d171891722641&width=800&height=1549" }} // Reemplaza con la URL de tu imagen de fondo
            style={styles.background}
        >
            <View style={styles.container}>
                <Text style={styles.title}>REGISTRO</Text>

                <TextInput
                    placeholder='Ingresa tu correo electrónico'
                    onChangeText={(texto) => setCorreo(texto)}
                    keyboardType='email-address'
                    value={correo}
                    style={styles.input}
                />
                <TextInput
                    placeholder='Ingresa contraseña'
                    onChangeText={(texto) => setContrasenia(texto)}
                    secureTextEntry
                    value={contrasenia}
                    style={styles.input}
                />
                <TextInput
                    placeholder='Ingresa tu teléfono'
                    onChangeText={(texto) => setTelefono(texto)}
                    keyboardType='phone-pad'
                    value={telefono}
                    style={styles.input}
                />
                <TextInput
                    placeholder='Ingresa tu usuario'
                    onChangeText={(texto) => setUsuario(texto)}
                    value={usuario}
                    style={styles.input}
                />

                <Button title='Registrar' onPress={() => registro()} color={"black"} />
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
});
