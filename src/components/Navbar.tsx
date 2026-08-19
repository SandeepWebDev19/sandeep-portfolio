import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#050505]/80 backdrop-blur-md">
      <nav className="mx-auto flex h-18 max-w-6xl items-center justify-between px-6">

        {/* Logo */}
        <a
          href="#home"
          onClick={handleLinkClick}
          className="text-lg font-bold tracking-tight"
        >
          Sandeep<span className="text-blue-500">.</span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm text-gray-400 transition hover:text-white"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="rounded-lg p-2 text-gray-400 transition hover:bg-white/5 hover:text-white md:hidden"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      {isOpen && (
        <div className="border-t border-white/10 bg-[#050505] md:hidden">
          <div className="mx-auto max-w-6xl px-6 py-4">

            <div className="flex flex-col">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={handleLinkClick}
                  className="border-b border-white/5 py-3 text-sm text-gray-400 transition hover:text-white last:border-b-0"
                >
                  {item.name}
                </a>
              ))}
            </div>

          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;