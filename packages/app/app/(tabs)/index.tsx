// HomeScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const invoicesMock = [
  { id: '1', rfc: 'XAXX010101000', total: '$1,500.00', date: '2024-09-10' },
  { id: '2', rfc: 'MEX920304ABC', total: '$2,300.00', date: '2024-09-12' },
  { id: '3', rfc: 'AAA010101AAA', total: '$500.00', date: '2024-09-15' },
];

const HomeScreen = () => {
  const [search, setSearch] = useState('');

  const filteredInvoices = invoicesMock.filter(invoice =>
    invoice.rfc.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.header}>
        <Text style={styles.greeting}>👋 Hola Norman</Text>
        <Text style={styles.subtitle}>Generando facturas desde hace 716 días</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <View style={styles.actionWrapper}>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="add-circle-outline" size={30} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.actionLabel}>Agregar</Text>
        </View>

        <View style={styles.actionWrapper}>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="document-text-outline" size={30} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.actionLabel}>Crear</Text>
        </View>
      </View>

      <View style={styles.sectionTitle}>
        <Text style={styles.sectionText}>Últimas facturas</Text>
      </View>

      <TextInput
        style={styles.searchInput}
        placeholder="Buscar por RFC..."
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={filteredInvoices}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.invoiceCard}>
            <Text style={styles.invoiceText}>RFC: {item.rfc}</Text>
            <Text style={styles.invoiceText}>Total: {item.total}</Text>
            <Text style={styles.invoiceText}>Fecha: {item.date}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20
  },
  greeting: {
    fontSize: 22,
    fontWeight: '600',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  actionWrapper: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#0A66C2',
    borderRadius: 50,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionLabel: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: '500',
  },
  sectionTitle: {
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 18,
    fontWeight: '600',
  },
  invoiceCard: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  invoiceText: {
    fontSize: 14,
    marginBottom: 3,
  },
  searchInput: {
    marginTop: 10,
    padding: 12,
    backgroundColor: '#eee',
    borderRadius: 10,
    marginBottom: 20,
  },
});
