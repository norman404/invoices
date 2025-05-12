import { Redirect, Stack } from 'expo-router'
import { useEffect } from 'react'
import { ActivityIndicator, View } from 'react-native'
import { useAuthStore } from '@/src/auth/store/useAuthStore'

const HomeLayout = () => {
  const { status, checkStatus } = useAuthStore()

  useEffect(() => {
    checkStatus()
  }, [])

  if (status === 'checking') {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator />
      </View>
    )
  }

  if (status === 'unauthenticated') {
    return <Redirect href="/auth/login" />
  }

  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name="certificates" options={{ title: 'Certificados' }} />
      <Stack.Screen name="profile" options={{ title: 'Mi Información Fiscal' }} />
      <Stack.Screen name="create" options={{ title: 'Generar Factura' }} />
      <Stack.Screen name="consult" options={{ title: 'Consultar Factura' }} />
      <Stack.Screen name="filter" options={{ title: 'Filtrar por RFC' }} />
      <Stack.Screen name="index" options={{ title: 'Gateway de Facturación' }} />
    </Stack>
  )
}

export default HomeLayout
