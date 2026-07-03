export type Partner = {
  name: string;
  desc: string;
  logo: string;
};

export type PartnerGroup = {
  id: string;
  title: string;
  partners: Partner[];
};

export const partnerGroups: PartnerGroup[] = [
  {
    id: "hyderabad",
    title: "Our Hyderabad Food Partners",
    partners: [
      {
        name: "Paradise Biryani",
        logo: "/images/partner-logo3.png",
        desc: "Relish the world-famous taste of Hyderabadi biryanis and authentic Mughlai cuisine. Every dish is a perfect blend of rich flavors and time-honored tradition.",
      },
      {
        name: "Bawarchi Restaurant",
        logo: "/images/bawarchi.jpg",
        desc: "Savor the Royal Flavors of Bawarchi — A Taste of Hyderabad's Heritage.",
      },
      {
        name: "Srikanya Comfort",
        logo: "/images/skc.png",
        desc: "Dive into the heart of homestyle North and South Indian cuisine. From hearty curries to flavorful rice dishes, every bite brings comfort and tradition.",
      },
      {
        name: "Shadab Biryani",
        logo: "/images/shadab.png",
        desc: "Savor the authentic taste of Hyderabadi cuisine, from aromatic biryanis to flavorful kebabs. Indulge in the rich culinary heritage of the region with every bite.",
      },
    ],
  },
  {
    id: "mumbai",
    title: "Our Mumbai Food Partners",
    partners: [
      {
        name: "Elco Chaat",
        logo: "/images/partner-logo2.png",
        desc: "Mumbai's famous street food icon, offers the most hygienic Chaats, brimming with authentic flavors.",
      },
      {
        name: "Bhagat Tara Chand",
        logo: "/images/bhagat.png",
        desc: "Enjoy soul-satisfying North Indian and Jain thali meals, from buttery dal fry to crisp tandoori rotis.",
      },
      {
        name: "Surbhi",
        logo: "/images/partner-logo.png",
        desc: "Bringing the true taste of Mumbai to travellers, Surbhi is renowned for its crispy Vada Pav, flavourful Samosas, and soft, spongy Dhoklas.",
      },
      {
        name: "Kyani & Co.",
        logo: "/images/kyani.svg",
        desc: "Mumbai's iconic Irani café brings its timeless charm to Foody's. Savor delicious muffins, pastries, plum cakes and more.",
      },
    ],
  },
  {
    id: "rajasthan",
    title: "Our Rajasthan Food Partners",
    partners: [
      {
        name: "DMB",
        logo: "/images/dbms.png",
        desc: "A taste of Rajasthan's rich culinary heritage — traditional sweets and authentic regional delicacies crafted with time-honoured recipes.",
      },
      {
        name: "Dosaka",
        logo: "/images/dosaka.png",
        desc: "A journey through the rich, vibrant flavours of South India — from crisp dosas to authentic coastal fare.",
      },
      {
        name: "Pandit Kulfi",
        logo: "/images/pandit-kulfi.png",
        desc: "Indulge in the creamy, delicious kulfi handcrafted with recipes passed through generations.",
      },
      {
        name: "Narayanji",
        logo: "/images/narayanji.png",
        desc: "Savor the timeless flavors of traditional gajak and chikki, crafted with authentic recipes since 1953.",
      },
    ],
  },
];

export const foodPartners: Partner[] = partnerGroups.flatMap((g) => g.partners);

export const corporatePartners: Omit<Partner, "logo">[] = [
  {
    name: "GMR Airport",
    desc: "Partnering across airport environments to bring convenient, quality food experiences to travellers.",
  },
  {
    name: "Adani Airport",
    desc: "Collaborating to serve travellers with trusted food options across modern airport destinations.",
  },
  {
    name: "Bharat Petroleum",
    desc: "Together with Bharat Petroleum, Foody's brings comfort and cuisine to highway travellers.",
  },
  {
    name: "Reliance Mumbai Metro",
    desc: "A symbol of progress, reliability, and the spirit of Mumbai's daily commute.",
  },
];
