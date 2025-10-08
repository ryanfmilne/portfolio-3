import { z } from 'zod'

const nameRegex = /^[A-Za-zÀ-ÿ' -]{2,}$/

export const formSchema = z.object({
  firstName: z
    .string()
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name must be less than 50 characters')
    .regex(nameRegex, 'First name contains invalid characters'),
  lastName: z
    .string()
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name must be less than 50 characters')
    .regex(nameRegex, 'Last name contains invalid characters'),
  email: z
    .string()
    .email('Please enter a valid email address')
    .min(5, 'Email must be at least 5 characters')
    .max(100, 'Email must be less than 100 characters'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(500, 'Message must be less than 500 characters')
    .refine((value) => !/http|www|href/.test(value), {
      message: 'Message cannot contain URLs'
    }),
  honeypot: z.string().optional()
})

export type FormValues = z.infer<typeof formSchema>
