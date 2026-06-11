import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PageHeader } from "@/components/PageHeader";
import { GrowthRoadmap } from "@/components/GrowthRoadmap";
import storyImg from "@/assets/story-craft.jpg";
import adcImage from "@/assets/adc-storefront.jpg";
import founder from "@/assets/team/founder-Mr.-Khan.jpg";
import venkatesh from "@/assets/team/P-Venkatesh-1.jpg";
import salim from "@/assets/team/Salim-Sheikh-1.jpg";
import ankur from "@/assets/team/Ankur-Sharma-1.jpg";
import shekar from "@/assets/team/shakher.jpg";

const team = [
  {
    name: "P. Venkatesh",
    role: "Operations Head (South)",
    img: venkatesh,
    bio: "Venkat, as he is popularly known, is the live wire that drives our growth in the Southern part of the Indian Peninsula. Deep understanding of consumer needs, a passion for processes and an undying commitment to growth of the brand — that's how Venkat will always be defined. Other than our outlets at RGIA Airport Hyderabad, Venkat has put his might behind our first QSR in tie up with BPCL at Karedu in Andhra Pradesh.",
  },
  {
    name: "Salim Sheikh",
    role: "Operations Head (West)",
    img: salim,
    bio: "Tact, patience and experience. These are three values that make up the very essence of Salim's work processes and ethics. As head of operations in the West where he handles a large and challenging business at the CSMI Airport, Salim has time and again handled Customers, Principals, customers and vendors with a remarkable indomitable spirit. His ability to develop product as per market needs is one of his many notable virtues.",
  },
  {
    name: "Ankur Sharma",
    role: "Operations Head (North)",
    img: ankur,
    bio: "Never say die, push on regardless. These are embedded into every plan and its execution where Ankur is concerned. Heading our operations in the North, Ankur has time and again showcased his ability to turn around challenging situations into wins. Primarily responsible for a tough assignment at Jaipur Airport, Ankur has led his team to win innumerable awards from the airport operator. His strength in team management is one of his many commendable virtues.",
  },
  {
    name: "CH. N.V.V. Chandra Shekar",
    role: "Head — Accounting",
    img: shekar,
    bio: "Our numbers man who keeps a close watch on COGs and Overheads. Shekar contributes immensely towards making our business model better with every passing day. His attention to detail in reporting keeps the Sales and procurement teams on their toes, ensuring a healthy EBITDA across all verticals. Shekar is also a pillar of support to the management through his strict vigil ensuring better utilisation of Capital.",
  },
];

