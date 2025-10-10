import { Document, Page, StyleSheet } from '@react-pdf/renderer'
import { CVHeader } from './header'
import { CVSummary } from './summary'
import { CVExperience } from './experience'

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 10,
    paddingTop: 30,
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 30,
    lineHeight: 1.4,
  },
})

export function CVDocument() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <CVHeader />
        <CVSummary />
        <CVExperience />
      </Page>
    </Document>
  )
}