import { View, Text, StyleSheet } from '@react-pdf/renderer'
import { prepressResume } from '@/data/prepress-resume'

const styles = StyleSheet.create({
  section: {
    marginBottom: 8,
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
  experienceItem: {
    marginBottom: 6,
  },
  experienceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  experienceTitle: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#000000',
  },
  experienceDates: {
    fontSize: 8,
    color: '#666666',
  },
  bulletPoint: {
    fontSize: 7.5,
    color: '#555555',
    lineHeight: 1.22,
    marginLeft: 10,
    marginBottom: 1,
  },
})

export function CVExperience() {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>EXPERIENCE</Text>
      {prepressResume.experience.map((exp) => (
        <View key={`${exp.company}-${exp.dates}`} style={styles.experienceItem} wrap={false}>
          <View style={styles.experienceHeader}>
            <View>
              <Text style={styles.experienceTitle}>
                {exp.title} · {exp.company}
              </Text>
            </View>
            <Text style={styles.experienceDates}>{exp.dates}</Text>
          </View>
          {exp.bullets.map((bullet) => (
            <Text key={bullet} style={styles.bulletPoint}>
              • {bullet}
            </Text>
          ))}
        </View>
      ))}
    </View>
  )
}
