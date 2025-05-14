import { Redirect, Stack, Tabs } from 'expo-router'
import { useEffect } from 'react'
import { ActivityIndicator, Platform, View } from 'react-native'
import { useAuthStore } from '@/src/auth/store/useAuthStore'
import { HapticTab } from '@/components/HapticTab'
import TapBarBackground from '@/components/ui/TabBarBackground'
import { IconSymbol } from '@/components/ui/IconSymbol'

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
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#673ab7',
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TapBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        })
      }}>
        <Tabs.Screen
          name="index" 
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
            }} />
        <Tabs.Screen
          name="info"
          options={{
            title: 'Info',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="info" color={color} />,
          }} />
        <Tabs.Screen
          name='profile'
          options={{
            title: 'Profile',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="chevron.right" color={color} />,
          }} />
      </Tabs>

  )
}

export default HomeLayout
