'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import React from 'react'
import { cn } from '@/lib/utils'
import { ModeToggle } from '@/components/theme-toggle'
import { SignInButton, SignOutButton, SignUpButton, useUser } from '@clerk/nextjs'
import { Menu, X, Sparkles } from 'lucide-react'

// ----- siteConfig -----
const siteConfig = {
  name: "AIWebBuilder",
  links: {
    login: "/login",
    register: "/register",
  },
}

// ----- marketingConfig -----
const marketingConfig = {
  mainNav: [
    { href: "/", title: "Home" },
    { href: "/features", title: "Features" },
    { href: "/pricing", title: "Pricing" },
    { href: "/docs", title: "Docs" },
    { href: "/about", title: "About" },
  ],
}

export const Header = () => {
  const [menuState, setMenuState] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const { isSignedIn } = useUser()

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuState(false)
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="w-full px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            'mx-auto transition-all duration-500 ease-in-out',
            isScrolled
              ? 'mt-3 max-w-5xl rounded-2xl border border-border/50 bg-background/80 backdrop-blur-xl shadow-xl shadow-black/5'
              : 'mt-0 max-w-7xl bg-transparent'
          )}
        >
          <div className="flex items-center justify-between h-16 px-4 lg:px-6">
            {/* Logo */}
            <Link
              href="/"
              aria-label="home"
              className="flex items-center space-x-2 group relative z-50"
            >
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/30 via-primary/20 to-transparent blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Sparkles className="w-5 h-5 text-primary relative" />
              </div>
              <span className="font-bold text-lg relative bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                {siteConfig.name}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center flex-1 px-8">
              <ul className="flex items-center gap-1">
                {marketingConfig.mainNav.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 group"
                    >
                      <span className="relative z-10">{item.title}</span>
                      <span className="absolute inset-0 rounded-lg bg-accent/50 scale-0 group-hover:scale-100 transition-transform duration-200 origin-center" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <ModeToggle />
              
              {isSignedIn ? (
                <>
                  {!isScrolled && (
                    <>
                      <Link href="/workspace">
                        <Button
                          size="sm"
                          variant="ghost"
                          className="font-medium hover:bg-accent"
                        >
                          Workspace
                        </Button>
                      </Link>
                      <SignOutButton>
                        <Button
                          size="sm"
                          className="font-medium bg-primary hover:bg-primary/90 hover:scale-105 transition-transform shadow-lg shadow-primary/25"
                        >
                          Sign Out
                        </Button>
                      </SignOutButton>
                    </>
                  )}
                  {isScrolled && (
                    <>
                      <Link href="/workspace">
                        <Button
                          size="sm"
                          variant="ghost"
                          className="font-medium hover:bg-accent"
                        >
                          Workspace
                        </Button>
                      </Link>
                      <SignOutButton>
                        <Button
                          size="sm"
                          className="font-medium bg-primary hover:bg-primary/90 hover:scale-105 transition-transform shadow-lg shadow-primary/25"
                        >
                          Sign Out
                        </Button>
                      </SignOutButton>
                    </>
                  )}
                </>
              ) : (
                <>
                  {!isScrolled && (
                    <>
                      <SignInButton mode="modal" forceRedirectUrl="/workspace">
                        <Button
                          size="sm"
                          variant="ghost"
                          className="font-medium hover:bg-accent"
                        >
                          Login
                        </Button>
                      </SignInButton>
                      <SignUpButton mode="modal" forceRedirectUrl="/workspace">
                        <Button
                          size="sm"
                          className="font-medium bg-primary hover:bg-primary/90 hover:scale-105 transition-transform shadow-lg shadow-primary/25"
                        >
                          Sign Up
                        </Button>
                      </SignUpButton>
                    </>
                  )}
                  {isScrolled && (
                    <SignInButton mode="modal" forceRedirectUrl="/workspace">
                      <Button
                        size="sm"
                        className="font-medium bg-primary hover:bg-primary/90 hover:scale-105 transition-transform shadow-lg shadow-primary/25"
                      >
                        Get Started
                      </Button>
                    </SignInButton>
                  )}
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuState(!menuState)}
              aria-label={menuState ? 'Close Menu' : 'Open Menu'}
              className="lg:hidden relative z-50 p-2 rounded-lg hover:bg-accent transition-colors"
            >
              {menuState ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {menuState && (
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setMenuState(false)}
          />
        )}

        {/* Mobile Menu */}
        <div
          className={cn(
            'fixed top-20 left-4 right-4 z-40 lg:hidden transition-all duration-300 origin-top',
            menuState
              ? 'scale-100 opacity-100'
              : 'scale-95 opacity-0 pointer-events-none'
          )}
        >
          <div className="bg-background border border-border rounded-2xl shadow-2xl overflow-hidden">
            {/* Mobile Navigation Links */}
            <div className="p-6 space-y-1">
              {marketingConfig.mainNav.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  onClick={() => setMenuState(false)}
                  className="block px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-all duration-200"
                  style={{
                    animation: menuState ? `slideIn 0.3s ease-out ${index * 0.05}s both` : 'none'
                  }}
                >
                  {item.title}
                </Link>
              ))}
            </div>

            {/* Mobile Actions */}
            <div className="px-6 py-4 bg-muted/30 border-t border-border space-y-3">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-muted-foreground">Theme</span>
                <ModeToggle />
              </div>

              {isSignedIn ? (
                <>
                  <Link href="/workspace" onClick={() => setMenuState(false)}>
                    <Button
                      size="sm"
                      className="w-full font-medium bg-primary hover:bg-primary/90"
                    >
                      Workspace
                    </Button>
                  </Link>
                  <SignOutButton>
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full font-medium"
                    >
                      Sign Out
                    </Button>
                  </SignOutButton>
                </>
              ) : (
                <>
                  <SignInButton mode="modal" forceRedirectUrl="/workspace">
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full font-medium"
                    >
                      Login
                    </Button>
                  </SignInButton>
                  <SignUpButton mode="modal" forceRedirectUrl="/workspace">
                    <Button
                      size="sm"
                      className="w-full font-medium bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25"
                    >
                      Sign Up
                    </Button>
                  </SignUpButton>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      <style jsx global>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  )
}