import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import adcImage from "@/assets/adc-storefront.jpg";

const partners = [
  { name: "SKC", logo: "/images/skc.png" },
  { name: "Shadab Biryani", logo: "/images/shadab.png" },
  { name: "Partner 3", logo: "/images/partner-logo3.png" },
  { name: "Partner 2", logo: "/images/partner-logo2.png" },
  { name: "Partner 1", logo: "/images/partner-logo1.png" },
  { name: "Partner", logo: "/images/partner-logo.png" },
  { name: "Pandit Kulfi", logo: "/images/pandit-kulfi.png" },
  { name: "Narayanji", logo: "/images/narayanji.png" },
  { name: "Dosaka", logo: "/images/dosaka.png" },
  { name: "DBMS", logo: "/images/dbms.png" },
  { name: "Bhagat Tara Chand", logo: "/images/bhagat.png" },
  { name: "Bawarchi Restaurant", logo: "/images/bawarchi.jpg" },
];

export const PartnersSection = () => (
  <section className="py-16 md:py-24 bg-white">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h4 className="text-foody-green font-semibold text-lg mb-2">Our Food Partners</h4>
      </motion.div>
    </div>

    <div className="relative overflow-hidden w-full">
      <div className="flex w-max flex-nowrap animate-marquee">
        {[...partners, ...partners].map((p, i) => (
          <div
            key={`${p.name}-${i}`}
            className="shrink-0 flex items-center justify-center px-10 md:px-14 py-4"
          >
            <img
              src={p.logo}
              alt={p.name}
              className="h-16 md:h-20 w-auto max-w-[180px] object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

type VerticalCard = {
  title: string;
  image: string;
  link: string;
  external?: boolean;
};

const verticals: VerticalCard[] = [
  {
    title: "Airports",
    image: "/images/airport-new.jpg",
    link: "/verticals#airports",
  },
  {
    title: "Highways",
    image: "/images/highway-2.jpg",
    link: "/verticals#highways",
  },
  {
    title: "Metros",
    image: "/images/metro.jpg",
    link: "/verticals#metros",
  },
  {
    title: "ADC",
    image: adcImage,
    link: "https://andhradosaco.com/",
    external: true,
  },
];

export const WhereWeAreSection = () => (
  <section className="py-16 md:py-24 bg-foody-gray">
    <div className="container">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title text-center mb-12 md:mb-16"
      >
        Where will you find us?
      </motion.h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
        {verticals.map((v, i) => {
          const cardContent = (
            <>
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-4">
                <img
                  src={v.image}
                  alt={v.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foody-green/20 group-hover:bg-foody-green/5 transition-colors duration-500 ease-out" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">{v.title}</h3>
              <span className="inline-flex items-center text-foody-red font-medium gap-1 transition-all duration-300 ease-out group-hover:gap-2">
                Explore
                <span className="transition-transform duration-300 ease-out group-hover:translate-x-1">→</span>
              </span>
            </>
          );

          return (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              {v.external ? (
                <a
                  href={v.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {cardContent}
                </a>
              ) : (
                <Link to={v.link} className="block">
                  {cardContent}
                </Link>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

const deliverItems = [
  {
    title: "Curated Thoughtfully",
    desc: "We handpick the best of local flavours and global favourites, to enhance your journey experience.",
  },
  {
    title: "Seamless Convenience",
    desc: "Access to your favourite meals whether you are taking a flight, riding a metro or driving across highways.",
  },
  {
    title: "Reliability",
    desc: "Consistent food experience, every time.",
  },
];

export const WhatWeDeliverSection = () => (
  <section className="py-16 md:py-24 bg-white">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          What do we deliver?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-subtitle text-base md:text-lg"
        >
          The best of your Favourite food choices while you travel. We bring your favourite food
          choices where you least expect them, and yet might be craving them.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {deliverItems.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className="p-8 rounded-2xl bg-foody-gray hover:bg-foody-green/10 transition-colors duration-500 group"
          >
            <div className="size-12 rounded-full bg-foody-green/15 flex items-center justify-center mb-6 group-hover:bg-foody-green group-hover:text-white transition-colors duration-500">
              <span className="text-foody-green group-hover:text-white font-bold text-lg">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <h4 className="text-xl font-bold mb-3">{item.title}</h4>
            <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
