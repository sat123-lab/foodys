import { Hero } from "@/components/sections/Hero";
import {
  PartnersSection,
  WhereWeAreSection,
} from "@/components/sections/HomeSections";
import {
  CtaDualSection,
  HowWeWorkSection,
  QuoteSection,
  BlogSection,
} from "@/components/sections/MoreSections";

const Index = () => (
  <>
    <Hero />
    <PartnersSection />
    <WhereWeAreSection />
    <CtaDualSection />
    <HowWeWorkSection />
    <QuoteSection />
    <BlogSection />
  </>
);

export default Index;
