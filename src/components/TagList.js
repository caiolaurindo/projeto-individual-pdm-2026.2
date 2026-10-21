import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';

export default function TagList({ items }) {
  if (!items?.length) return null;

  return (
    <View style={styles.container}>
      {items.map((item) => (
        <View key={item} style={styles.tag}>
          <Text style={styles.text}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    paddingHorizontal: 9,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    backgroundColor: colors.accentSoft,
  },
  text: {
    color: colors.accent,
    fontSize: 12,
    fontWeight: '700',
  },
});
