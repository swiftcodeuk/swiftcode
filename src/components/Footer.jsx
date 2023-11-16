import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-slate-400/10 py-10 text-center sm:text-left">
        
          {/* Logo */}
          <Logo className="h-10 w-auto mb-6 sm:mb-0" />

          {/* NavLinks */}
          <div className="flex flex-col sm:flex-row gap-x-6 gap-y-4 sm:gap-y-0 mb-6 sm:mb-0">
            <NavLink href="/terms">Terms & Conditions</NavLink>
            <NavLink href="/privacy">Privacy Policy</NavLink>
            <NavLink href="/cookies">Cookies</NavLink>
          </div>

          {/* Copyright */}
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} SwiftCode Ltd. All rights reserved.
          </p>

        </div>
      </Container>
    </footer>
  )
}
