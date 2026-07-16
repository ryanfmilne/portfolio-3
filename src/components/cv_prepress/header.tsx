import { View, Text, StyleSheet } from '@react-pdf/renderer'
import { prepressResume } from '@/data/prepress-resume'

const styles = StyleSheet.create({
  header: {
    marginBottom: 10,
  },
  nameSection: {
    alignItems: 'flex-start',
    marginBottom: 6,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 2,
  },
  title: {
    fontSize: 12,
    color: '#333333',
    marginBottom: 2,
  },
  contactInfo: {
    fontSize: 9,
    color: '#555555',
    marginBottom: 8,
  },
  summary: {
    fontSize: 8.5,
    lineHeight: 1.32,
    color: '#333333',
    textAlign: 'justify',
  },
})

export function CVHeader() {
  return (
    <View style={styles.header}>
      <View style={styles.nameSection}>
        <Text style={styles.name}>{prepressResume.header.name}</Text>
        <Text style={styles.title}>{prepressResume.header.title}</Text>
        <Text style={styles.contactInfo}>{prepressResume.header.contact}</Text>
      </View>
      <Text style={styles.summary}>{prepressResume.summary}</Text>
    </View>
  )
}
