import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";
import { ContactPopup } from "./ContactPopup";

type NavChild = { to: string; label: string; external?: boolean };

type NavItem = {
  to: string;
  label: string;
  children?: NavChild[];
};

const NavChildLink = ({
  child,
  className,
  onClick,
}: {
  child: NavChild;
  className: string;
  onClick?: () => void;
}) =>
  child.external ? (
    <a
      href={child.to}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={onClick}
    >
      {child.label}
    </a>
  ) : (
    <Link to={child.to} className={className} onClick={onClick}>
      {child.label}
    </Link>
  );

const links: NavItem[] = [
  { to: "/", label: "Home" },
  {
    to: "/about",
    label: "About Foody's",
    children: [
      { to: "/about#growth", label: "Our Growth Story" },
      { to: "/about#founder", label: "Our Founder's Story" },
      { to: "/about#team", label: "Our Team" },
    ],
  },
  {
    to: "/partners",
    label: "Our Partners",
    children: [
      { to: "/partners#fb", label: "F&B Partners" },
      { to: "/partners#corporate", label: "Corporate Partners" },
    ],
  },
  {
    to: "/verticals",
    label: "Our Verticals",
    children: [
      { to: "/verticals#airports", label: "Foody's at Airports" },
      { to: "/verticals#highways", label: "Foody's at Highways" },
      { to: "/verticals#metros", label: "Foody's at Metros" },
      { to: "https://andhradosaco.com/", label: "Andhra Dosa Co.", external: true },
    ],
  },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [contactPopupOpen, setContactPopupOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const lightNav = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
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
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <motion.div
          animate={{
            paddingTop: scrolled ? 10 : 14,
            paddingBottom: scrolled ? 10 : 14,
          }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <motion.div
            className="absolute inset-0 -z-10 border-b"
            animate={{
              backgroundColor: lightNav
                ? "rgba(255, 255, 255, 0)"
                : scrolled
                  ? "rgba(255, 255, 255, 0.94)"
                  : "rgba(255, 255, 255, 0.82)",
              borderColor: lightNav ? "rgba(255, 255, 255, 0)" : "rgba(0, 0, 0, 0.05)",
              boxShadow: lightNav
                ? "0 0 0 rgba(0,0,0,0)"
                : scrolled
                  ? "0 8px 32px rgba(0, 0, 0, 0.06)"
                  : "0 2px 12px rgba(0, 0, 0, 0.03)",
            }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            style={{ backdropFilter: lightNav ? "blur(0px)" : "blur(16px)" }}
          />

        <div className="container flex items-center justify-between gap-4">
          <Link to="/" aria-label="Foody's home">
            <Logo />
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5">
            {links.map((l) => (
              <div key={l.to} className="relative group">
                <NavLink
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    `relative inline-flex items-center gap-1 px-4 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ease-out ${
                      lightNav
                        ? isActive
                          ? "text-white"
                          : "text-white/85 hover:text-white hover:bg-white/10"
                        : isActive
                          ? "text-foody-red bg-foody-red/5"
                          : "text-foreground/75 hover:text-foody-red hover:bg-foody-gray/60"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {l.label}
                      {l.children && (
                        <ChevronDown className="size-3.5 opacity-70 transition-transform duration-300 group-hover:rotate-180" />
                      )}
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute left-4 right-4 -bottom-0.5 h-0.5 bg-foody-red rounded-full"
                          transition={{ type: "spring", stiffness: 260, damping: 28 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>

                {l.children && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible translate-y-3 scale-95 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:scale-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-[60] pointer-events-none group-hover:pointer-events-auto">
                    <div
                      className={`min-w-[280px] rounded-2xl overflow-hidden border ${
                        lightNav
                          ? "bg-white border-white/90 shadow-[0_24px_64px_rgba(0,0,0,0.28),0_0_0_1px_rgba(0,0,0,0.06)]"
                          : "bg-white border-border/80 shadow-[0_16px_48px_rgba(0,0,0,0.14)]"
                      }`}
                    >
                      <div className="h-1.5 w-full bg-gradient-to-r from-foody-green to-foody-green-dark" />
                      <div className="py-2.5 bg-white">
                        {l.children.map((c) => (
                          <NavChildLink
                            key={c.to + c.label}
                            child={c}
                            className="block px-5 py-3 text-sm font-medium text-gray-900 hover:bg-foody-gray hover:text-foody-green-dark transition-colors duration-200"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            onClick={() => setContactPopupOpen(true)}
            className="hidden lg:inline-flex btn-foody !px-6 !py-2.5 text-sm shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            Contact us
          </motion.button>

          <button
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden p-2 ${lightNav ? "text-white" : "text-foreground"}`}
            aria-label="Toggle menu"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
        </motion.div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 lg:hidden bg-foody-green text-white overflow-y-auto"
          >
            <div className="container pt-28 pb-12 min-h-full flex flex-col">
              <nav className="flex flex-col gap-1">
                {links.map((l, i) => (
                  <motion.div
                    key={l.to}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05 }}
                    className="border-b border-white/15"
                  >
                    <div className="flex items-center justify-between">
                      <NavLink
                        to={l.to}
                        end={l.to === "/"}
                        className="block text-2xl font-semibold py-4 hover:text-white/80 transition-colors flex-1"
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
                            className={`size-5 transition-transform duration-300 ${
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
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pb-4 pl-4 flex flex-col gap-1">
                            {l.children.map((c) => (
                              <NavChildLink
                                key={c.to + c.label}
                                child={c}
                                className="text-sm text-white/70 hover:text-white py-2 transition-colors"
                                onClick={() => setOpen(false)}
                              />
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </nav>
              <button
                onClick={() => { setOpen(false); setContactPopupOpen(true); }}
                className="mt-8 btn-foody w-full"
              >
                Contact us
              </button>
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
