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
    width: '20%',
  },
  skillList: {
    fontSize: 8,
    color: '#555555',
    width: '80%',
    lineHeight: 1.3,
  },
})

export function CVSkills() {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>SKILLS</Text>
      <View style={styles.skillsGrid}>
        <View style={styles.skillRow}>
          <Text style={styles.skillCategory}>Frontend</Text>
          <Text style={styles.skillList}>React, Next.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS, shadcn/ui</Text>
        </View>
        <View style={styles.skillRow}>
          <Text style={styles.skillCategory}>Backend</Text>
          <Text style={styles.skillList}>Node.js, Supabase, PostgreSQL, REST APIs, GraphQL, authentication, row-level security</Text>
        </View>
        <View style={styles.skillRow}>
          <Text style={styles.skillCategory}>E-commerce</Text>
          <Text style={styles.skillList}>Shopify, Liquid, Storefront API, Stripe, multi-tenant architecture, Magento, WooCommerce</Text>
        </View>
        <View style={styles.skillRow}>
          <Text style={styles.skillCategory}>Infrastructure</Text>
          <Text style={styles.skillList}>Vercel, Git, CI/CD, Stripe, environment management</Text>
        </View>
        <View style={styles.skillRow}>
          <Text style={styles.skillCategory}>Design</Text>
          <Text style={styles.skillList}>Figma, UI/UX, responsive design, Adobe Creative Suite</Text>
        </View>
        <View style={styles.skillRow}>
          <Text style={styles.skillCategory}>Tools</Text>
          <Text style={styles.skillList}>VS Code, Claude Code, Codex CLI. Daily AI-assisted production workflow.</Text>
        </View>
      </View>
    </View>
  )
}