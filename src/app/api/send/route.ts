import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { ContactEmailTemplate } from '@/components/contact/email-template'
import { type ContactEmailTemplateProps } from '@/types'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, message } =
      (await request.json()) as ContactEmailTemplateProps

    const resendApiKey = process.env.RESEND_API_KEY

    if (!resendApiKey) {
      return NextResponse.json(
        { message: 'Email service not configured' },
        { status: 500 }
      )
    }

    const resend = new Resend(resendApiKey)

    const { data, error } = await resend.emails.send({
      from: 'Ryan F. Milne <portfolio@goldenwestdigital.com>',
      to: 'ryanfmilne@gmail.com',
      reply_to: email,
      subject: 'Message from contact form',
      react: ContactEmailTemplate({
        firstName,
        lastName,
        email,
        message
      })
    })

    if (error) {
      return NextResponse.json(
        { message: 'Error sending email' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Email sent successfully', data },
      { status: 200 }
    )
  } catch (error) {
    console.error('API send error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}
