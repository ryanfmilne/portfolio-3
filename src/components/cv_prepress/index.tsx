import { Document, Page, StyleSheet } from '@react-pdf/renderer'
import { CVHeader } from './header'
import { CVSkills } from './skills'
import { CVExperience } from './experience'

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 11,
    paddingTop: 30,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 30,
    lineHeight: 1.4,
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
