import { NextRequest, NextResponse } from 'next/server'
import { renderToBuffer } from '@react-pdf/renderer'
import { CVDocument } from '@/components/cv'
import React from 'react'

export async function GET(request: NextRequest) {
  try {
    // Generate the PDF buffer
    const pdfBuffer = await renderToBuffer(React.createElement(CVDocument))

    // Create response with PDF
    const response = new NextResponse(pdfBuffer, {
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