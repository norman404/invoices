import { View, Text, TextInput, Pressable, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import { useAuthStore } from '@/src/auth/store/useAuthStore'
import { router } from 'expo-router'

const App = () => {
  const { login } = useAuthStore()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    if (!email || !password) {
     Alert.alert(
        'Login failed',
        'Please enter your email and password.',
        [{ text: 'OK' }]
      )
      setEmail('')
      setPassword('')
      console.log('Login failed')
      return
    }
    const success = await login(email, password)
    if (success) {
      router.navigate('/(invoices)')
      return
    } else {
      Alert.alert(
        'Login failed',
        'Please check your email and password.',
        [{ text: 'OK' }]
      )
      setEmail('')
      setPassword('')
      console.log('Login failed')
      return
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Enter</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    paddingHorizontal: 24
  },
  title: {
    fontSize: 28,
    color: '#fff',
    marginBottom: 32,
    textAlign: 'center'
  },
  input: {
    backgroundColor: '#1e1e1e',
    color: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#333'
  },
  button: {
    backgroundColor: '#333',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600'
  }
})

export default App