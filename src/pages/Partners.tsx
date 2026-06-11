import { motion } from "framer-motion";
import { PageHeader } from "@/components/PageHeader";
import { partnerGroups } from "@/data/partners";

const PartnerCard = ({ partner, index }: { partner: (typeof partnerGroups)[0]["partners"][0]; index: number }) => (
  <motion.article
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.55, delay: (index % 4) * 0.06 }}
    className="flex flex-col items-center text-center px-4 py-6"
  >
    <div className="h-24 w-full mb-6 flex items-center justify-center">
      <img
        src={partner.logo}
        alt={`${partner.name} logo`}
        className="max-h-full max-w-[180px] w-auto object-contain"
        loading="lazy"
      />
    </div>
    <h3 className="text-lg md:text-xl font-bold mb-3 leading-snug">{partner.name}</h3>
    <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">{partner.desc}</p>
  </motion.article>
);

const Partners = () => (
  <>
    <PageHeader
      title="India's most loved kitchens, amplified."
      description="We don't reinvent recipes — we protect them. Each partner brings decades (sometimes a century) of culinary heritage to our network."
    />

    <section id="fb" className="py-16 md:py-20 bg-white scroll-mt-24">
      <div className="container space-y-16 md:space-y-20">
        {partnerGroups.map((group) => (
          <div key={group.id}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl font-bold text-center mb-10 md:mb-12"
            >
              {group.title}
            </motion.h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
              {group.partners.map((partner, i) => (
                <PartnerCard key={partner.name} partner={partner} index={i} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>

    <section id="corporate" className="py-16 md:py-20 bg-foody-gray/40 scroll-mt-24">
      <div className="container max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl md:text-2xl font-bold mb-4">Corporate Partners</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Foody's collaborates with leading infrastructure and transport operators to bring
            iconic food experiences to travellers across India.
          </p>
          <p className="text-lg font-semibold text-foody-green">Mumbai Metro</p>
        </motion.div>
      </div>
    </section>
  </>
);

export default Partners;
