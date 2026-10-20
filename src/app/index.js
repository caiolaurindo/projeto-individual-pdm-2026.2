import { Link } from 'expo-router';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import ProfileStatus from '../components/ProfileStatus';
import { useProfile } from '../contexts/ProfileContext';
import { colors } from '../theme/colors';

// Salve a foto enviada em assets/caio-profile.jpg e troque null por:
// require('../../assets/caio-profile.jpg')
const profilePhoto = null;

export default function HomeScreen() {
  const { profile, loading, error, reload } = useProfile();
  const currentRole = profile?.experiencias?.find((item) => item.emAndamento)?.cargo;
  const location = profile?.experiencias?.find((item) => item.emAndamento)?.local;

  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.topLine}>
          <Text style={styles.kicker}>PORTFÓLIO</Text>
          {location ? <Text style={styles.location}>{location.toUpperCase()}</Text> : null}
        </View>

        {loading || error ? (
          <ProfileStatus loading={loading} error={error} reload={reload} />
        ) : (
          <>
            <View style={styles.photoFrame}>
              {profilePhoto ? (
                <Image
                  source={profilePhoto}
                  resizeMode="cover"
                  accessibilityLabel={`Foto de ${profile.nome}`}
                  style={styles.photo}
                />
              ) : (
                <View style={styles.photoPlaceholder}>
                  <Text style={styles.initials}>
                    {profile.nome
                      .split(' ')
                      .map((part) => part[0])
                      .slice(0, 2)
                      .join('')}
                  </Text>
                  <Text style={styles.photoHint}>FOTO DE PERFIL</Text>
                </View>
              )}
            </View>

            <View style={styles.intro}>
              <Text style={styles.role}>{currentRole || 'Desenvolvedor Full Stack'}</Text>
              <Text style={styles.name}>{profile.nome}</Text>
              <Text style={styles.summary}>{profile.resumo}</Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.navigation}>
              <Link href="/projetos" asChild>
                <Pressable style={styles.navigationLink}>
                  <View>
                    <Text style={styles.linkIndex}>01 / PORTFÓLIO</Text>
                    <Text style={styles.linkTitle}>Projetos</Text>
                  </View>
                  <Text style={styles.arrow}>↗</Text>
                </Pressable>
              </Link>
              <Link href="/profissional" asChild>
                <Pressable style={styles.navigationLink}>
                  <View>
                    <Text style={styles.linkIndex}>02 / TRAJETÓRIA</Text>
                    <Text style={styles.linkTitle}>Experiência profissional</Text>
                  </View>
                  <Text style={styles.arrow}>↗</Text>
                </Pressable>
              </Link>
            </View>

            <Text style={styles.email}>{profile.email}</Text>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.homeBackground,
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 14,
    paddingBottom: 30,
    gap: 22,
  },
  topLine: {
    minHeight: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  kicker: {
    color: colors.homeMuted,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 2,
  },
  location: {
    color: colors.homeMuted,
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 1,
  },
  photoFrame: {
    width: '100%',
    height: 250,
    overflow: 'hidden',
    borderRadius: 18,
    backgroundColor: colors.homeSurface,
  },
  photo: {
    width: '100%',
    height: '100%',
  },
  photoPlaceholder: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderWidth: 1,
    borderColor: colors.homeBorder,
    borderRadius: 18,
  },
  initials: {
    color: colors.homeAccent,
    fontSize: 56,
    fontWeight: '600',
    letterSpacing: -2,
  },
  photoHint: {
    color: colors.homeMuted,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1.7,
  },
  intro: {
    gap: 9,
  },
  role: {
    color: colors.homeAccent,
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.3,
  },
  name: {
    color: colors.homeText,
    fontSize: 34,
    fontWeight: '700',
    letterSpacing: -1,
  },
  summary: {
    marginTop: 2,
    color: colors.homeMuted,
    fontSize: 14,
    lineHeight: 22,
  },
  divider: {
    height: 1,
    backgroundColor: colors.homeBorder,
  },
  navigation: {
    gap: 2,
  },
  navigationLink: {
    minHeight: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: colors.homeBorder,
  },
  linkIndex: {
    color: colors.homeMuted,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1.2,
  },
  linkTitle: {
    marginTop: 5,
    color: colors.homeText,
    fontSize: 16,
    fontWeight: '600',
  },
  arrow: {
    color: colors.homeAccent,
    fontSize: 20,
  },
  email: {
    color: colors.homeMuted,
    fontSize: 12,
  },
});
