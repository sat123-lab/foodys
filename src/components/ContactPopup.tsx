import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { contactInfo } from "@/data/contact";

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactPopup = ({ isOpen, onClose }: ContactPopupProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-md"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 24 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            <div
              className="relative w-full max-w-3xl bg-white rounded-2xl shadow-[0_24px_80px_rgba(0,0,0,0.15)] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-1 w-full bg-gradient-to-r from-foody-green via-foody-green/80 to-foody-red/80" />

              <button
                onClick={onClose}
                className="absolute top-5 right-5 p-2 rounded-full text-muted-foreground hover:bg-foody-gray hover:text-foreground transition-colors z-10"
                aria-label="Close contact popup"
              >
                <X className="size-5" />
              </button>

              <div className="p-8 md:p-10">
                <div className="text-center mb-8 md:mb-10 pr-8">
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
                    Get in Touch
                  </h2>
                  <p className="text-muted-foreground">Questions? Let's talk!</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div className="rounded-xl border border-border/60 bg-foody-gray/40 p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="size-10 rounded-full bg-foody-red/10 flex items-center justify-center shrink-0">
                        <Mail className="size-4 text-foody-red" />
                      </div>
                      <h3 className="font-bold text-sm uppercase tracking-wide">Mail</h3>
                    </div>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-muted-foreground hover:text-foody-red transition-colors text-sm"
                    >
                      {contactInfo.email}
                    </a>
                  </div>

                  <div className="rounded-xl border border-border/60 bg-foody-gray/40 p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="size-10 rounded-full bg-foody-red/10 flex items-center justify-center shrink-0">
                        <MapPin className="size-4 text-foody-red" />
                      </div>
                      <h3 className="font-bold text-sm uppercase tracking-wide">Corporate Office</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {contactInfo.company}
                      <br />
                      {contactInfo.address.line1}
                      <br />
                      {contactInfo.address.line2}
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border border-border/60 bg-foody-gray/40 p-5 mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="size-10 rounded-full bg-foody-red/10 flex items-center justify-center shrink-0">
                      <MessageCircle className="size-4 text-foody-red" />
                    </div>
                    <h3 className="font-bold text-sm uppercase tracking-wide">Bulk Orders</h3>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {contactInfo.bulkOrders.map((office) => (
                      <div
                        key={office.city}
                        className="rounded-lg bg-white border border-border/40 p-4"
                      >
                        <p className="font-semibold text-foreground text-sm mb-2">{office.city}</p>
                        <a
                          href={`mailto:${office.email}`}
                          className="text-muted-foreground hover:text-foody-red transition-colors text-xs block mb-1"
                        >
                          {office.email}
                        </a>
                        <a
                          href={`tel:${office.tel}`}
                          className="text-muted-foreground hover:text-foody-red transition-colors text-xs block"
                        >
                          {office.phone}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center border-t border-border pt-6">
                  <a
                    href={`tel:${contactInfo.bulkOrders[0].tel}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-foody-red text-white text-sm font-medium rounded-full hover:bg-foody-red-dark transition-colors"
                  >
                    <Phone className="size-4" />
                    Call Us
                  </a>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-foody-gray text-foreground text-sm font-medium rounded-full hover:bg-foody-green hover:text-white transition-colors"
                  >
                    <Mail className="size-4" />
                    Email Us
                  </a>
                  <Link
                    to="/contact"
                    onClick={onClose}
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 border border-border text-sm font-medium rounded-full hover:border-foody-green hover:text-foody-green transition-colors"
                  >
                    Full contact page
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