const About = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 200);
      }
    }
  }, [location]);

  return (
    <>
      <PageHeader
        title="Bringing the best of local flavours to every traveller."
        description="Foody's is a customer-centric brand that leverages technology to enhance your food experience while you travel — handpicking the most iconic dishes from each city so travellers never miss a chance to taste the place they're passing through."
      />

      {/* About Foody's */}
      <section id="about-us" className="py-24 bg-white/80 backdrop-blur-sm scroll-mt-24">
        <div className="container grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-[4/5] overflow-hidden rounded-2xl shadow-lg"
          >
            <img src={storyImg} alt="Foody's signature dish" className="w-full h-full object-cover" loading="lazy" />
          </motion.div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-foody-green mb-4 font-medium">About Foody's</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Authenticity, convenience, <span className="text-foody-green">taste & quality.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              We handpick the best food items from each city's most popular places so that
              travellers don't miss a chance to try the best food that city has to offer.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Backed by a strong logistics network and FSSAI-certified processes, we promise
              food safety and freshness. Headquartered in Hyderabad, Foody's has operations in
              Hyderabad, Mumbai and Jaipur.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Foody's is currently present at Mumbai's Chhatrapati Shivaji Airport Terminal 2,
              Jaipur International Airport, and Hyderabad's Rajiv Gandhi International Airport.
            </p>
          </div>
        </div>
      </section>

      {/* Growth Roadmap */}
      <GrowthRoadmap />

      {/* Founder & Our Team */}
      <section id="founder" className="py-24 bg-white/80 backdrop-blur-sm scroll-mt-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-foody-green mb-4 font-medium">
              Founder & Our Team
            </p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              The passion <span className="text-foody-green">behind Foody's.</span>
            </h2>
          </motion.div>

          {/* Founder */}
          <div className="grid md:grid-cols-12 gap-10 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="md:col-span-4 max-w-xs mx-auto md:mx-0 aspect-[3/4] overflow-hidden rounded-2xl shadow-lg"
            >
              <img src={founder} alt="Mr. Khan, Founder of Foody's" className="w-full h-full object-cover object-top" loading="lazy" />
            </motion.div>
            <div className="md:col-span-8">
              <p className="text-xs uppercase tracking-[0.3em] text-foody-red mb-4 font-medium">Founder's Story</p>
              <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-2">
                Mr. Khan
              </h3>
              <p className="text-sm text-foody-green font-medium mb-6">Founder, Foody's</p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                During an evening like any other, Naeem and a friend were craving a good meal.
                Ordering your food of choice, however, wasn't as seamless as it should have been.
                This experience inspired Naeem to come up with the concept of Foody's that would
                eventually transform how people experience food, on the go.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Having a background in marketing and advertising, Mr. Khan was quite sensitive to
                consumer needs. He observed how often airport visitors were in a hurry yet longed
                for real local cuisine and food they found comfort or nostalgia in. He saw the same
                trend across India's growing metro and highway networks.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Driven to close this divide, he founded Foody's with the idea of providing
                travellers with top quality food without sacrificing authenticity, flavor and taste.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Foody's partners with only the best and most popular restaurants and brands from
                each region to ensure that a truly special, flavourful and authentic experience is
                provided to enhance peoples' journeys.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Foody's is bringing carefully curated local flavors to airports, metro stations,
                and highways as India's transport infrastructure keeps expanding.
              </p>
            </div>
          </div>

          {/* Team */}
          <div id="team" className="scroll-mt-24">
            <p className="text-xs uppercase tracking-[0.3em] text-foody-green mb-8 font-medium text-center">
              Our Team
            </p>
            <div className="grid md:grid-cols-2 gap-10">
              {team.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: (i % 2) * 0.1 }}
                  className="flex gap-8 items-start p-8 rounded-2xl bg-foody-gray/60 hover:bg-foody-gray transition-colors"
                >
                  <div className="size-36 md:size-40 shrink-0 overflow-hidden rounded-2xl shadow-md">
                    <img src={t.img} alt={t.name} className="w-full h-full object-cover object-top" loading="lazy" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">{t.name}</h4>
                    <p className="text-sm text-foody-green font-medium mb-3">{t.role}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{t.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What we deliver — moved below founder & team */}
      <section className="py-24 bg-foody-green text-white">
        <div className="container">
          <p className="text-xs uppercase tracking-[0.3em] text-white/70 mb-4 text-center font-medium">
            What we deliver
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-center max-w-3xl mx-auto mb-16 leading-tight">
            We don't just serve food — we deliver an{" "}
            <span className="text-white/80 italic">unforgettably refreshed</span> travel experience.
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { t: "Authentic Local Flavours", d: "Partnering with the most iconic and popular food restaurants of each region." },
              { t: "Hygiene & Quality Assurance", d: "FSSAI-certified processes and strict, repeatable quality checks." },
              { t: "Seamless Customer Experience", d: "Carefully curated menus and tech-enabled ordering for travellers in a hurry." },
            ].map((v, i) => (
              <motion.div
                key={v.t}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="border-t border-white/20 pt-8"
              >
                <p className="text-white/60 text-sm tracking-[0.25em] uppercase mb-4">
                  0{i + 1}
                </p>
                <h3 className="text-2xl font-bold mb-4">{v.t}</h3>
                <p className="text-white/70 leading-relaxed">{v.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Andhra Dosa Company */}
      <section id="andhra-dosa" className="py-24 bg-foody-gray/50 scroll-mt-24">
        <div className="container grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-foody-green mb-4 font-medium">
              Our Story
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Andhra Dosa <span className="text-foody-green">Company</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Andhra Dosa Company is powered by Foody's, one of India's growing food and
              hospitality brands focused on delivering authentic regional cuisine at scale.
              Created to celebrate the rich flavours of Andhra and South Indian cooking,
              Andhra Dosa Company combines time-honoured recipes with modern food service
              standards to ensure every meal is fresh, consistent, and full of flavour.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              While Andhra Dosa Company has its own identity and culinary focus, it shares
              Foody's larger vision of bringing India's most loved regional foods closer to
              people. Together, we are building destinations where authenticity meets
              convenience—serving food that feels familiar, comforting, and unmistakably South
              Indian, wherever you are.
            </p>
            <a
              href="https://andhradosaco.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-foody-red font-medium hover:underline"
            >
              Visit Andhra Dosa Co. →
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
              <img
                src={adcImage}
                alt="Andhra Dosa Co. storefront"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col items-center gap-3">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-medium">
                Powered by
              </p>
              <img
                src="/images/website-logo.png"
                alt="Foody's"
                className="h-16 md:h-20 w-auto object-contain"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
