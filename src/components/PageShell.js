import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { colors } from '../theme/colors';

export default function PageShell({ eyebrow, title, description, children }) {
  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.heading}>
          <Text style={styles.eyebrow}>{eyebrow}</Text>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}

export function InfoCard({ label, title, description, children }) {
  return (
    <View style={styles.card}>
      {label ? <Text style={styles.cardLabel}>{label}</Text> : null}
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardDescription}>{description}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 14,
    paddingBottom: 30,
    gap: 18,
  },
  heading: {
    gap: 9,
  },
  eyebrow: {
    color: colors.accent,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 2,
  },
  title: {
    color: colors.ink,
    fontSize: 32,
    fontWeight: '700',
    letterSpacing: -0.8,
  },
  description: {
    color: colors.muted,
    fontSize: 15,
    lineHeight: 22,
  },
  card: {
    padding: 18,
    borderRadius: 16,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    gap: 8,
  },
  cardLabel: {
    color: colors.accent,
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.1,
    textTransform: 'uppercase',
  },
  cardTitle: {
    color: colors.ink,
    fontSize: 17,
    fontWeight: '700',
  },
  cardDescription: {
    color: colors.muted,
    fontSize: 14,
    lineHeight: 21,
  },
});
