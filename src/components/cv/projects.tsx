import { View, Text, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  section: {
    flexDirection: 'row',
    marginBottom: 24,
    gap: 15,
  },
  leftColumn: {
    width: '20%',
  },
  rightColumn: {
    width: '80%',
    flex: 1,
  },
  sectionTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#666',
    textTransform: 'lowercase',
  },
  reference: {
    fontSize: 10,
    color: '#333',
    fontStyle: 'italic',
  },
})

export function CVReferences() {
  return (
    <View style={styles.section}>
      <View style={styles.leftColumn}>
        <Text style={styles.sectionTitle}>references</Text>
      </View>
      <View style={styles.rightColumn}>
        <Text style={styles.reference}>References available upon request</Text>
      </View>
    </View>
  )
}