import { View, Text, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  section: {
    marginBottom: 15,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
    textTransform: 'uppercase',
    borderBottom: '0.5 solid #000',
    paddingBottom: 2,
  },
  text: {
    fontSize: 10,
    lineHeight: 1.4,
    marginBottom: 6,
  },
})

export function CVSummary() {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>Professional Summary</Text>
      <Text style={styles.text}>
        Full-stack web developer with 14+ years of e-commerce and web development experience.
        I specialize in building scalable e-commerce platforms and modern web applications.
      </Text>
      <Text style={styles.text}>
        From founding and scaling an 11-year e-commerce business to developing custom Shopify solutions for brands,
        I bring a unique combination of technical expertise and business understanding.
        Currently focused on modern JavaScript frameworks and full-stack development.
      </Text>
    </View>
  )
}