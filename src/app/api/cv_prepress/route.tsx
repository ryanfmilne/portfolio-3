import { NextResponse } from 'next/server'
import { renderToBuffer } from '@react-pdf/renderer'
import { CVDocument } from '@/components/cv_prepress'
import { createElement } from 'react'

export async function GET() {
  try {
    const pdfBuffer = await renderToBuffer(createElement(CVDocument))
    const uint8Array = new Uint8Array(pdfBuffer)

    return new NextResponse(uint8Array, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Ryan_F_Milne_Prepress_Resume.pdf"',
        'Content-Length': pdfBuffer.length.toString(),
      },
    })
  } catch (error) {
    console.error('Error generating PDF:', error)
    return NextResponse.json({ error: 'Failed to generate PDF' }, { status: 500 })
  }
}
