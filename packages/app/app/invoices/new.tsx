import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';

const NewInvoiceScreen = () => {
  const router = useRouter();

  const [rfc, setRfc] = useState('');
  const [total, setTotal] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = () => {
    if (!rfc || !total || !date) {
      Alert.alert('Error', 'Por favor completa todos los campos');
      return;
    }

    console.log({ rfc, total, date });

    Alert.alert('Éxito', 'Factura creada correctamente');
    router.back();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Nueva Factura</Text>

        <TextInput
          style={styles.input}
          placeholder="RFC"
          value={rfc}
          onChangeText={setRfc}
          autoCapitalize="characters"
        />
        <TextInput
          style={styles.input}
          placeholder="Total (ej: 1500.00)"
          value={total}
          onChangeText={setTotal}
          keyboardType="decimal-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Fecha (YYYY-MM-DD)"
          value={date}
          onChangeText={setDate}
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Guardar Factura</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewInvoiceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 50,
  },
  scrollContent: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
  },
  button: {
    backgroundColor: '#0A66C2',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});