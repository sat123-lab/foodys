import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { ArrowUp } from "lucide-react";
import { contactInfo } from "@/data/contact";

export const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="container py-10 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-6 mb-8">
          <div className="col-span-2 md:col-span-4">
            <Logo size="footer" />
            <p className="mt-4 text-white/55 max-w-xs leading-relaxed text-xs">
              A customer-centric brand that leverages technology to enhance your food
              experience while you travel.
            </p>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h4 className="font-semibold text-sm mb-3">Company</h4>
            <ul className="space-y-2 text-white/60 text-xs">
              <li><Link to="/" className="hover:text-foody-green transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-foody-green transition-colors">About Us</Link></li>
              <li><Link to="/partners" className="hover:text-foody-green transition-colors">Our Partners</Link></li>
              <li><Link to="/verticals" className="hover:text-foody-green transition-colors">Our Verticals</Link></li>
              <li><Link to="/contact" className="hover:text-foody-green transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-3">
            <h4 className="font-semibold text-sm mb-3">Our Verticals</h4>
            <ul className="space-y-2 text-white/60 text-xs">
              <li><Link to="/verticals#airports" className="hover:text-foody-green transition-colors">Foody's at Airports</Link></li>
              <li><Link to="/verticals#highways" className="hover:text-foody-green transition-colors">Foody's at Highways</Link></li>
              <li><Link to="/verticals#metros" className="hover:text-foody-green transition-colors">Foody's at Metros</Link></li>
              <li>
                <a
                  href="https://andhradosaco.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foody-green transition-colors"
                >
                  AndhraDosaCo (ADC)
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-3">
            <h4 className="font-semibold text-sm mb-3">Contact</h4>
            <p className="text-white/70 font-medium text-xs mb-1">{contactInfo.company}</p>
            <address className="not-italic text-white/55 leading-relaxed text-xs mb-3">
              {contactInfo.address.line1}<br />
              {contactInfo.address.line2}
            </address>
            <a
              href={`mailto:${contactInfo.email}`}
              className="text-foody-green hover:underline text-xs block"
            >
              {contactInfo.email}
            </a>
            <Link
              to="/contact"
              className="inline-block mt-2 text-white/50 hover:text-foody-green text-xs transition-colors"
            >
              Bulk orders &rarr;
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 pt-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-[11px] text-white/40">
          <p>© Copyright {new Date().getFullYear()} foodys.com. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-foody-green transition-colors">Privacy policy</a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-foody-green transition-colors"
            >
              Go to Top
              <ArrowUp className="size-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
