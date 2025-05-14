
import { useFonts } from 'expo-font'
import { useEffect } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router'
import { StatusBar, Text } from 'react-native';


SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  useEffect(() => {
    if (!loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);
  if (!loaded) {
    return null;
  }
  return (
      <ThemeProvider value={ DefaultTheme }>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" options={{ title: 'No encontrado' }} />
        </Stack>
        <StatusBar />
      </ThemeProvider>
  );
}