import { NextResponse } from 'next/server'
import { Document, Page, StyleSheet, Text, View, renderToBuffer } from '@react-pdf/renderer'
import { createElement } from 'react'

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 11,
    padding: 30,
    lineHeight: 1.4,
    backgroundColor: '#ffffff',
  },
  section: {
    marginBottom: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  title: {
    fontSize: 12,
    color: '#333333',
    marginBottom: 8,
  },
  heading: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  body: {
    fontSize: 9,
    color: '#333333',
  },
})

function UXDocument() {
  return (
    <Document>
      <Page size='A4' style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.name}>Ryan Milne</Text>
          <Text style={styles.title}>UX Designer</Text>
          <Text style={styles.body}>
            Placeholder UX resume focused on research, interaction design, Figma workflows, responsive interface design, and customer experience improvements.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.heading}>Projects</Text>
          <Text style={styles.body}>UX case studies and project details will be added here.</Text>
        </View>
      </Page>
    </Document>
  )
}

export async function GET() {
  try {
    const pdfBuffer = await renderToBuffer(createElement(UXDocument))
    const uint8Array = new Uint8Array(pdfBuffer)

    return new NextResponse(uint8Array, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Ryan_Milne_UX_Resume.pdf"',
        'Content-Length': pdfBuffer.length.toString(),
      },
    })
  } catch (error) {
    console.error('Error generating PDF:', error)
    return NextResponse.json({ error: 'Failed to generate PDF' }, { status: 500 })
  }
}
