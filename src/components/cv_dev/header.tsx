import { View, Text, StyleSheet } from '@react-pdf/renderer'
import { data } from '@/constants'

const styles = StyleSheet.create({
  header: {
    marginBottom: 12,
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
    fontSize: 9,
    lineHeight: 1.4,
    color: '#333333',
    textAlign: 'justify',
    width: '90%',
  },
})

export function CVHeader() {
  const { links } = data
  const email = links.find(link => link.title === 'Email')?.url.replace('mailto:', '')

  return (
    <View style={styles.header}>
      <View style={styles.nameSection}>
        <Text style={styles.name}>Ryan F. Milne</Text>
        <Text style={styles.title}>Web Application Developer</Text>
        <Text style={styles.contactInfo}>
          Long Beach, CA · (714) 548-2984 · {email} · ryanfmilne.com/dev
        </Text>
      </View>
      <Text style={styles.summary}>
        Web application developer with experience building SaaS products, e-commerce storefronts, and internal business tools using Next.js, React, TypeScript, Supabase, Shopify, and Magento. After building and operating an e-commerce business for over a decade, I transitioned into modern application development and now bring both technical execution and practical business experience to product-focused teams.
      </Text>
    </View>
  )
}
