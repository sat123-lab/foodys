import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";
import { ContactPopup } from "./ContactPopup";

type NavItem = {
  to: string;
  label: string;
  children?: { to: string; label: string }[];
};

const links: NavItem[] = [
  { to: "/", label: "Home" },
  {
    to: "/about",
    label: "About Foody's",
    children: [
      { to: "/about#about-us", label: "About Us" },
      { to: "/about#growth", label: "Our Growth Story" },
      { to: "/about#founder", label: "Founder's Story" },
      { to: "/about#team", label: "Our Team" },
    ],
  },
  {
    to: "/partners",
    label: "Our Partners",
  },
  {
    to: "/verticals",
    label: "Our Verticals",
    children: [
      { to: "/verticals#airports", label: "Foody's at Airports" },
      { to: "/verticals#highways", label: "Foody's at Highways" },
      { to: "/verticals#metros", label: "Foody's at Metros" },
    ],
  },
  ];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [contactPopupOpen, setContactPopupOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMobileExpanded(null);
  }, [location]);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/85 backdrop-blur-xl border-b border-border/60 py-1"
            : "bg-background/40 backdrop-blur-sm py-2"
        }`}
      >
        <div className="container flex items-center justify-between">
          <Link to="/" aria-label="Foody's home">
            <Logo />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <div key={l.to} className="relative group">
                <NavLink
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    `relative inline-flex items-center gap-1 px-4 py-2 text-sm tracking-wide transition-colors ${
                      isActive ? "text-terracotta" : "text-ink hover:text-terracotta"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {l.label}
                      {l.children && (
                        <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180" />
                      )}
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute left-4 right-4 -bottom-0.5 h-px bg-terracotta"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>

                {l.children && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-500 ease-out z-50">
                    <div className="relative min-w-[280px] rounded-2xl bg-background/95 backdrop-blur-xl border border-terracotta/20 shadow-[0_20px_60px_-15px_rgba(60,20,5,0.35)] overflow-hidden">
                      {/* Decorative top accent */}
                      <div className="h-1 w-full bg-gradient-spice" />
                      {/* Tiny arrow */}
                      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 size-3 rotate-45 bg-gradient-to-br from-terracotta to-saffron" />
                      <div className="py-3">
                        {l.children.map((c, idx) => (
                          <Link
                            key={c.to}
                            to={c.to}
                            className="group/item flex items-center gap-3 px-5 py-2.5 text-sm text-ink hover:bg-cream/60 transition-all duration-300"
                          >
                            <span className="flex-1 group-hover/item:text-terracotta group-hover/item:translate-x-1 transition-all">
                              {c.label}
                            </span>
                            <span className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-terracotta">
                              →
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <button
            onClick={() => setContactPopupOpen(true)}
            className="hidden lg:inline-flex group items-center gap-2 px-5 py-2.5 text-sm bg-terracotta text-white hover:bg-ink rounded-full transition-colors duration-300"
          >
            <span>Contact us</span>
          </button>

          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 text-ink"
            aria-label="Toggle menu"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden bg-ink text-ink-foreground overflow-y-auto"
          >
            <div className="container pt-24 pb-12 min-h-full flex flex-col">
              <nav className="flex flex-col gap-1">
                {links.map((l, i) => (
                  <motion.div
                    key={l.to}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.05 }}
                    className="border-b border-white/10"
                  >
                    <div className="flex items-center justify-between">
                      <NavLink
                        to={l.to}
                        end={l.to === "/"}
                        className="block font-serif text-3xl py-3 hover:text-saffron transition-colors flex-1"
                      >
                        {l.label}
                      </NavLink>
                      {l.children && (
                        <button
                          onClick={() =>
                            setMobileExpanded((cur) => (cur === l.to ? null : l.to))
                          }
                          aria-label={`Toggle ${l.label} submenu`}
                          className="p-3"
                        >
                          <ChevronDown
                            className={`size-5 transition-transform ${
                              mobileExpanded === l.to ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      )}
                    </div>
                    <AnimatePresence>
                      {l.children && mobileExpanded === l.to && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden border-l border-white/20 ml-3"
                        >
                          <div className="pb-3 pl-6 flex flex-col gap-0">
                            {l.children.map((c) => (
                              <Link
                                key={c.to}
                                to={c.to}
                                className="text-sm text-white/70 hover:text-saffron py-2 pl-4 transition-all block"
                              >
                                {c.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </nav>
              <div className="mt-auto pt-10 text-sm text-white/60">
                Hyderabad · Mumbai · Jaipur
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <ContactPopup 
        isOpen={contactPopupOpen} 
        onClose={() => setContactPopupOpen(false)} 
      />
    </>
  );
};
