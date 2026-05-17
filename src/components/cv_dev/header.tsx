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
        <Text style={styles.title}>Full-Stack Developer</Text>
        <Text style={styles.contactInfo}>
          Long Beach, CA · (714) 548-2984 · {email} · ryanfmilne.com
        </Text>
      </View>
      <Text style={styles.summary}>
        Full-stack developer with 14+ years building modern web applications and e-commerce platforms. Currently building Golden West Digital, a multi-tenant SaaS platform on Next.js, TypeScript, and Supabase. Previously launched production Shopify storefronts with custom Liquid themes and B2B flows. Founded and operated an independent e-commerce business for 11 years on a self-built Magento platform. Daily user of Claude Code for high-velocity solo shipping.
      </Text>
    </View>
  )
}