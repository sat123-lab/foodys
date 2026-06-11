import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { contactInfo } from "@/data/contact";

const features = [
  {
    title: "Complex solutions",
    desc: "Congue lorem ipsum dolor ipsum faucibus mi et, scelerisque mauris. rutrum lorem ipsum dolor. Morbi from ipsum amet - eget augue bibendum, lorem ipsum faucibus mi et.",
  },
  {
    title: "High quality standards",
    desc: "Congue lorem ipsum dolor- rutrum dapibus massa Leo lorem ipsum dolor. Morbi from ipsum amet - eget augue bibendum, lorem ipsum. Aenean dapibus massa leo.",
  },
  {
    title: "Leading experts",
    desc: "Lorem ipsum dolor. Morbi ipsum faucibus mauris. Aenean dapibus massa leo. from ipsum - eget augue bibendum, lorem ipsum faucibus mi et.",
  },
  {
    title: "Flexible prices",
    desc: "Aenean dapibus massa leo! Congue lorem ipsum dolor- rutrum lorem ipsum dolor. Morbi from ipsum amet - eget augue bibendum, lorem ipsum faucibus mi et.",
  },
];

const team = [
  { name: "Jessica Brown", role: "Marketing director", image: "/images/team1.jpg" },
  { name: "Diana Green", role: "Accounting director", image: "/images/team2.jpg" },
];

