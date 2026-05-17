import { View, Text, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  section: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingBottom: 3,
  },
  certificationItem: {
    fontSize: 8,
    color: '#555555',
    lineHeight: 1.3,
  },
})

export function CVCertifications() {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>CERTIFICATIONS</Text>
      <Text style={styles.certificationItem}>
        Get Started using Google Analytics (GA4), Google, October 2025
      </Text>
    </View>
  )
}