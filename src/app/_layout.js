import { Tabs } from 'expo-router';
import { colors } from '../theme/colors';
import { ProfileProvider } from '../contexts/ProfileContext';

export default function RootLayout() {
  return (
    <ProfileProvider>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: colors.homeText,
          tabBarInactiveTintColor: colors.homeMuted,
          tabBarStyle: {
            backgroundColor: colors.homeBackground,
            borderTopColor: colors.homeBorder,
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
    </ProfileProvider>
  );
}
