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
  },
})

export function CVHeader() {
  const { avatar, links } = data
  const email = links.find(link => link.title === 'Email')?.url.replace('mailto:', '')

  return (
    <View style={styles.header}>
      <View style={styles.nameSection}>
        <Text style={styles.name}>{avatar.name}</Text>
        <Text style={styles.title}>E-commerce Operator & Developer</Text>
        <Text style={styles.contactInfo}>
          Long Beach, CA · (714) 548-2984 · {email} · ryanfmilne.com
        </Text>
      </View>
      <Text style={styles.summary}>
        E-commerce operator with 14+ years founding, building, and running online retail. Founded and operated an independent fashion e-commerce business for 11 years on a self-built Magento platform, managing 15,000+ SKUs and owning the full funnel from paid traffic and SEO through merchandising, photography, customer service, and shipping. Recently launched two production Shopify storefronts at Catalina Home. GA4 certified. Combine deep operational instincts with hands-on technical capability.
      </Text>
    </View>
  )
}