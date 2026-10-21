import { StyleSheet, Text, View } from 'react-native';

export default function TabIcon({ name, color }) {
  if (name === 'home') {
    return (
      <View style={styles.icon}>
        <View style={[styles.roofLeft, { backgroundColor: color }]} />
        <View style={[styles.roofRight, { backgroundColor: color }]} />
        <View style={[styles.houseBody, { borderColor: color }]} />
        <View style={[styles.door, { borderColor: color }]} />
      </View>
    );
  }

  if (name === 'academic') {
    return (
      <View style={styles.icon}>
        <View style={[styles.bookPageLeft, { borderColor: color }]} />
        <View style={[styles.bookPageRight, { borderColor: color }]} />
      </View>
    );
  }

  if (name === 'professional') {
    return (
      <View style={styles.icon}>
        <View style={[styles.caseHandle, { borderColor: color }]} />
        <View style={[styles.caseBody, { borderColor: color }]} />
        <View style={[styles.caseDivider, { backgroundColor: color }]} />
      </View>
    );
  }

  if (name === 'projects') {
    return (
      <View style={styles.icon}>
        <View style={[styles.projectBack, { borderColor: color }]} />
        <View style={[styles.projectFront, { borderColor: color }]}>
          <View style={[styles.projectLine, { backgroundColor: color }]} />
          <View style={[styles.projectLine, styles.projectLineShort, { backgroundColor: color }]} />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.icon}>
      <View style={[styles.infoCircle, { borderColor: color }]}>
        <Text style={[styles.infoLetter, { color }]}>i</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  roofLeft: {
    position: 'absolute',
    top: 7,
    left: 2,
    width: 13,
    height: 2,
    borderRadius: 2,
    transform: [{ rotate: '-43deg' }],
  },
  roofRight: {
    position: 'absolute',
    top: 7,
    right: 2,
    width: 13,
    height: 2,
    borderRadius: 2,
    transform: [{ rotate: '43deg' }],
  },
  houseBody: {
    position: 'absolute',
    top: 10,
    left: 5,
    width: 14,
    height: 11,
    borderWidth: 1.8,
    borderTopWidth: 0,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
  },
  door: {
    position: 'absolute',
    bottom: 3,
    left: 10,
    width: 4,
    height: 7,
    borderWidth: 1.5,
    borderBottomWidth: 0,
  },
  bookPageLeft: {
    position: 'absolute',
    top: 5,
    left: 3,
    width: 9,
    height: 14,
    borderWidth: 1.8,
    borderRightWidth: 0,
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3,
  },
  bookPageRight: {
    position: 'absolute',
    top: 5,
    right: 3,
    width: 9,
    height: 14,
    borderWidth: 1.8,
    borderLeftWidth: 0,
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
  },
  caseHandle: {
    position: 'absolute',
    top: 4,
    width: 9,
    height: 6,
    borderWidth: 1.8,
    borderBottomWidth: 0,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
  },
  caseBody: {
    position: 'absolute',
    top: 9,
    left: 3,
    width: 18,
    height: 12,
    borderWidth: 1.8,
    borderRadius: 3,
  },
  caseDivider: {
    position: 'absolute',
    top: 14,
    left: 4,
    width: 16,
    height: 1.5,
  },
  projectBack: {
    position: 'absolute',
    top: 3,
    left: 8,
    width: 12,
    height: 15,
    borderWidth: 1.5,
    borderRadius: 2,
  },
  projectFront: {
    position: 'absolute',
    top: 6,
    left: 4,
    width: 14,
    height: 15,
    paddingTop: 4,
    paddingLeft: 3,
    gap: 3,
    borderWidth: 1.8,
    borderRadius: 2,
    backgroundColor: '#0C1118',
  },
  projectLine: {
    width: 8,
    height: 1.5,
  },
  projectLineShort: {
    width: 5,
  },
  infoCircle: {
    width: 19,
    height: 19,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.8,
    borderRadius: 10,
  },
  infoLetter: {
    marginTop: -1,
    fontSize: 13,
    fontWeight: '700',
  },
});
