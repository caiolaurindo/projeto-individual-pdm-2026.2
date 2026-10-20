import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import PageShell from '../components/PageShell';
import ProfileStatus from '../components/ProfileStatus';
import { useProfile } from '../contexts/ProfileContext';
import { colors } from '../theme/colors';

export default function HomeScreen() {
  const { profile, loading, error, reload } = useProfile();

  return (
    <PageShell
      eyebrow="PORTFÓLIO DIGITAL"
      title="Uma visão da minha trajetória."
      description="Formação, experiências e projetos em um só lugar."
    >
      {loading || error ? (
        <ProfileStatus loading={loading} error={error} reload={reload} />
      ) : (
        <>
          <View style={styles.hero}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>CL</Text>
            </View>
            <Text style={styles.heroEyebrow}>DESENVOLVEDOR FULL STACK</Text>
            <Text style={styles.heroTitle}>{profile.nome}</Text>
            <Text style={styles.heroDescription}>{profile.resumo}</Text>
            <Text style={styles.contact}>{profile.email}</Text>
          </View>

          <View style={styles.links}>
            <Link href="/projetos" asChild>
              <Pressable style={styles.primaryLink}>
                <Text style={styles.primaryLinkText}>Explorar projetos</Text>
                <Text style={styles.arrow}>→</Text>
              </Pressable>
            </Link>
            <Link href="/sobre" asChild>
              <Pressable style={styles.secondaryLink}>
                <Text style={styles.secondaryLinkText}>Conhecer o perfil</Text>
              </Pressable>
            </Link>
          </View>
        </>
      )}
    </PageShell>
  );
}

const styles = StyleSheet.create({
  hero: {
    padding: 22,
    borderRadius: 24,
    backgroundColor: colors.hero,
    gap: 10,
  },
  avatar: {
    width: 54,
    height: 54,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
    backgroundColor: '#2C5A60',
  },
  avatarText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '800',
  },
  heroEyebrow: {
    color: '#A6DCCE',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.2,
  },
  heroTitle: {
    color: colors.white,
    fontSize: 27,
    fontWeight: '800',
  },
  heroDescription: {
    color: '#D5E5E2',
    fontSize: 14,
    lineHeight: 21,
  },
  contact: {
    marginTop: 3,
    color: '#A6DCCE',
    fontSize: 13,
    fontWeight: '600',
  },
  links: {
    gap: 10,
  },
  primaryLink: {
    minHeight: 54,
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 16,
    backgroundColor: colors.accent,
  },
  primaryLinkText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '700',
  },
  arrow: {
    color: colors.white,
    fontSize: 22,
  },
  secondaryLink: {
    minHeight: 52,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    backgroundColor: colors.surface,
  },
  secondaryLinkText: {
    color: colors.ink,
    fontSize: 14,
    fontWeight: '700',
  },
});
