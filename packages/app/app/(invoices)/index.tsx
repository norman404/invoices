import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

enum ScreenPaths {
  PROFILE = '/(invoices)/profile',
  CERTIFICATES = '/(invoices)/certificates',
  CREATE = '/(invoices)/create',
  CONSULT = '/(invoices)/consult',
  FILTER = '/(invoices)/filter',
  LOGIN = '/auth/login'
}

const options = [
  { label: 'Mi Información Fiscal', path: ScreenPaths.PROFILE },
  { label: 'Cargar CSD', path: ScreenPaths.CERTIFICATES },
  { label: 'Generar Factura', path: ScreenPaths.CREATE },
  { label: 'Ver Facturas', path: ScreenPaths.CONSULT },
  { label: 'Filtrar por RFC', path: ScreenPaths.FILTER },
  { label: 'Iniciar sesión', path: ScreenPaths.LOGIN }
]

const HomeScreen = () => {
  const goTo = (path: ScreenPaths) => router.push(path)
  const logout = () => router.replace(ScreenPaths.LOGIN)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gateway de Facturación</Text>

      {options.map((opt, index) => (
        <Pressable key={index} onPress={() => goTo(opt.path)} style={styles.link}>
          <Text>{opt.label}</Text>
        </Pressable>
      ))}

      <Pressable onPress={logout} style={styles.link}>
        <Text>Cerrar sesión</Text>
      </Pressable>
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
    marginBottom: 32,
    textAlign: 'center'
  },
  link: {
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ccc'
  }
})

export default HomeScreen
