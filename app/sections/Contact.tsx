'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, MapPin, Github, Linkedin, Twitter, Send, Calendar, Check, Loader2 } from 'lucide-react'
import content from '@/content/data.json'
import { MagneticButton } from '@/components/MagneticButton'
import { cn } from '@/lib/utils'

interface FormData {
  name: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

function ContactForm() {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const validate = (): boolean => {
    const newErrors: FormErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        className="flex h-full flex-col items-center justify-center rounded-2xl border border-cyber-green/30 bg-cyber-green/5 p-8 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-cyber-green/20"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
        >
          <Check className="h-8 w-8 text-cyber-green" />
        </motion.div>
        <h3 className="mb-2 text-xl font-semibold text-white">Message Sent!</h3>
        <p className="text-white/60">
          Thank you for reaching out. I'll get back to you within 24 hours.
        </p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name field */}
      <div className="relative">
        <motion.label
          className={cn(
            'absolute left-4 transition-all duration-200',
            focusedField === 'name' || formData.name
              ? '-top-2.5 bg-cyber-dark px-2 text-xs text-cyber-cyan'
              : 'top-3.5 text-white/50'
          )}
        >
          Your Name
        </motion.label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onFocus={() => setFocusedField('name')}
          onBlur={() => setFocusedField(null)}
          className={cn(
            'w-full rounded-xl border bg-white/[0.02] px-4 py-3 text-white outline-none transition-all',
            errors.name
              ? 'border-red-500/50 focus:border-red-500'
              : 'border-white/10 focus:border-cyber-cyan/50'
          )}
        />
        {errors.name && (
          <span className="mt-1 text-xs text-red-400">{errors.name}</span>
        )}
      </div>

      {/* Email field */}
      <div className="relative">
        <motion.label
          className={cn(
            'absolute left-4 transition-all duration-200',
            focusedField === 'email' || formData.email
              ? '-top-2.5 bg-cyber-dark px-2 text-xs text-cyber-cyan'
              : 'top-3.5 text-white/50'
          )}
        >
          Email Address
        </motion.label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onFocus={() => setFocusedField('email')}
          onBlur={() => setFocusedField(null)}
          className={cn(
            'w-full rounded-xl border bg-white/[0.02] px-4 py-3 text-white outline-none transition-all',
            errors.email
              ? 'border-red-500/50 focus:border-red-500'
              : 'border-white/10 focus:border-cyber-cyan/50'
          )}
        />
        {errors.email && (
          <span className="mt-1 text-xs text-red-400">{errors.email}</span>
        )}
      </div>

      {/* Message field */}
      <div className="relative">
        <motion.label
          className={cn(
            'absolute left-4 transition-all duration-200',
            focusedField === 'message' || formData.message
              ? '-top-2.5 bg-cyber-dark px-2 text-xs text-cyber-cyan'
              : 'top-3.5 text-white/50'
          )}
        >
          Your Message
        </motion.label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          onFocus={() => setFocusedField('message')}
          onBlur={() => setFocusedField(null)}
          rows={4}
          className={cn(
            'w-full resize-none rounded-xl border bg-white/[0.02] px-4 py-3 text-white outline-none transition-all',
            errors.message
              ? 'border-red-500/50 focus:border-red-500'
              : 'border-white/10 focus:border-cyber-cyan/50'
          )}
        />
        {errors.message && (
          <span className="mt-1 text-xs text-red-400">{errors.message}</span>
        )}
      </div>

      {/* Submit button */}
      <MagneticButton
        variant="primary"
        className="w-full"
        onClick={() => {}}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-5 w-5" />
            Send Message
          </>
        )}
      </MagneticButton>
    </form>
  )
}

function AvailabilityCard() {
  const isAvailable = content.contact.availability.status === 'available'

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
      <h3 className="mb-4 flex items-center gap-2 font-semibold text-white">
        <Calendar className="h-5 w-5 text-cyber-cyan" />
        Availability
      </h3>

      {/* Status */}
      <div className="mb-6 flex items-center gap-3">
        <span className={cn(
          'relative flex h-3 w-3',
          isAvailable ? 'text-cyber-green' : 'text-yellow-500'
        )}>
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-75" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-current" />
        </span>
        <span className="text-white/80">
          {isAvailable ? 'Available for new opportunities' : 'Currently engaged'}
        </span>
      </div>

      {/* Calendar placeholder */}
      <div className="mb-4 rounded-xl bg-white/5 p-4">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-sm text-white/60">Next available slot</span>
          <span className="text-sm text-cyber-cyan">
            {new Date(content.contact.availability.nextAvailable).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
            })}
          </span>
        </div>
        <div className="space-y-2">
          {['10:00 AM', '2:00 PM', '4:00 PM'].map((time) => (
            <button
              key={time}
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-left text-sm text-white/70 transition-all hover:border-cyber-cyan/30 hover:bg-white/10"
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      <a
        href={content.contact.availability.calendlyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full rounded-xl bg-white/5 py-3 text-center text-sm text-white/60 transition-all hover:bg-white/10 hover:text-white"
      >
        View Full Calendar
      </a>
    </div>
  )
}

export function Contact() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  const socialLinks = [
    { icon: Github, href: content.contact.social.github, label: 'GitHub' },
    { icon: Linkedin, href: content.contact.social.linkedin, label: 'LinkedIn' },
    { icon: Twitter, href: content.contact.social.twitter, label: 'Twitter' },
  ]

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative px-4 py-32 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="mb-4 block font-mono text-sm text-cyber-cyan">
            07 — Contact
          </span>
          <h2 className="font-display text-4xl font-bold text-white sm:text-5xl">
            Let's Build Together
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            Have a project in mind or want to discuss architecture? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left side - Contact info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Contact details */}
            <div className="space-y-4">
              <a
                href={`mailto:${content.contact.email}`}
                className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all hover:border-cyber-cyan/30 hover:bg-white/[0.04]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyber-cyan/10 text-cyber-cyan">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm text-white/50">Email</div>
                  <div className="text-white transition-colors group-hover:text-cyber-cyan">
                    {content.contact.email}
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyber-purple/10 text-cyber-purple">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm text-white/50">Location</div>
                  <div className="text-white">Seattle, WA (Remote)</div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">Connect</h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-white/60 transition-all hover:border-cyber-cyan/30 hover:bg-white/[0.04] hover:text-cyber-cyan"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability card */}
            <AvailabilityCard />
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm">
              <h3 className="mb-6 text-xl font-semibold text-white">Send a Message</h3>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