export const FeaturesGridSection = () => (
  <section className="py-16 md:py-24 bg-foody-gray">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {team.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
          >
            <img
              src={member.image}
              alt={member.name}
              className="size-20 md:size-24 rounded-full object-cover"
            />
            <div>
              <h5 className="font-bold text-lg">{member.name}</h5>
              <p className="text-muted-foreground text-sm">{member.role}</p>
              <button className="text-foody-red text-sm font-medium mt-2 hover:underline">
                Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 bg-white rounded-2xl hover:-translate-y-1 transition-transform duration-300 shadow-sm"
          >
            <h4 className="font-bold text-lg mb-3 text-foody-green">{f.title}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export const CtaDualSection = () => (
  <section className="grid md:grid-cols-2">
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-foody-green text-white py-16 md:py-20 px-8 md:px-12 lg:px-16"
    >
      <h3 className="text-2xl md:text-3xl font-bold mb-4">Hey Foodies! Craving delicious bites</h3>
      <p className="text-white/80 mb-8 max-w-md">
        Speak to us for the best travel-friendly food recommendations and flavors
      </p>
      <p className="text-sm text-white/70 mb-1">Hyderabad:</p>
      <a
        href={`tel:${contactInfo.bulkOrders[0].tel}`}
        className="text-2xl md:text-3xl font-bold mb-2 block hover:text-white/90 transition-colors"
      >
        {contactInfo.bulkOrders[0].phone}
      </a>
      <p className="text-sm text-white/70 mb-8">{contactInfo.bulkOrders[0].email}</p>
      <Link to="/contact" className="btn-foody inline-flex items-center gap-2">
        <Phone className="size-4" />
        Speak to us
      </Link>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-foody-red text-white py-16 md:py-20 px-8 md:px-12 lg:px-16"
    >
      <h3 className="text-2xl md:text-3xl font-bold mb-4">Are you a Foody?</h3>
      <p className="text-white/80 mb-8 max-w-md">
        Join our network of partners and bring iconic flavours to travellers everywhere.
      </p>
      <p className="text-sm text-white/70 mb-1">Mumbai:</p>
      <a
        href={`tel:${contactInfo.bulkOrders[1].tel}`}
        className="text-2xl md:text-3xl font-bold mb-2 block hover:text-white/90 transition-colors"
      >
        {contactInfo.bulkOrders[1].phone}
      </a>
      <p className="text-sm text-white/70 mb-8">{contactInfo.bulkOrders[1].email}</p>
      <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-medium bg-foody-green text-white hover:bg-foody-green-dark transition-all duration-300 hover:-translate-y-0.5 shadow-lg">
        <Phone className="size-4" />
        Speak to us
      </Link>
    </motion.div>
  </section>
);

const projects = [
  { name: "Code Lab", desc: "Ut elit luctus nec ullamcorper" },
  { name: "Atica Agency", desc: "Morbi at laoreet mauris dolor amet glavrida ipsum." },
  { name: "Utosia", desc: "Lorem ipsum dolor sit amet scelerisque ipsum." },
  { name: "Kyan", desc: "Nulla a velit quis ex ornare rhoncus." },
  { name: "Ztos Development", desc: "Lorem varius – natoque penatibus ipsum dolor sit amet." },
  { name: "Amara", desc: "Nam a fringilla nulla, sit amet pretium libero." },
];

export const PortfolioSection = () => (
  <section className="py-16 md:py-24 bg-white">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="section-title mb-4">Completed projects</h2>
        <p className="section-subtitle">Our portfolio speaks better than words!</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group p-8 rounded-2xl bg-foody-gray hover:bg-foody-green transition-colors duration-500 cursor-pointer"
          >
            <h4 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">{p.name}</h4>
            <p className="text-sm text-muted-foreground group-hover:text-white/80 transition-colors">{p.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-10"
      >
        <button className="text-foody-red font-medium hover:underline">Discover more projects</button>
      </motion.div>
    </div>
  </section>
);

const testimonials = [
  {
    name: "Ricardo Black",
    role: "Seven Dev - founder",
    quote: "Luctus nec ullamcorper mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    name: "Tiffany Richards",
    role: "Seven Media - executive producer",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    name: "Stefan Brown",
    role: "Seven Digital - executive producer",
    quote: "Item luctus nec ullamcorper mattit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
  },
];

export const TestimonialsSection = () => (
  <section className="py-16 md:py-24 bg-foody-gray overflow-hidden">
    <div className="container">
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-white p-8 rounded-2xl shadow-sm relative"
          >
            <div className="text-foody-green text-4xl font-body leading-none mb-4">"</div>
            <p className="text-muted-foreground leading-relaxed mb-6">{t.quote}</p>
            <div>
              <h5 className="font-bold">{t.name}</h5>
              <p className="text-sm text-foody-red">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const steps = [
  { no: "01", title: "Research", desc: "Glavrida ipsum – augue bibendum, faucibus mi et, scelerisque mauris. Aenean dapibus massa a sapien hendrerit." },
  { no: "02", title: "Planning", desc: "Glavrida ipsum – augue bibendum, faucibus mi et, scelerisque mauris. Aenean dapibus massa a sapien hendrerit." },
  { no: "03", title: "Implementation", desc: "Glavrida ipsum – augue bibendum, faucibus mi et, scelerisque mauris. Aenean dapibus massa a sapien hendrerit." },
  { no: "04", title: "Results", desc: "Augue bibendum, faucibus mi et, scelerisque mauris. Aenean dapibus massa a sapien hendrerit. Lorem ipsum dolor!" },
];

export const HowWeWorkSection = () => (
  <section className="py-16 md:py-24 bg-white">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="section-title mb-4">How we work</h2>
        <p className="section-subtitle">Don't be busy – be productive!</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={step.no}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="text-center group"
          >
            <div className="text-5xl md:text-6xl font-bold text-foody-green/20 group-hover:text-foody-green transition-colors duration-500 mb-4">
              {step.no}
            </div>
            <h4 className="text-xl font-bold mb-3">{step.title}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export const QuoteSection = () => (
  <section className="py-16 md:py-24 bg-foody-green text-white">
    <div className="container max-w-4xl text-center">
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl md:text-4xl font-bold mb-6 leading-snug"
      >
        If the plan doesn't work – change the plan, not the goal.
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-white/80 leading-relaxed"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
        ullamcorper mattis, pulvinar dapibus velit quis ex ornare rhoncus. Donec imperdiet risus
        justo, vel malesuada erat fermentum at. Morbi at laoreet mauris!
      </motion.p>
    </div>
  </section>
);

export const BlogSection = () => (
  <section className="py-16 md:py-24 bg-foody-gray">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12"
      >
        <div>
          <h2 className="section-title mb-2">From our blog</h2>
          <p className="section-subtitle">Latest news & events</p>
        </div>
        <Link to="/about" className="text-foody-red font-medium hover:underline">
          More articles
        </Link>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: "Food For Travel", date: "March 2025" },
          { title: "Indian Cuisine Excellence", date: "February 2025" },
          { title: "Partner Spotlight", date: "January 2025" },
        ].map((post, i) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer"
          >
            <div className="aspect-video bg-foody-green/20 group-hover:bg-foody-green/30 transition-colors" />
            <div className="p-6">
              <p className="text-xs text-muted-foreground mb-2">{post.date}</p>
              <h4 className="font-bold text-lg group-hover:text-foody-green transition-colors">{post.title}</h4>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);
