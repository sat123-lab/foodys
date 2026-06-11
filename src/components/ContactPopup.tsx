import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, Mail } from "lucide-react";
import { toast } from "sonner";
import { contactInfo } from "@/data/contact";

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactPopup = ({ isOpen, onClose }: ContactPopupProps) => {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Thanks — we'll be in touch within 48 hours.");
      (e.target as HTMLFormElement).reset();
      onClose();
    }, 800);
  };

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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          >
            <div
              className="relative w-full max-w-3xl bg-white rounded-2xl shadow-[0_24px_80px_rgba(0,0,0,0.15)] overflow-hidden my-auto"
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
                <div className="text-center mb-8 pr-8">
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
                    Get in Touch
                  </h2>
                  <p className="text-muted-foreground">Questions? Let's talk!</p>
                </div>

                <form onSubmit={onSubmit} className="space-y-5 mb-8">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs uppercase tracking-wide text-muted-foreground mb-2 font-medium"
                      >
                        Your name
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-foody-green focus:ring-2 focus:ring-foody-green/20 transition-all"
                        placeholder="Full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs uppercase tracking-wide text-muted-foreground mb-2 font-medium"
                      >
                        Email
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-foody-green focus:ring-2 focus:ring-foody-green/20 transition-all"
                        placeholder="you@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs uppercase tracking-wide text-muted-foreground mb-2 font-medium"
                    >
                      Phone
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-foody-green focus:ring-2 focus:ring-foody-green/20 transition-all"
                      placeholder="+91"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs uppercase tracking-wide text-muted-foreground mb-2 font-medium"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      required
                      className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-foody-green focus:ring-2 focus:ring-foody-green/20 transition-all resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-foody-red text-white text-sm font-medium rounded-full hover:bg-foody-red-dark transition-colors disabled:opacity-60"
                  >
                    {submitting ? "Sending..." : "Send message"}
                  </button>
                </form>

                <div className="border-t border-border pt-6 flex flex-col sm:flex-row flex-wrap gap-4 justify-center text-sm">
                  <a
                    href={`tel:${contactInfo.bulkOrders[0].tel}`}
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-foody-red transition-colors"
                  >
                    <Phone className="size-4" />
                    {contactInfo.bulkOrders[0].phone}
                  </a>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-foody-red transition-colors"
                  >
                    <Mail className="size-4" />
                    {contactInfo.email}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
