"use client";

export default function Footer() {
  return (
    <footer
      className="mt-16 border-t w-screen"
      style={{ borderColor: "var(--border)" }}
    >
      <div
        className="w-full h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--accent-primary), transparent)",
        }}
      />

      <div
        className="mx-auto px-6 py-10 max-w-5xl"
        style={{ color: "var(--secondary)" }}
      >
        <div className="flex md:flex-row flex-col justify-between items-start md:items-center gap-8">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span
                className="px-1.5 py-0.5 rounded font-mono text-xs"
                style={{
                  background: "var(--surface-elevated)",
                  color: "var(--accent-primary)",
                  border: "1px solid var(--border)",
                }}
              >
                &gt;_
              </span>
              <span
                className="font-semibold tracking-tight"
                style={{ color: "var(--primary)" }}
              >
                Solomon Hackett
              </span>
            </div>
            <p className="font-mono text-xs" style={{ color: "var(--muted)" }}>
              Aspiring Cybersecurity Professional
            </p>
          </div>

          <nav className="flex gap-6 text-sm">
            {[
              { label: "Home", href: "/" },
              { label: "Projects", href: "/projects" },
              { label: "Blog", href: "/blog" },
              { label: "Contact", href: "/contact" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="hover:underline underline-offset-4 transition-colors duration-200"
                style={{ color: "var(--secondary)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--accent-primary)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--secondary)")
                }
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex gap-4 text-sm">
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
              <a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-mono text-xs transition-colors duration-200"
                style={{ color: "var(--muted)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--accent-primary)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--muted)";
                }}
              >
                <span
                  className="px-1 py-0.5 rounded text-[10px]"
                  style={{
                    background: "var(--surface-elevated)",
                    border: "1px solid var(--border)",
                  }}
                >
                  {icon}
                </span>
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
