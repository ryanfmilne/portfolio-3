import { NextResponse } from 'next/server'
import { renderToBuffer } from '@react-pdf/renderer'
import { CVDocument } from '@/components/cv'
import React from 'react'

export async function GET() {
  try {
    // Generate the PDF buffer
    const pdfBuffer = await renderToBuffer(React.createElement(CVDocument))

    // Convert Buffer to Uint8Array for NextResponse
    const uint8Array = new Uint8Array(pdfBuffer)

    // Create response with PDF
    const response = new NextResponse(uint8Array, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Ryan_Milne_CV.pdf"',
        'Content-Length': pdfBuffer.length.toString(),
      },
    })

    return response
  } catch (error) {
    console.error('Error generating PDF:', error)
    return NextResponse.json(
      { error: 'Failed to generate PDF' },
      { status: 500 }
    )
  }
}