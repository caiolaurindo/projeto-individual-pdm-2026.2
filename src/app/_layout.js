import { Tabs } from 'expo-router';
import { colors } from '../theme/colors';
import { ProfileProvider } from '../contexts/ProfileContext';
import TabIcon from '../components/TabIcon';

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
        <Tabs.Screen
          name="index"
          options={{ title: 'Início', tabBarIcon: ({ color }) => <TabIcon name="home" color={color} /> }}
        />
        <Tabs.Screen
          name="academica"
          options={{ title: 'Formação', tabBarIcon: ({ color }) => <TabIcon name="academic" color={color} /> }}
        />
        <Tabs.Screen
          name="profissional"
          options={{ title: 'Carreira', tabBarIcon: ({ color }) => <TabIcon name="professional" color={color} /> }}
        />
        <Tabs.Screen
          name="projetos"
          options={{ title: 'Projetos', tabBarIcon: ({ color }) => <TabIcon name="projects" color={color} /> }}
        />
        <Tabs.Screen
          name="sobre"
          options={{ title: 'Sobre', tabBarIcon: ({ color }) => <TabIcon name="about" color={color} /> }}
        />
      </Tabs>
    </ProfileProvider>
  );
}
