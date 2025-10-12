import { View, Text, StyleSheet } from '@react-pdf/renderer'
import { EDUCATION } from '@/data'

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
  educationInfo: {
    marginBottom: 5,
  },
  degree: {
    fontSize: 11,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  dates: {
    fontSize: 9,
    color: '#666',
    marginBottom: 6,
  },
  bulletPoint: {
    flexDirection: 'row',
    marginBottom: 3,
  },
  bullet: {
    fontSize: 10,
    marginRight: 8,
    color: '#333',
  },
  additional: {
    fontSize: 10,
    lineHeight: 1.5,
    color: '#333',
    flex: 1,
  },
})

export function CVEducation() {
  return (
    <View style={styles.section}>
      <View style={styles.leftColumn}>
        <Text style={styles.sectionTitle}>education</Text>
      </View>
      <View style={styles.rightColumn}>
        <View style={styles.educationInfo}>
          <Text style={styles.degree}>{EDUCATION.degree}, {EDUCATION.school}</Text>
          <Text style={styles.dates}>{EDUCATION.year}</Text>
          {EDUCATION.additional && EDUCATION.additional.map((item, index) => (
            <View key={index} style={styles.bulletPoint}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.additional}>{item}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  )
}