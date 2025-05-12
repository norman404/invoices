import { View, Text, StyleSheet } from 'react-native'

export default function CertificatesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cargar Certificados</Text>
      <Text style={styles.text}>
        Aquí podrás subir tu archivo .cer y .key con tu contraseña.
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
