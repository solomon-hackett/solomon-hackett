"use client";

import Link from 'next/link';

import ThemeToggle from '@/app/ui/theme-toggle';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__gradient-rule" />

      <div className="footer__inner">
        <div className="footer__row">
          {/* Branding */}
          <div className="footer__brand">
            <div className="footer__brand-name">
              <span className="badge-mono">&gt;_</span>
              <span className="footer__brand-title">Solomon Hackett</span>
            </div>

            <p className="footer__brand-tagline">
              Aspiring Cybersecurity Professional
            </p>
          </div>

          {/* Nav links */}
          <nav className="footer__nav">
            {[
              { label: "Home", href: "/" },
              { label: "Projects", href: "/projects" },
              { label: "Blog", href: "/blog" },
              { label: "Contact", href: "/contact" },
            ].map(({ label, href }) => (
              <Link key={label} href={href} className="footer__nav-link">
                {label}
              </Link>
            ))}
          </nav>

          <ThemeToggle />

          {/* Social links */}
          <div className="footer__social">
            {[
              {
                label: "GitHub",
                href: "https://github.com/solomon-hackett",
                icon: "{ }",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/solomon-hackett-737798328/",
                icon: "in",
              },
              {
                label: "Email",
                href: "mailto:solomonhackett2008@gmail.com",
                icon: "@",
              },
            ].map(({ label, href, icon }) => (
              <Link
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="footer__social-link"
              >
                <span className="badge-mono--sm">{icon}</span>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
