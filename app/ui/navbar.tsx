import Link from "next/link";

const links = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Me", href: "/contact" },
];

export default function NavBar() {
  return (
    <nav className="flex justify-center items-center gap-4 bg-surface shadow-lg hover:shadow-xl mt-2 mr-1 ml-1 px-8 py-4 rounded-xl w-fit transition duration-200">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-secondary hover:text-accent text-2xl transition-colors"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
