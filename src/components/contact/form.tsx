'use client'

import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader
} from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/components/ui/use-toast'
import { Loader2 } from 'lucide-react'
import { formSchema, type FormValues } from '@/lib/validation'

export function ContactForm() {
  const { toast } = useToast()

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
      honeypot: ''
    }
  })

  const { handleSubmit, formState, control, watch, setError, clearErrors } =
    form
  const { isSubmitting } = formState

  /* Watches for changes in the form fields and checks if the message field contains any URLs.
  If a URL is found, it sets an error message for the message field. */
  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === 'message' && /http|www|href/.test(value.message ?? '')) {
        setError('message', {
          type: 'manual',
          message: 'Message cannot contain URLs'
        })
      } else {
        clearErrors('message')
      }
    })
    return () => {
      subscription.unsubscribe()
    }
  }, [watch, setError, clearErrors])

  async function onSubmit(data: FormValues) {
    if (data.honeypot) {
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive'
      })
      return
    }

    const formData = new FormData()
    Object.entries(data).forEach(([key, value]) => {
      if (value) {
        formData.append(key, value)
      }
    })

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        body: JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          message: data.message
        })
      })

      await response.json()
      toast({
        title: 'Success!',
        description: 'Your message has been sent successfully.',
        variant: 'default'
      })
      form.reset()
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again.',
        variant: 'destructive'
      })
    }
  }

  return (
    <div className='flex justify-center items-center'>
      <Card className='w-full max-w-3xl'>
        <CardHeader>
          <CardDescription className='font-mono text-pretty'>
            Fill out the form below and I&apos;ll get back to you as soon as possible.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
              <div className='space-y-4'>
                <div className='grid grid-cols-2 gap-4'>
                  <div className='space-y-2'>
                    <FormField
                      control={control}
                      name='firstName'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              id='first-name'
                              placeholder="Enter your first name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className='space-y-2'>
                    <FormField
                      control={control}
                      name='lastName'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              id='last-name'
                              placeholder="Enter your last name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className='space-y-2'>
                  <FormField
                    control={control}
                    name='email'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            id='email'
                            placeholder="Enter your email address"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className='space-y-2'>
                  <FormField
                    control={control}
                    name='message'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            id='message'
                            placeholder="Enter your message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                {/* Honeypot Field */}
                <div style={{ display: 'none' }}>
                  <FormField
                    control={control}
                    name='honeypot'
                    render={({ field }) => (
                      <FormItem>
                        <Input
                          {...field}
                          id='honeypot'
                          tabIndex={-1}
                          autoComplete='off'
                        />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <Button
                type='submit'
                disabled={isSubmitting}
                className='w-full mt-6'
              >
                {isSubmitting && (
                  <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                )}
                Send Message
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
