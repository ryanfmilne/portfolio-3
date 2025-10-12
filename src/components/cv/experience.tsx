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
  job: {
    marginBottom: 16,
  },
  jobHeader: {
    marginBottom: 6,
  },
  jobTitleLine: {
    fontSize: 11,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  dates: {
    fontSize: 9,
    color: '#666',
    marginBottom: 6,
  },
  bulletPoint: {
    flexDirection: 'row',
    marginBottom: 3,
    marginLeft: 0,
  },
  bullet: {
    fontSize: 10,
    marginRight: 8,
    color: '#333',
  },
  description: {
    fontSize: 10,
    lineHeight: 1.5,
    color: '#333',
    flex: 1,
  },
})

const experiences = [
  {
    company: 'Print Shop SaaS Platform',
    title: 'Freelance Full-Stack Developer',
    dates: 'July 2025 - Present',
    description: [
      'Architected multi-tenant SaaS platform managing end-to-end business workflow from lead generation to order fulfillment for print shop operations',
      'Built full-stack application using Next.js, React, TypeScript, and Supabase with PostgreSQL database and row-level security for tenant data isolation',
      'Designed responsive UI with Tailwind CSS and shadcn/ui, delivering intuitive user experience across customer intake, quoting, and order management workflows',
      'Implemented authentication system with role-based access control and real-time data synchronization',
      'Utilized modern development practices including component-driven architecture, Git version control, and AI-assisted development tools',
    ]
  },
  {
    company: 'Catalina Home',
    title: 'Web Developer',
    dates: 'Oct 2023 - May 2025',
    description: [
      'Launched two brand websites on Shopify, managing complete development lifecycle from architecture and design through deployment and launch',
      'Designed user experiences in Figma and translated mockups into production-ready custom Shopify themes using Liquid templating',
      'Built custom product configurators enabling dynamic product customization, improving conversion rates and reducing customer support inquiries',
    ]
  },
  {
    company: 'Pro Audio Land',
    title: 'Web Developer',
    dates: 'Jul 2022 - Oct 2023',
    description: [
      'Resolved critical technical debt in Magento 2 platform, optimizing database queries and fixing broken plugin integrations to improve site performance',
      'Redesigned UI and restructured product catalog architecture, significantly improving site navigation and user experience',
      'Designed email marketing campaigns and promotional materials, increasing customer engagement and retention',
    ]
  },
  {
    company: 'Fashion E-commerce Business',
    title: 'Owner & Lead Developer',
    dates: 'Nov 2011 - Sept 2022',
    description: [
      'Founded and scaled online fashion retail business specializing in shoes, lingerie, accessories, and costumes to profitable 11-year operation',
      'Managed all technical operations including full-stack development, design, SEO, digital marketing, and customer experience',
      'Built and maintained custom Magento platform managing 15,000+ SKUs and processing daily orders with integrated payment and shipping systems',
      'Designed responsive storefront and optimized conversion funnels, driving consistent revenue growth',
    ]
  },
]

export function CVExperience() {
  return (
    <View style={styles.section}>
      <View style={styles.leftColumn}>
        <Text style={styles.sectionTitle}>employment history</Text>
      </View>
      <View style={styles.rightColumn}>
        {experiences.map((job, index) => (
          <View
            key={index}
            style={styles.job}
            wrap={false}
          >
            <View style={styles.jobHeader}>
              <Text style={styles.jobTitleLine}>
                {job.title}, {job.company}
              </Text>
              <Text style={styles.dates}>{job.dates}</Text>
            </View>
            {job.description.map((item, i) => (
              <View key={i} style={styles.bulletPoint}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.description}>{item}</Text>
              </View>
            ))}
          </View>
        ))}
      </View>
    </View>
  )
}