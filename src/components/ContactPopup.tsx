import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Phone, Mail, Clock } from "lucide-react";

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactPopup = ({ isOpen, onClose }: ContactPopupProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div 
              className="relative w-full max-w-2xl bg-background rounded-3xl border border-terracotta/20 shadow-[0_30px_80px_-15px_rgba(60,20,5,0.3)] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="relative h-2 bg-gradient-spice" />
              
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-cream/60 hover:bg-cream transition-colors z-10"
                aria-label="Close contact popup"
              >
                <X className="size-5 text-ink" />
              </button>
              
              {/* Content */}
              <div className="p-8 md:p-10">
                {/* Title */}
                <div className="text-center mb-10">
                  <h2 className="font-serif text-4xl md:text-5xl font-black text-ink mb-4">
                    Get in Touch
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    We'd love to hear from you. Reach out to us anytime.
                  </p>
                </div>
                
                {/* Contact Information Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Corporate Office */}
                  <div className="space-y-6">
                    <h3 className="font-serif text-2xl font-bold text-terracotta">
                      Corporate Office
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="size-5 text-terracotta mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-ink">Foody's Food Courts Pvt. Ltd.</p>
                          <p className="text-sm text-muted-foreground">
                            Plot No. 12, Banjara Hills,<br />
                            Hyderabad, Telangana 500034<br />
                            India
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Phone className="size-5 text-terracotta flex-shrink-0" />
                        <div>
                          <p className="font-medium text-ink">+91 40 1234 5678</p>
                          <p className="text-sm text-muted-foreground">Mon - Sat, 9:00 AM - 6:00 PM</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Mail className="size-5 text-terracotta flex-shrink-0" />
                        <div>
                          <p className="font-medium text-ink">info@foodys.com</p>
                          <p className="text-sm text-muted-foreground">General inquiries</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Branch Offices */}
                  <div className="space-y-6">
                    <h3 className="font-serif text-2xl font-bold text-terracotta">
                      Branch Offices
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium text-ink mb-1">Mumbai Office</p>
                        <p className="text-sm text-muted-foreground">
                          +91 22 1234 5678<br />
                          mumbai@foodys.com
                        </p>
                      </div>
                      
                      <div>
                        <p className="font-medium text-ink mb-1">Jaipur Office</p>
                        <p className="text-sm text-muted-foreground">
                          +91 141 1234 5678<br />
                          jaipur@foodys.com
                        </p>
                      </div>
                      
                      <div className="flex items-center gap-3 pt-2">
                        <Clock className="size-5 text-terracotta flex-shrink-0" />
                        <div>
                          <p className="font-medium text-ink">Business Hours</p>
                          <p className="text-sm text-muted-foreground">
                            Monday - Saturday: 9:00 AM - 6:00 PM<br />
                            Sunday: Closed
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Quick Actions */}
                <div className="border-t border-cream pt-8">
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="tel:+914012345678"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-terracotta text-white rounded-full hover:bg-ink transition-colors duration-300"
                    >
                      <Phone className="size-4" />
                      Call Us
                    </a>
                    <a
                      href="mailto:info@foodys.com"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-cream text-ink rounded-full hover:bg-terracotta hover:text-white transition-colors duration-300"
                    >
                      <Mail className="size-4" />
                      Email Us
                    </a>
                  </div>
                </div>
                
                {/* Footer */}
                <div className="text-center mt-8 pt-6 border-t border-cream">
                  <p className="text-sm text-muted-foreground">
                    Serving delicious food across 12+ airports, 40+ highways, and 8+ metro stations
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
