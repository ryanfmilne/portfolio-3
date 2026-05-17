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
        '• Designed and built multi-tenant SaaS platform on Next.js, TypeScript, and Supabase, with Stripe billing and custom domain provisioning.',
        '• Block-based site builder for rapid templated site delivery.',
        '• Solo operator handling product, development, and go-to-market.',
      ],
    },
    {
      title: 'Web Developer',
      company: 'Catalina Home',
      dates: 'Oct 2023 – May 2025',
      bullets: [
        '• Launched two production Shopify storefronts: Artistry Hardwood Flooring (artistryflooring.com) and Lone Mountain Lighting (lonemountainlighting.com), with a B2B Pro program for contractors.',
        '• Customized Liquid themes and built product configurators for variant-heavy SKUs to improve customer conversion paths.',
        '• Set up B2B/wholesale account flow on Lone Mountain with gated contractor pricing tiers.',
        '• Designed user experiences in Figma and shipped responsive themes to production.',
      ],
    },
    {
      title: 'Web Developer',
      company: 'Pro Audio Land',
      dates: 'Jul 2022 – Oct 2023',
      bullets: [
        '• Restructured product catalog architecture and redesigned UI to improve navigation and discoverability.',
        '• Designed email marketing campaigns and promotional creative.',
        '• Resolved performance and technical-debt issues on Magento 2 platform.',
      ],
    },
    {
      title: 'Founder & Owner',
      company: 'Fashion E-commerce Business',
      dates: 'Nov 2011 – Sep 2022',
      bullets: [
        '• Founded and operated independent online fashion retailer for 11 years across shoes, lingerie, accessories, and costumes.',
        '• Owned the full conversion funnel: paid traffic acquisition (Google Ads, Meta), SEO, email marketing, merchandising, UX, and checkout optimization.',
        '• Managed 15,000+ SKU catalog on a custom-built Magento platform with live inventory sync to eBay and integrated payment, shipping, and fulfillment.',
        '• Handled product photography in-house, customer service, returns, and back-office operations.',
      ],
    },
    {
      title: 'Marketing: Graphic Design & Product Photography',
      company: 'ADL (now Luminance Lighting)',
      dates: 'Jan 2005 – Nov 2011',
      bullets: [
        '• Produced product photography for B2B catalog and sales channels.',
        '• Built and maintained 5 brand product catalogs in Adobe InDesign. Early experience managing large structured product datasets.',
        "• Designed print advertising; ads published in hospitality lighting trade publications. Launched the company's first website.",
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