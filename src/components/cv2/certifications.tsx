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
  certItem: {
    marginBottom: 8,
  },
  certName: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 2,
  },
  certDetails: {
    fontSize: 9,
    color: '#666',
  },
})

export function CVCertifications() {
  return (
    <View style={styles.section}>
      <View style={styles.leftColumn}>
        <Text style={styles.sectionTitle}>certifications</Text>
      </View>
      <View style={styles.rightColumn}>
        <View style={styles.certItem}>
          <Text style={styles.certDetails}>Get Started using Google Analytics (GA4) - Google, October 2025</Text>
        </View>
      </View>
    </View>
  )
}
