import { motion } from "framer-motion";
import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { toast } from "sonner";
import bgContact from "@/assets/bg-contact.mp4.asset.json";

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Thanks — we'll be in touch within 48 hours.");
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <>
      <PageHeader
        videoSrc={bgContact.url}
        overlayClassName="bg-paper/80"
        title={
          <>
            Let's cook <span className="italic font-light text-terracotta">something together.</span>
          </>
        }
        description="Concession enquiries, brand partnerships, supplier proposals or press — drop us a line."
      />

      <section className="py-24 bg-paper grain">
        <div className="container grid md:grid-cols-12 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5 space-y-10"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-terracotta mb-3">Headquarters</p>
              <p className="font-serif text-2xl leading-snug">
                Foody's Hospitality Pvt. Ltd.<br />
                Banjara Hills, Road No. 12<br />
                Hyderabad, Telangana 500034
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-terracotta mb-3">General</p>
              <a href="mailto:hello@foodys.com" className="font-serif text-3xl text-ink hover:text-terracotta transition-colors">
                hello@foodys.com
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-terracotta mb-3">Partnerships</p>
              <a href="mailto:partners@foodys.com" className="font-serif text-3xl text-ink hover:text-terracotta transition-colors">
                partners@foodys.com
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-terracotta mb-3">Phone</p>
              <a href="tel:+914012345678" className="font-serif text-3xl text-ink hover:text-terracotta transition-colors">
                +91 40 1234 5678
              </a>
            </div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:col-span-7 space-y-6"
          >
            {[
              { name: "name", label: "Your name", type: "text" },
              { name: "email", label: "Email", type: "email" },
              { name: "company", label: "Company / Organisation", type: "text" },
            ].map((f) => (
              <div key={f.name}>
                <label className="text-xs uppercase tracking-[0.25em] text-muted-foreground block mb-3">
                  {f.label}
                </label>
                <input
                  type={f.type}
                  name={f.name}
                  required
                  className="w-full bg-transparent border-b border-ink/20 focus:border-terracotta py-3 text-lg outline-none transition-colors font-serif"
                />
              </div>
            ))}
            <div>
              <label className="text-xs uppercase tracking-[0.25em] text-muted-foreground block mb-3">
                Tell us more
              </label>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full bg-transparent border-b border-ink/20 focus:border-terracotta py-3 text-lg outline-none transition-colors font-serif resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-ink text-ink-foreground hover:bg-terracotta transition-colors duration-300 disabled:opacity-60"
            >
              <span className="tracking-wide">{submitting ? "Sending..." : "Send message"}</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
          </motion.form>
        </div>
      </section>
    </>
  );
};

export default Contact;
