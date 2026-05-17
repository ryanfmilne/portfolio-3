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
      title: 'Founder & Full-Stack Developer',
      company: 'Golden West Digital',
      dates: 'July 2025 – Present',
      description: 'Productized web agency for contractor businesses, powered by a custom multi-tenant platform.',
      bullets: [
        '• Designed and built multi-tenant SaaS platform on Next.js, React, TypeScript, and Supabase with row-level security for tenant data isolation.',
        '• Built block-based site builder enabling rapid templated site delivery, custom domain provisioning via Vercel API, and Stripe billing integration.',
        '• Implemented authentication system with role-based access control and real-time data synchronization.',
        '• Solo developer shipping production features end-to-end with AI-assisted development workflow.',
      ],
    },
    {
      title: 'Web Developer',
      company: 'Catalina Home',
      dates: 'Oct 2023 – May 2025',
      bullets: [
        '• Launched two production Shopify storefronts: Artistry Hardwood Flooring (artistryflooring.com) and Lone Mountain Lighting (lonemountainlighting.com), an outdoor lighting brand with a B2B Pro program for contractors.',
        '• Customized Liquid themes and built product configurators for variant-heavy SKUs, improving customer conversion paths.',
        '• Set up B2B/wholesale account flow on Lone Mountain with gated contractor pricing tiers.',
        '• Designed user experiences in Figma and shipped responsive themes to production.',
      ],
    },
    {
      title: 'Web Developer',
      company: 'Pro Audio Land',
      dates: 'Jul 2022 – Oct 2023',
      bullets: [
        '• Resolved technical debt in Magento 2 platform, optimizing database queries and fixing broken plugin integrations.',
        '• Redesigned UI and restructured product catalog architecture, improving navigation and discoverability.',
        '• Designed email marketing campaigns and promotional materials.',
      ],
    },
    {
      title: 'Founder & Lead Developer',
      company: 'Fashion E-commerce Business',
      dates: 'Nov 2011 – Sep 2022',
      bullets: [
        '• Founded and operated independent online retailer for 11 years across shoes, lingerie, accessories, and costumes.',
        '• Built and maintained custom Magento platform managing 15,000+ SKUs with integrated payment, shipping, and inventory systems.',
        '• Built and ran live inventory sync between Magento storefront and eBay account.',
        '• Owned the full operational stack: development, design, SEO, paid advertising, photography, and customer experience.',
      ],
    },
    {
      title: 'Marketing: Graphic Design & Product Photography',
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