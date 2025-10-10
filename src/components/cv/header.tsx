import { View, Text, StyleSheet } from '@react-pdf/renderer'
import { data } from '@/constants'

const styles = StyleSheet.create({
  header: {
    marginBottom: 20,
    borderBottom: '1 solid #000',
    paddingBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  contact: {
    fontSize: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contactItem: {
    fontSize: 10,
  },
})

export function CVHeader() {
  const { avatar, links } = data

  const email = links.find(link => link.title === 'Email')?.url.replace('mailto:', '')
  const linkedin = links.find(link => link.title === 'LinkedIn')?.url
  const github = links.find(link => link.title === 'GitHub')?.url

  return (
    <View style={styles.header}>
      <Text style={styles.name}>{avatar.name}</Text>
      <View style={styles.contact}>
        <Text style={styles.contactItem}>Email: {email}</Text>
        <Text style={styles.contactItem}>LinkedIn: {linkedin}</Text>
        <Text style={styles.contactItem}>GitHub: {github}</Text>
      </View>
    </View>
  )
}