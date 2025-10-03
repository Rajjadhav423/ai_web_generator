'use client'
import React, { useState } from 'react'
import { Sparkles, Code, Database, Image, Zap, Shield, ArrowUpRight } from 'lucide-react'
import { SignInButton } from '@clerk/nextjs'
import { Button } from './ui/button'

const HeroPage = () => {
  const [prompt, setPrompt] = useState('')

  const templates = [
    { icon: '📊', label: 'Dashboard', prompt: 'Create a modern dashboard with analytics cards, charts, and user statistics' },
    { icon: '📝', label: 'SignUp Form', prompt: 'Create a beautiful signup form with email, password fields and social login buttons' },
    { icon: '🏠', label: 'Hero Section', prompt: 'Create a stunning hero section with headline, description, and call-to-action buttons' },
    { icon: '👤', label: 'User Profile Card', prompt: 'Create a user profile card with avatar, name, bio, and social links' }
  ]

  const features = [
    { icon: Zap, title: 'One-click AI Generation', desc: 'Generate complete websites instantly with AI' },
    { icon: Code, title: 'Inline Editing', desc: 'Edit components without full page regeneration' },
    { icon: Shield, title: 'Clerk Authentication', desc: 'Secure user authentication built-in' },
    { icon: Database, title: 'Drizzle ORM + Neon', desc: 'Powerful database with Drizzle ORM' },
    { icon: Image, title: 'ImageKit Integration', desc: 'Optimized image upload and delivery' },
    { icon: Sparkles, title: 'Modern Tech Stack', desc: 'Built with Next.js, TypeScript & Tailwind' }
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20 md:py-32">

        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card text-sm font-medium">
            <Sparkles className="size-4 text-primary" />
            <span>AI-Powered Website Generator</span>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            What should we Design?
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Generate, Edit and Explore design with AI, Export code as well
          </p>
        </div>

        {/* Prompt Input */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="relative">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe your page design"
              className="w-full min-h-[140px] p-6 rounded-lg border border-input bg-card text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <div className="absolute bottom-4 right-4">
              <SignInButton mode="modal" forceRedirectUrl="/workspace">
                <Button
                  size="sm"
                  className="hover:scale-105 transition-transform"
                  disabled={!prompt}
                >
                  <ArrowUpRight className="size-5" />
                </Button>
              </SignInButton>
            </div>
          </div>
        </div>


        {/* Template Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-20">
          {templates.map((template, idx) => (
            <button
              key={idx}
              onClick={() => setPrompt(template.prompt)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card hover:bg-accent transition-colors"
            >
              <span className="text-lg">{template.icon}</span>
              <span className="text-sm font-medium">{template.label}</span>
            </button>
          ))}
        </div>

        {/* Features Section */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Powerful Features
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div key={idx} className="p-6 rounded-lg border border-border bg-card shadow-sm hover:shadow-md transition-shadow">
                  <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              )
            })}
          </div>

          {/* Tech Stack */}
          <div className="p-8 rounded-lg border border-border bg-card shadow-sm">
            <h3 className="text-xl font-semibold text-center mb-6">Built with Modern Technology</h3>
            <div className="flex flex-wrap justify-center gap-6 text-center">
              {['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Clerk Auth', 'Drizzle ORM', 'ImageKit'].map((tech, idx) => (
                <div key={idx} className="px-4 py-2 rounded-lg bg-accent">
                  <span className="text-sm font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              Perfect for anyone building AI-powered SaaS applications
            </p>
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-sm">
              Get Started Free
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HeroPage