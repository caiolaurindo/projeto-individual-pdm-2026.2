import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import PageShell from '../components/PageShell';
import { colors } from '../theme/colors';

export default function HomeScreen() {
  return (
    <PageShell
      eyebrow="PORTFÓLIO DIGITAL"
      title="Uma visão da minha trajetória."
      description="Formação, experiências e projetos em um só lugar."
    >
      <View style={styles.hero}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>CV</Text>
        </View>
        <Text style={styles.heroEyebrow}>PERFIL PROFISSIONAL</Text>
        <Text style={styles.heroTitle}>Seu nome</Text>
        <Text style={styles.heroDescription}>
          Sua área de atuação e uma breve apresentação aparecerão aqui.
        </Text>
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

      <Text style={styles.note}>
        Este app apresentará informações carregadas do seu backend.
      </Text>
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
  note: {
    color: colors.muted,
    fontSize: 12,
    lineHeight: 18,
    textAlign: 'center',
  },
});
