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
  experienceItem: {
    marginBottom: 8,
  },
  experienceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  experienceTitle: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#000000',
  },
  experienceCompany: {
    fontSize: 10,
    color: '#333333',
  },
  experienceDates: {
    fontSize: 8,
    color: '#666666',
  },
  experienceDescription: {
    fontSize: 8,
    color: '#555555',
    lineHeight: 1.3,
    marginLeft: 0,
  },
  bulletPoint: {
    fontSize: 8,
    color: '#555555',
    lineHeight: 1.3,
    marginLeft: 10,
    marginBottom: 1,
  },
})

export function CVExperience() {
  const experiences = [
    {
      title: 'Founder & Web Application Developer',
      company: 'Golden West Digital',
      dates: 'July 2025 – Present',
      description: 'Contractor-focused digital agency supported by a custom multi-tenant website and lead-management platform.',
      bullets: [
        '• Built a contractor-focused web platform using Next.js, React, TypeScript, and Supabase.',
        '• Developed reusable website templates and content management tools for faster client site delivery.',
        '• Implemented authentication, account management, Stripe billing, and custom-domain support.',
        '• Built lead capture, QR tracking, and client management features for contractor marketing workflows.',
        '• Designed and shipped features from concept through deployment using a modern AI-assisted development process.',
      ],
    },
    {
      title: 'Web Developer',
      company: 'Catalina Home',
      dates: 'Oct 2023 – May 2025',
      bullets: [
        '• Shipped production Shopify storefronts for Artistry Hardwood Flooring and Lone Mountain Lighting, including responsive UI improvements and launch support.',
        '• Customized Liquid themes and built product configurators for variant-heavy SKUs, improving customer purchasing paths.',
        '• Implemented B2B purchasing flows on Lone Mountain with gated contractor pricing tiers.',
        '• Created Figma mockups, refined UX details, and shipped responsive storefront updates to production.',
      ],
    },
    {
      title: 'Web Developer',
      company: 'Pro Audio Land',
      dates: 'Jul 2022 – Oct 2023',
      bullets: [
        '• Resolved Magento 2 platform issues, including slow pages, broken plugin integrations, and catalog usability problems.',
        '• Redesigned customer-facing UI and improved product organization to support navigation and discoverability.',
        '• Designed email marketing campaigns and promotional materials.',
      ],
    },
    {
      title: 'Founder & Lead Developer',
      company: 'Fashion E-commerce Business',
      dates: 'Nov 2011 – Sep 2022',
      bullets: [
        '• Founded and operated an independent online retailer for over a decade across shoes, lingerie, accessories, and costumes.',
        '• Built and maintained a custom Magento storefront supporting 15,000+ SKUs.',
        '• Managed payment, shipping, inventory, customer experience, SEO, photography, and day-to-day operations.',
        '• Owned online merchandising, marketing, product data, and customer support from launch through daily operations.',
      ],
    },
    {
      title: 'Marketing, Graphic Design & Product Photography',
      company: 'ADL (now Luminance Lighting)',
      dates: 'Jan 2005 – Nov 2011',
      bullets: [
        "• Launched the company's first website. Early-career web development for a B2B lighting distributor.",
        '• Built and maintained 5 brand product catalogs in Adobe InDesign. Early experience managing large structured product datasets.',
        '• Produced product photography for catalog and trade publications.',
        '• Designed print advertising; ads published in hospitality lighting trade magazines.',
      ],
    },
  ]

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>EXPERIENCE</Text>
      {experiences.map((exp, index) => (
        <View key={index} style={styles.experienceItem} wrap={false}>
          <View style={styles.experienceHeader}>
            <View>
              <Text style={styles.experienceTitle}>
                {exp.title} · {exp.company}
              </Text>
            </View>
            <Text style={styles.experienceDates}>{exp.dates}</Text>
          </View>
          {exp.description && (
            <Text style={styles.experienceDescription}>{exp.description}</Text>
          )}
          {exp.bullets?.map((bullet, bulletIndex) => (
            <Text key={bulletIndex} style={styles.bulletPoint}>
              {bullet}
            </Text>
          ))}
        </View>
      ))}
    </View>
  )
}
