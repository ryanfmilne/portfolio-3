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
  job: {
    marginBottom: 12,
  },
  jobHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  jobTitle: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  company: {
    fontSize: 11,
    fontWeight: 'bold',
  },
  dates: {
    fontSize: 10,
    fontStyle: 'italic',
  },
  description: {
    fontSize: 9,
    lineHeight: 1.3,
    marginLeft: 10,
    marginBottom: 2,
  },
})

const experiences = [
  {
    company: 'Catalina Home',
    title: 'Web Developer',
    dates: 'Oct 2023 - May 2025',
    description: [
      'Launched two brand websites on Shopify, handling complete development lifecycle from architecture planning through deployment',
      'Designed and prototyped user experiences in Figma, translating mockups into production-ready Shopify themes',
      'Built custom Shopify product configurators enabling dynamic product customization and improving conversion rates',
    ]
  },
  {
    company: 'Pro Audio Land',
    title: 'Web Developer',
    dates: 'Jul 2022 - Oct 2023',
    description: [
      'Performed technical debt cleanup on Magento 2 platform, resolving database inefficiencies and broken plugin integrations',
      'Redesigned UI and restructured disorganized product catalog, improving site navigation and user experience',
      'Enhanced email marketing campaigns with professional ad design, increasing engagement and customer retention',
    ]
  },
  {
    company: 'Fashion E-commerce Business',
    title: 'Owner & Lead Developer',
    dates: 'Nov 2011 - Sept 2022',
    description: [
      'Founded and scaled online fashion retail business specializing in shoes, lingerie, accessories, and costumes',
      'Single-handedly managed all technical operations including full-stack development, design, SEO, and digital marketing',
      'Built and maintained custom Magento platform handling thousands of SKUs and processing orders daily',
      'Designed responsive storefront, optimized conversion funnels, and implemented payment/shipping integrations',
    ]
  },
]

export function CVExperience() {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>Professional Experience</Text>
      {experiences.map((job, index) => (
        <View key={index} style={styles.job}>
          <View style={styles.jobHeader}>
            <View>
              <Text style={styles.jobTitle}>{job.title}</Text>
              <Text style={styles.company}>{job.company}</Text>
            </View>
            <Text style={styles.dates}>{job.dates}</Text>
          </View>
          {job.description.map((item, i) => (
            <Text key={i} style={styles.description}>• {item}</Text>
          ))}
        </View>
      ))}
    </View>
  )
}