import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { colors } from '../theme/colors';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: colors.accent,
          tabBarInactiveTintColor: colors.muted,
          tabBarStyle: {
            backgroundColor: colors.surface,
            borderTopColor: colors.border,
            paddingTop: 7,
          },
          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: '700',
            marginBottom: 4,
          },
        }}
      >
        <Tabs.Screen name="index" options={{ title: 'Início' }} />
        <Tabs.Screen name="academica" options={{ title: 'Formação' }} />
        <Tabs.Screen name="profissional" options={{ title: 'Carreira' }} />
        <Tabs.Screen name="projetos" options={{ title: 'Projetos' }} />
        <Tabs.Screen name="sobre" options={{ title: 'Sobre' }} />
      </Tabs>
    </>
  );
}
