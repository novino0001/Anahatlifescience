"use client"

import type React from "react"

import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Loader2 } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Create mailto link with form data
    const mailtoLink = `mailto:Financeanahat@gmail.com,Marketinganahat@gmail.com,Regulatoryanahat@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    )}`

    // Open email client
    window.location.href = mailtoLink

    // Simulate submission delay for UX
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" })
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="bg-muted/50 p-10 rounded-3xl">
      <h4 className="text-2xl font-bold mb-6">Send a Message</h4>
      {isSubmitted && (
        <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3 text-emerald-800">
          <CheckCircle2 className="w-5 h-5" />
          <p className="text-sm font-medium">Your email client will open shortly. Thank you for contacting us!</p>
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full p-4 rounded-xl bg-white border-none shadow-sm focus:ring-2 focus:ring-primary outline-none"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full p-4 rounded-xl bg-white border-none shadow-sm focus:ring-2 focus:ring-primary outline-none"
          />
        </div>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          required
          className="w-full p-4 rounded-xl bg-white border-none shadow-sm focus:ring-2 focus:ring-primary outline-none"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          rows={5}
          required
          className="w-full p-4 rounded-xl bg-white border-none shadow-sm focus:ring-2 focus:ring-primary outline-none resize-none"
        ></textarea>
        <Button type="submit" disabled={isSubmitting} className="w-full py-6 text-lg rounded-xl">
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </div>
  )
}
