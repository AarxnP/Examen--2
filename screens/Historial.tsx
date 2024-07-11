// Historial.js

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { getDatabase, ref, onValue } from 'firebase/database';

export default function Historial() {
  const [operaciones, setOperaciones] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const operacionesRef = ref(db, 'transacciones');
  
    // Escuchar los cambios en la base de datos
    onValue(operacionesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const operacionesArray = Object.values(data); // Convertir el objeto a un array de operaciones
        setOperaciones(operacionesArray.reverse()); // Mostrar las operaciones más recientes primero
      } else {
        setOperaciones([]);
      }
    });
  
    // Limpiar el listener cuando se desmonte el componente
    return () => {
      // Detener la escucha de cambios
    };
  }, []);

  const renderOperacion = ( item :any) => (
    <View style={styles.operacionContainer}>
      <Text>ID: {item.idOperacion}</Text>
      <Text>Monto: {item.monto}</Text>
      <Text>Tipo: {item.tipoOperacion}</Text>
      <Text>Comentario: {item.comentario}</Text>
      <Text>Fecha: {new Date(item.timestamp).toLocaleString()}</Text>
      <View style={styles.separator} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historial de Operaciones</Text>
      <FlatList
        data={operaciones}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderOperacion}
        contentContainerStyle={styles.listContainer}
      />
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
  listContainer: {
    flexGrow: 1,
    width: '100%',
  },
  operacionContainer: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 5,
  },
});
