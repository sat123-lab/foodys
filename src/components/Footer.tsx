import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <footer className="bg-ink text-ink-foreground grain">
      <div className="container py-20">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            <div className="bg-white inline-block p-3 rounded-md">
              <Logo />
            </div>
            <p className="mt-6 text-white/60 max-w-md leading-relaxed">
              A customer-centric brand that leverages technology to enhance your food
              experience while you travel — bringing iconic local flavours to airports,
              highways and metros.
            </p>
            <div className="mt-8 flex gap-3">
              {["IG", "LI", "FB", "YT"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="size-10 grid place-items-center border border-white/15 text-xs tracking-wider hover:bg-saffron hover:text-ink hover:border-saffron transition-all"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="text-xs uppercase tracking-[0.2em] text-saffron mb-5">Company</p>
            <ul className="space-y-3 text-white/70">
              <li><Link to="/" className="hover:text-saffron transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-saffron transition-colors">About Us</Link></li>
              <li><Link to="/verticals" className="hover:text-saffron transition-colors">Our Verticals</Link></li>
              <li><Link to="/contact" className="hover:text-saffron transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-xs uppercase tracking-[0.2em] text-saffron mb-5">Our Verticals</p>
            <ul className="space-y-3 text-white/70">
              <li><Link to="/verticals#airports" className="hover:text-saffron transition-colors">Foody's at Airports</Link></li>
              <li><Link to="/verticals#highways" className="hover:text-saffron transition-colors">Foody's at Highways</Link></li>
              <li><Link to="/verticals#metros" className="hover:text-saffron transition-colors">Foody's at Metros</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.2em] text-saffron mb-5">Contact</p>
            <p className="text-white/80 font-medium mb-2">Zoha Foods Private Limited</p>
            <address className="not-italic text-white/60 leading-relaxed text-sm">
              3rd Floor, Plot No. 55, Pragatinagar,<br />
              Srinagar Colony, Hyderabad 500073
            </address>
            <a href="mailto:info@foodys.com" className="block mt-4 text-saffron hover:underline">
              info@foodys.com
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} foodys.com. All rights reserved.</p>
          <a href="#" className="hover:text-saffron transition-colors">Privacy Policy</a>
        </div>
      </div>

      <div className="overflow-hidden border-t border-white/10">
        <div className="font-serif text-[18vw] leading-none whitespace-nowrap text-white/[0.04] select-none py-4">
          FOODY'S · FLAVOURS OF INDIA · FOODY'S · FLAVOURS OF INDIA ·
        </div>
      </div>
    </footer>
  );
};
