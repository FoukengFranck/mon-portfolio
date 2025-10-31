import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { id: "home", label: "Home" },
  { id: "project", label: "My Project" },
  { id: "service", label: "My Services" },
  { id: "skills", label: "My Skills" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  const toggleMenu = () => setIsOpen((s) => !s);
  const closeMenu = () => setIsOpen(false);


  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    const nav = document.querySelector("nav");
    const navHeight = nav ? (nav as HTMLElement).offsetHeight : 0;

    if (el) {
      const top = (el as HTMLElement).offsetTop - navHeight - 8;
      window.scrollTo({ top, behavior: "smooth" });
      setActiveSection(id);
    }
    closeMenu();
  };


  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: `-40% 0px -40% 0px`,
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);


  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/6 backdrop-blur-md z-50 shadow">
      <div className="flex items-center justify-between px-4 md:px-10 py-3">
        <div className="h-[81px] w-[81px] sm:h-28 sm:w-28">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-full w-full object-contain"
          />
        </div>

        <ul className="hidden md:flex items-center gap-5 font-['Pacifico'] font-medium">
          {links.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className={`cursor-pointer px-3 py-1 rounded-md transition-colors duration-200 ${
                  activeSection === link.id
                    ? "bg-[#A855F7] text-gray-50"
                    : "text-gray-50 hover:bg-purple-600/20"
                }`}
                aria-current={activeSection === link.id ? "true" : undefined}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-50 p-2 rounded-md hover:bg-purple-600/20 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          aria-hidden={!isOpen}
          onClick={closeMenu}
        >
          <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />

          <div
            className="relative max-w-md w-full mx-auto mt-20 bg-white/6 backdrop-blur-md rounded-xl p-6 shadow-2xl overflow-y-auto max-h-[calc(100vh-6rem)]"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              onClick={closeMenu}
              className="absolute top-4 right-4 text-gray-50 p-2 rounded-md hover:bg-purple-600/20 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>

            <ul className="flex flex-col items-center gap-4 mt-2">
              {links.map((link) => (
                <li key={link.id} className="w-full">
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className={`w-full cursor-pointer text-center px-4 py-3 rounded-md transition-colors duration-200 ${
                      activeSection === link.id
                        ? "bg-[#A855F7] text-gray-50 font-bold"
                        : "text-gray-50 hover:bg-purple-600/20 font-extrabold"
                    }`}
                    aria-current={
                      activeSection === link.id ? "true" : undefined
                    }
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
