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
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  skillPill: {
    border: '1 solid #d0d0d0',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingTop: 2,
    paddingBottom: 3,
    marginTop: 1,
    marginBottom: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  skillText: {
    fontSize: 9,
    color: '#333',
    lineHeight: 1,
  },
})

export function CVSkills() {
  const skills = [
    'React',
    'Next.js',
    'Remix',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'Express',
    'Supabase',
    'PostgreSQL',
    'MySQL',
    'Tailwind CSS',
    'REST APIs',
    'Git',
    'HTML5',
    'CSS3',
    'Figma',
    'shadcn/ui',
    'Shopify',
    'Liquid',
    'GraphQL',
    'Magento'
  ]

  return (
    <View style={styles.section}>
      <View style={styles.leftColumn}>
        <Text style={styles.sectionTitle}>skills</Text>
      </View>
      <View style={styles.rightColumn}>
        <View style={styles.skillsContainer}>
          {skills.map((skill, index) => (
            <View key={index} style={styles.skillPill}>
              <Text style={styles.skillText}>{skill}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  )
}