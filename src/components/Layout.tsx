import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";
import { WhatsAppButton } from "./WhatsAppButton";
import { ScrollToTopButton } from "./ScrollToTopButton";

export const Layout = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <ScrollToTop />
    <Navbar />
    <main className="flex-1">
      <Outlet />
    </main>
    <Footer />
    <WhatsAppButton />
    <ScrollToTopButton />
  </div>
);
