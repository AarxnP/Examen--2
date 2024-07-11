import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { getDatabase, push, ref } from 'firebase/database';

export default function Operaciones( navigation :any) {
  const [idOperacion, setIdOperacion] = useState('');
  const [monto, setMonto] = useState('');
  const [tipoOperacion, setTipoOperacion] = useState('');
  const [comentario, setComentario] = useState('');

  const handleGuardarOperacion = () => {
    // Validar que todos los campos estén llenos
    if (!idOperacion || !monto || !tipoOperacion) {
      Alert.alert('Error', 'Por favor completa todos los campos.');
      return;
    }

    // Validar que el monto no sea negativo
    if (parseFloat(monto) < 0) {
      Alert.alert('Error', 'El monto no puede ser negativo.');
      return;
    }

    // Mostrar mensaje si el monto es mayor a $500
    if (parseFloat(monto) > 500) {
      Alert.alert(
        'Confirmación',
        'El monto es mayor a $500. ¿Desea continuar con la transacción?',
        [
          {
            text: 'Cancelar',
            style: 'cancel',
          },
          {
            text: 'Continuar',
            onPress: () => guardarOperacion(),
          },
        ]
      );
    } else {
      guardarOperacion();
    }
  };

  const guardarOperacion = () => {
    // Referencia a la base de datos de Firebase
    const db = getDatabase();
    const operacionesRef = ref(db, 'transacciones');

    // Objeto con los datos de la operación a guardar
    const newOperation = {
      idOperacion: idOperacion.trim(), // Evitar espacios en blanco al inicio y final
      monto: parseFloat(monto),
      tipoOperacion: tipoOperacion.trim(),
      comentario: comentario.trim() || 'Sin comentario', // Si no hay comentario, se establece como 'Sin comentario'
      timestamp: Date.now(), // Opcional: agregar una marca de tiempo
    };

    // Guardar la operación en la base de datos
    push(operacionesRef, newOperation)
      .then(() => {
        Alert.alert('Éxito', 'La operación se realizó con éxito.');

        // Limpiar los campos después de guardar
        setIdOperacion('');
        setMonto('');
        setTipoOperacion('');
        setComentario('');
      })
      .catch((error) => {
        console.error('Error al guardar la operación: ', error);
        Alert.alert(
          'Error',
          'Ocurrió un error al guardar la operación. Por favor, intenta de nuevo.'
        );
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro de Operación</Text>
      <TextInput
        style={styles.input}
        placeholder="ID Operación"
        value={idOperacion}
        onChangeText={setIdOperacion}
      />
      <TextInput
        style={styles.input}
        placeholder="Monto"
        value={monto}
        onChangeText={setMonto}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Tipo de operación"
        value={tipoOperacion}
        onChangeText={setTipoOperacion}
      />
      <TextInput
        style={[styles.input, { height: 80 }]}
        placeholder="Comentario (opcional)"
        value={comentario}
        onChangeText={setComentario}
        multiline={true}
        numberOfLines={4}
      />
      <View>
        <Button title="Ejecutar" onPress={handleGuardarOperacion} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '100%',
  },
});
