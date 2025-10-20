import { View, Text, StyleSheet } from '@react-pdf/renderer'
import { data } from '@/constants'

const styles = StyleSheet.create({
  header: {
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
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    overflow: 'hidden',
    backgroundColor: '#e8e8e8',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  avatarFallback: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#e8e8e8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontSize: 28,
    color: '#606060',
    fontWeight: 'bold',
  },
  contactWrapper: {
    marginBottom: 16,
  },
  contactLine: {
    fontSize: 8,
    color: '#707070',
    lineHeight: 1.4,
    marginBottom: 2,
  },
  nameWrapper: {
    marginBottom: 12,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
    lineHeight: 1.2,
    letterSpacing: -0.5,
  },
  summary: {
    fontSize: 11,
    lineHeight: 1.6,
    color: '#333333',
    textAlign: 'justify',
    marginBottom: 8,
  },
})

export function CVHeader() {
  const { avatar, links } = data

  const email = links.find(link => link.title === 'Email')?.url.replace('mailto:', '')

  return (
    <View style={styles.header}>
      <View style={styles.leftColumn}>
        <View style={styles.avatarFallback}>
          <Text style={styles.avatarText}>{avatar.initials}</Text>
        </View>
      </View>
      <View style={styles.rightColumn}>
        <View style={styles.contactWrapper}>
          <Text style={styles.contactLine}>Long Beach, CA 90803</Text>
          <Text style={styles.contactLine}>(714) 548-2984 • {email} • ryanfmilne.com</Text>
        </View>
        <View style={styles.nameWrapper}>
          <Text style={styles.name}>{avatar.name}, E-Commerce Manager & Shopify Developer</Text>
        </View>
        <Text style={styles.summary}>
          E-Commerce Manager & Shopify Developer with 11 years of experience founding and scaling online retail operations. Built a business managing 15,000+ SKUs and developed custom Shopify solutions. Combine technical development (React, Next.js, TypeScript, Shopify Liquid) with operational experience for complete e-commerce management.
        </Text>
      </View>
    </View>
  )
}
