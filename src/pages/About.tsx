import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PageHeader } from "@/components/PageHeader";
import { CtaBanner } from "@/components/sections/CtaBanner";
import storyImg from "@/assets/story-craft.jpg";
import spices from "@/assets/spices.jpg";
import founder from "@/assets/founder-naeem.jpg";
import venkatesh from "@/assets/team-venkatesh.jpg";
import salim from "@/assets/team-salim.jpg";
import ankur from "@/assets/team-ankur.jpg";
import shekar from "@/assets/team-shekar.jpg";
import bgAbout from "@/assets/bg-about.mp4.asset.json";

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
    bio: "Tact, patience and experience. These are three values that make up the very essence of Salim's work processes and ethics. As head of operations in the West where he handles a large and challenging business at the CSMI Airport, Salim has time and again handled customers, principals and vendors with a remarkable indomitable spirit. His ability to develop product as per market needs is one of his many notable virtues.",
  },
  {
    name: "Ankur Sharma",
    role: "Operations Head (North)",
    img: ankur,
    bio: "Never say die, push on regardless. These values are embedded into every plan and its execution where Ankur is concerned. Heading our operations in the North, Ankur has time and again showcased his ability to turn around challenging situations into wins. Primarily responsible for a tough assignment at Jaipur Airport, Ankur has led his team to win innumerable awards from the airport operator.",
  },
  {
    name: "CH. N.V.V. Chandra Shekar",
    role: "Head — Accounting",
    img: shekar,
    bio: "Our numbers man who keeps a close watch on COGs and Overheads. Shekar contributes immensely towards making our business model better with every passing day. His attention to detail in reporting keeps the Sales and procurement teams on their toes, ensuring a healthy EBITDA across all verticals. Shekar is also a pillar of support to the management through his strict vigil ensuring better utilisation of capital.",
  },
];

