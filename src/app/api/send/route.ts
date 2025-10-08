import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { ContactEmailTemplate } from '@/components/contact/email-template'
import { type ContactEmailTemplateProps } from '@/types'

export const dynamic = 'force-dynamic'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, message } =
      (await request.json()) as ContactEmailTemplateProps

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { message: 'Email service not configured' },
        { status: 500 }
      )
    }

    const { data, error } = await resend.emails.send({
      from: 'Ryan Milne <resend@ryanmilne.com>',
      to: 'ryan@ryanmilne.com',
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
