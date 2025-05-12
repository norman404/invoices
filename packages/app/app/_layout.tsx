
import { useFonts } from 'expo-font'
import { useEffect } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
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
    <GestureHandlerRootView>
      <ThemeProvider value={ DefaultTheme }>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
        </Stack>
        <StatusBar />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}