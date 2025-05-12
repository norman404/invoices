import { View, Text, StyleSheet } from 'react-native'

export default function InvoicesListScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Facturas</Text>
      <Text style={styles.text}>
        Aquí se mostrará el historial de tus facturas generadas.
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
