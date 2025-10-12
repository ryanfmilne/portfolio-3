import { Document, Page, StyleSheet } from '@react-pdf/renderer'
import { CVHeader } from './header'
import { CVSkills } from './skills'
import { CVExperience } from './experience'

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 11,
    paddingTop: 40,
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 40,
    lineHeight: 1.5,
    backgroundColor: '#ffffff',
  },
})

export function CVDocument() {
  return (
    <Document>
      <Page size="A4" style={styles.page} wrap>
        <CVHeader />
        <CVSkills />
        <CVExperience />
      </Page>
    </Document>
  )
}