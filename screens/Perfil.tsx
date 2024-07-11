import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';

export default function Perfil() {
  // Datos simulados de tipos de cuenta
  const cuentas = [
    { id: '1', tipo: 'Cuenta Principal' },
    { id: '2', tipo: 'Cuenta de Trabajo' },
    { id: '3', tipo: 'Cuenta de Estudios' },
    { id: '4', tipo: 'Cuenta de Ahorros' },
    { id: '5', tipo: 'Cuenta de Inversiones' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BANCO PICHINCHA</Text>
      <Text style={styles.userInfo}>Usuario: Aaron</Text>
      <Text style={styles.userInfo}>Célular: 0963813460</Text>

      <FlatList
        horizontal={true}
        data={cuentas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cuentaContainer}>
            <Text style={styles.cuentaText}>{item.tipo}</Text>
          </View>
        )}
        contentContainerStyle={styles.scrollContent}
        showsHorizontalScrollIndicator={false}
      />

      <Text style={styles.textoAdicional}>
        Aquí puedes ver tus diferentes tipos de cuenta.
      </Text>

      <View style={styles.buttonsContainer}>
        <Button title="Transferir Dinero" onPress={() => {}} />
        <Button title="Pagar Servicios" onPress={() => {}} />
        <Button title="Pago Tarjetas" onPress={() => {}} />
        <Button title="Todas las operaciones" onPress={() => {}} />
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
  userInfo: {
    fontSize: 16,
    marginBottom: 10,
  },
  scrollContent: {
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  cuentaContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 10,
  },
  cuentaText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  textoAdicional: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
  },
  buttonsContainer: {
    marginTop: 20,
  },
});
