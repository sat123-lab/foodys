import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Plane, MapPin, Building2, Train, Globe, Rocket } from "lucide-react";

interface Milestone {
  id: number;
  title: string;
  date: string;
  content: string;
  icon: React.ElementType;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
}

const milestones: Milestone[] = [
  {
    id: 1,
    title: "RGIA Hyderabad",
    date: "2020",
    content: "Opened our first restaurant at Rajiv Gandhi International Airport (RGIA), Hyderabad.",
    icon: Plane,
    relatedIds: [2],
    status: "completed",
  },
  {
    id: 2,
    title: "Aero Plaza",
    date: "2021",
    content: "Added an outlet at Aero Plaza Food Court, Hyderabad.",
    icon: Building2,
    relatedIds: [1, 3],
    status: "completed",
  },
  {
    id: 3,
    title: "Mumbai CSMI",
    date: "2022",
    content: "Expanded into Mumbai's CSMI Airport (T2) with two outlets — growing to nine outlets in just 24 months.",
    icon: Plane,
    relatedIds: [2, 4],
    status: "completed",
  },
  {
    id: 4,
    title: "Jaipur Airport",
    date: "2022",
    content: "Launched at Jaipur International Airport with three outlets.",
    icon: MapPin,
    relatedIds: [3, 5],
    status: "completed",
  },
  {
    id: 5,
    title: "RGIA Expansion",
    date: "2023-24",
    content: "Grew further with new outlets at RGIA Domestic and International Departures.",
    icon: Globe,
    relatedIds: [4, 6],
    status: "completed",
  },
  {
    id: 6,
    title: "Mumbai Metro",
    date: "2025",
    content: "Opening dine-in & take-away outlets at Reliance Mumbai Metro — Western Express Highway and Marol stations.",
    icon: Train,
    relatedIds: [5],
    status: "in-progress",
  },
];

export const GrowthRoadmap = () => {
  const [rotationAngle, setRotationAngle] = useState(0);
  const [activeId, setActiveId] = useState<number | null>(null);
  const [autoRotate, setAutoRotate] = useState(true);

  useEffect(() => {
    if (!autoRotate) return;
    const timer = setInterval(() => {
      setRotationAngle((prev) => (prev + 0.25) % 360);
    }, 50);
    return () => clearInterval(timer);
  }, [autoRotate]);

  const calculatePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = 160;
    const radian = (angle * Math.PI) / 180;
    const x = radius * Math.cos(radian);
    const y = radius * Math.sin(radian);
    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(0.5, Math.min(1, 0.5 + 0.5 * ((1 + Math.sin(radian)) / 2)));
    return { x, y, zIndex, opacity };
  };

  const active = milestones.find((m) => m.id === activeId);

  return (
    <section id="growth" className="py-16 md:py-24 bg-white scroll-mt-24 relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-8 md:mb-12"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-foody-green mb-4 font-medium">
            Our growth story
          </p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            From one airport outlet to a{" "}
            <span className="text-foody-green">national presence.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our journey began in October 2020 with a single restaurant at RGIA Hyderabad. The
            overwhelming response from travellers set us on an expansion path that today spans
            airports, highways and metros across India.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Orbital roadmap */}
          <div
            className="relative h-[400px] md:h-[480px] flex items-center justify-center"
            onClick={() => { setActiveId(null); setAutoRotate(true); }}
          >
            {/* Orbit ring */}
            <div className="absolute size-[320px] md:size-[380px] rounded-full border-2 border-dashed border-foody-green/20" />
            <div className="absolute size-[200px] rounded-full border border-foody-green/10 bg-foody-green/5" />

            {/* Center */}
            <div className="absolute z-10 flex flex-col items-center justify-center size-20 rounded-full bg-foody-red text-white shadow-lg">
              <Rocket className="size-6 mb-1" />
              <span className="text-[10px] font-bold">FOODY'S</span>
            </div>

            {milestones.map((item, index) => {
              const pos = calculatePosition(index, milestones.length);
              const Icon = item.icon;
              const isActive = activeId === item.id;

              return (
                <button
                  key={item.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveId(isActive ? null : item.id);
                    setAutoRotate(isActive);
                  }}
                  className="absolute transition-all duration-500 cursor-pointer group"
                  style={{
                    transform: `translate(${pos.x}px, ${pos.y}px)`,
                    zIndex: isActive ? 200 : pos.zIndex,
                    opacity: isActive ? 1 : pos.opacity,
                  }}
                >
                  <div
                    className={`relative flex flex-col items-center transition-all duration-300 ${
                      isActive ? "scale-125" : "group-hover:scale-110"
                    }`}
                  >
                    <div
                      className={`size-12 md:size-14 rounded-full flex items-center justify-center border-2 bg-foody-green border-foody-green text-white transition-colors ${
                        isActive ? "ring-4 ring-foody-green/30 shadow-lg" : ""
                      }`}
                    >
                      <Icon className="size-5" />
                    </div>
                    <span className="mt-1 text-[10px] md:text-xs font-bold text-foody-green whitespace-nowrap">
                      {item.date}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detail panel */}
          <motion.div
            key={active?.id ?? "default"}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-8 rounded-2xl bg-foody-gray border border-foody-green/10 min-h-[280px]"
          >
            {active ? (
              <>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-foody-green text-white">
                    {active.date}
                  </span>
                  <span className={`text-xs font-medium ${
                    active.status === "completed" ? "text-foody-green" : "text-foody-red"
                  }`}>
                    {active.status === "completed" ? "Completed" : "In Progress"}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{active.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{active.content}</p>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center py-8">
                <div className="size-16 rounded-full bg-foody-green/10 flex items-center justify-center mb-4">
                  <MapPin className="size-7 text-foody-green" />
                </div>
                <h3 className="text-xl font-bold mb-2">Click a milestone</h3>
                <p className="text-muted-foreground text-sm max-w-xs">
                  Explore our growth journey by clicking on any node in the orbital roadmap.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
