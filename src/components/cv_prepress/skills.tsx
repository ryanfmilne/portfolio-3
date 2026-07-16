import { View, Text, StyleSheet } from '@react-pdf/renderer'
import { prepressResume } from '@/data/prepress-resume'

const styles = StyleSheet.create({
  section: {
    marginBottom: 9,
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
  skillsGrid: {
    flexDirection: 'column',
    gap: 2,
  },
  skillRow: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  skillCategory: {
    fontSize: 8,
    fontWeight: 'bold',
    color: '#333333',
    width: '24%',
  },
  skillList: {
    fontSize: 8,
    color: '#555555',
    width: '76%',
    lineHeight: 1.25,
  },
})

export function CVSkills() {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>SKILLS</Text>
      <View style={styles.skillsGrid}>
        {prepressResume.skills.map((skill) => (
          <View key={skill.category} style={styles.skillRow}>
            <Text style={styles.skillCategory}>{skill.category}</Text>
            <Text style={styles.skillList}>{skill.items}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}
