import { View, Text, StyleSheet } from 'react-native'

export default function FilterByRfcScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filtrar por RFC</Text>
      <Text style={styles.text}>
        Aquí podrás buscar facturas por RFC de tu cliente.
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12
  },
  text: {
    fontSize: 16
  }
})