const milestones = [
  { year: "2020", text: "Opened our first restaurant at Rajiv Gandhi International Airport (RGIA), Hyderabad." },
  { year: "2021", text: "Added an outlet at Aero Plaza Food Court, Hyderabad." },
  { year: "2022", text: "Expanded into Mumbai's CSMI Airport (T2) with two outlets — growing to nine outlets in just 24 months." },
  { year: "2022", text: "Launched at Jaipur International Airport with three outlets." },
  { year: "2023-24", text: "Grew further with new outlets at RGIA Domestic and International Departures." },
  { year: "2025", text: "Opening dine-in & take-away outlets at Reliance Mumbai Metro — Western Express Highway and Marol stations." },
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
        videoSrc={bgAbout.url}
        overlayClassName="bg-paper/80"
        title={
          <>
            Bringing the best of local flavours to <span className="italic font-light text-terracotta">every traveller.</span>
          </>
        }
        description="Foody's is a customer-centric brand that leverages technology to enhance your food experience while you travel — handpicking the most iconic dishes from each city so travellers never miss a chance to taste the place they're passing through."
      />

      {/* About Foody's */}
      <section id="about-us" className="py-24 bg-cream grain scroll-mt-24">
        <div className="container grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-[4/5] overflow-hidden shadow-warm"
          >
            <img src={storyImg} alt="Foody's signature dish" className="w-full h-full object-cover" loading="lazy" />
          </motion.div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-terracotta mb-4">About Foody's</p>
            <h2 className="font-serif text-4xl md:text-5xl mb-6 leading-tight">
              Authenticity, convenience, <span className="italic">taste & quality.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              We handpick the best food items from each city's most popular places so that
              travellers don't miss a chance to try the best food that city has to offer. Our
              focus is on authenticity, convenience, taste and quality.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Backed by a strong logistics network and FSSAI-certified processes, we promise
              food safety and freshness. Headquartered in Hyderabad, Foody's has operations in
              Hyderabad, Mumbai and Jaipur — and we continue to grow so more travellers can
              access local flavours at travel hubs.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Foody's is currently present at Mumbai's Chhatrapati Shivaji Airport Terminal 2
              (domestic & international), Jaipur International Airport, and Hyderabad's Rajiv
              Gandhi International Airport. Our partnership with Bharat Petroleum (BPCL) brings
              premium dine-in cafés to the Jaipur–Ajmer and Nellore highways. In summer 2025,
              we open at the Reliance Mumbai Metro's Western Express Highway and Marol stations.
            </p>
          </div>
        </div>
      </section>

      {/* What we deliver */}
      <section className="py-24 bg-ink text-ink-foreground grain">
        <div className="container">
          <p className="text-xs uppercase tracking-[0.3em] text-saffron mb-4 text-center">What we deliver</p>
          <h2 className="font-serif text-4xl md:text-5xl text-center max-w-3xl mx-auto mb-16 leading-tight">
            We don't just serve food — we deliver an <span className="italic">unforgettably refreshed</span> travel experience.
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
                className="border-t border-white/15 pt-8"
              >
                <p className="text-saffron text-sm tracking-[0.25em] uppercase mb-4">0{i + 1}</p>
                <h3 className="font-serif text-3xl mb-4">{v.t}</h3>
                <p className="text-white/60 leading-relaxed">{v.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth story */}
      <section id="growth" className="py-24 bg-paper grain scroll-mt-24">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-terracotta mb-4">Our growth story</p>
            <h2 className="font-serif text-4xl md:text-6xl leading-[0.95] mb-6">
              From one airport outlet to a <span className="italic text-terracotta">national presence.</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Our journey began in October 2020 with a single restaurant at RGIA Hyderabad. The
              overwhelming response from travellers set us on an expansion path that today spans
              airports, highways and metros across India.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 max-w-5xl">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="flex gap-6 border-t border-ink/15 pt-6"
              >
                <p className="font-serif text-3xl text-terracotta shrink-0 w-28">{m.year}</p>
                <p className="text-muted-foreground leading-relaxed">{m.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder's story */}
      <section id="founder" className="py-24 bg-cream grain scroll-mt-24">
        <div className="container grid md:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="md:col-span-5 aspect-[4/5] overflow-hidden shadow-warm"
          >
            <img src={founder} alt="Naeem Khan, Founder of Foody's" className="w-full h-full object-cover" loading="lazy" />
          </motion.div>
          <div className="md:col-span-7">
            <p className="text-xs uppercase tracking-[0.3em] text-terracotta mb-4">Founder's Story</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
              A vision born from a craving for <span className="italic">good food, on time.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              During an evening like any other, Naeem and a friend were craving a good meal.
              Ordering food of choice, however, wasn't as seamless as it should have been. That
              experience inspired Naeem to create Foody's — a brand that would eventually
              transform how people experience food, on the go.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              With a background in marketing and advertising, Mr. Khan is deeply attuned to
              consumer needs. He observed how often airport visitors were in a hurry yet longed
              for real local cuisine and food they found comfort or nostalgia in — and saw the
              same trend across India's growing metro and highway networks.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Driven to close that divide, he founded Foody's to give travellers top-quality
              food without sacrificing authenticity, flavour or taste — partnering only with the
              best and most popular restaurants from each region.
            </p>
          </div>
        </div>
      </section>

      {/* Our team */}
      <section id="team" className="py-24 bg-paper grain scroll-mt-24">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-terracotta mb-4">Our Team</p>
            <h2 className="font-serif text-4xl md:text-6xl leading-[0.95] mb-6">
              The passion <span className="italic text-terracotta">behind Foody's.</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Great experiences are created by great people. Our team is a dynamic mix of food
              lovers, tech geeks, hospitality specialists and logistics experts, all driven by a
              shared vision — to make fresh, authentic cuisine available to travellers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {team.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: (i % 2) * 0.1 }}
                className="grid grid-cols-3 gap-6 items-start"
              >
                <div className="aspect-[4/5] overflow-hidden shadow-warm">
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="col-span-2">
                  <h3 className="font-serif text-2xl mb-1">{t.name}</h3>
                  <p className="text-sm text-terracotta uppercase tracking-[0.2em] mb-4">{t.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Spices band */}
      <section className="py-24 bg-ink text-ink-foreground grain">
        <div className="container grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <p className="text-xs uppercase tracking-[0.3em] text-saffron mb-4">The pantry</p>
            <h2 className="font-serif text-4xl md:text-6xl leading-[0.95]">
              Spices sourced direct from <span className="italic text-saffron">family farms.</span>
            </h2>
            <p className="mt-6 text-white/70 text-lg max-w-xl">
              Saffron from Kashmir, cardamom from Kerala, chillies from Guntur — every spice has
              a postcode, and every plate carries its story.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="md:col-span-5 aspect-square overflow-hidden"
          >
            <img src={spices} alt="Indian spices in copper bowls" className="w-full h-full object-cover" loading="lazy" />
          </motion.div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
};

export default About;
