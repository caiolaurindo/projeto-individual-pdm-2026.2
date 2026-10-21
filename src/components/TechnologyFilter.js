import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';

export default function TechnologyFilter({ technologies, selected, onSelect }) {
  const options = ['Todas', ...technologies];

  return (
    <View style={styles.container}>
      {options.map((technology) => {
        const isSelected = technology === selected;

        return (
          <Pressable
            key={technology}
            accessibilityRole="button"
            accessibilityState={{ selected: isSelected }}
            onPress={() => onSelect(technology)}
            style={[styles.option, isSelected && styles.selectedOption]}
          >
            <Text style={[styles.label, isSelected && styles.selectedLabel]}>
              {technology}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  option: {
    minHeight: 36,
    justifyContent: 'center',
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 9,
    backgroundColor: colors.surface,
  },
  selectedOption: {
    borderColor: colors.accent,
    backgroundColor: colors.accent,
  },
  label: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: '600',
  },
  selectedLabel: {
    color: colors.background,
  },
});
