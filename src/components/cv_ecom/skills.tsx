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
          <Text style={styles.skillCategory}>E-commerce</Text>
          <Text style={styles.skillList}>Shopify, Magento, WooCommerce, multi-channel listing (eBay, Facebook Marketplace), B2B/wholesale flows</Text>
        </View>
        <View style={styles.skillRow}>
          <Text style={styles.skillCategory}>Marketing</Text>
          <Text style={styles.skillList}>SEO, SEM, Google Ads, Meta Ads, email marketing, landing page optimization, conversion rate optimization</Text>
        </View>
        <View style={styles.skillRow}>
          <Text style={styles.skillCategory}>Analytics</Text>
          <Text style={styles.skillList}>GA4 (certified), Google Tag Manager, conversion tracking, funnel analysis</Text>
        </View>
        <View style={styles.skillRow}>
          <Text style={styles.skillCategory}>Merchandising</Text>
          <Text style={styles.skillList}>Catalog management (15,000+ SKUs), variant configuration, product copywriting, product photography</Text>
        </View>
        <View style={styles.skillRow}>
          <Text style={styles.skillCategory}>Creative</Text>
          <Text style={styles.skillList}>Figma, Adobe Creative Suite (InDesign, Photoshop, Illustrator), graphic design</Text>
        </View>
        <View style={styles.skillRow}>
          <Text style={styles.skillCategory}>Operations</Text>
          <Text style={styles.skillList}>Inventory management, shipping logistics, returns, customer service, vendor management</Text>
        </View>
        <View style={styles.skillRow}>
          <Text style={styles.skillCategory}>Technical</Text>
          <Text style={styles.skillList}>HTML, CSS, JavaScript, Liquid (Shopify), full-stack development</Text>
        </View>
      </View>
    </View>
  )
}