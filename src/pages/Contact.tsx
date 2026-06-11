import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PageHeader } from "@/components/PageHeader";
import { contactInfo } from "@/data/contact";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const Contact = () => (
  <>
    <PageHeader title="Contact" description="Questions? Let's talk!" />

    <section className="py-14 md:py-20 bg-foody-gray/50">
      <div className="container max-w-5xl">
        <div className="grid sm:grid-cols-2 gap-6 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border/60 bg-white p-8 shadow-sm"
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="size-12 rounded-full bg-foody-red/10 flex items-center justify-center">
                <Mail className="size-5 text-foody-red" />
              </div>
              <h3 className="text-lg font-bold">Mail</h3>
            </div>
            <a
              href={`mailto:${contactInfo.email}`}
              className="text-muted-foreground hover:text-foody-red transition-colors"
            >
              {contactInfo.email}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="rounded-2xl border border-border/60 bg-white p-8 shadow-sm"
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="size-12 rounded-full bg-foody-red/10 flex items-center justify-center">
                <MapPin className="size-5 text-foody-red" />
              </div>
              <h3 className="text-lg font-bold">Corporate Office</h3>
            </div>
            <address className="not-italic text-muted-foreground leading-relaxed text-sm">
              {contactInfo.company}
              <br />
              {contactInfo.address.line1}
              <br />
              {contactInfo.address.line2}
            </address>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12 }}
          className="rounded-2xl border border-border/60 bg-white p-8 shadow-sm mb-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="size-12 rounded-full bg-foody-red/10 flex items-center justify-center">
              <MessageCircle className="size-5 text-foody-red" />
            </div>
            <h3 className="text-lg font-bold">Bulk Orders</h3>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {contactInfo.bulkOrders.map((office) => (
              <div
                key={office.city}
                className="rounded-xl bg-foody-gray/50 border border-border/40 p-5"
              >
                <p className="font-semibold text-foreground mb-3">{office.city}</p>
                <a
                  href={`mailto:${office.email}`}
                  className="text-sm text-muted-foreground hover:text-foody-red transition-colors block mb-1"
                >
                  {office.email}
                </a>
                <a
                  href={`tel:${office.tel}`}
                  className="text-sm text-muted-foreground hover:text-foody-red transition-colors block"
                >
                  {office.phone}
                </a>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href={`tel:${contactInfo.bulkOrders[0].tel}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-foody-red text-white rounded-full text-sm font-medium hover:bg-foody-red-dark transition-colors"
          >
            <Phone className="size-4" />
            Call Us
          </a>
          <a
            href={`mailto:${contactInfo.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-foody-green text-white rounded-full text-sm font-medium hover:bg-foody-green-dark transition-colors"
          >
            <Mail className="size-4" />
            Email Us
          </a>
        </motion.div>
      </div>
    </section>
  </>
);

export default Contact;
