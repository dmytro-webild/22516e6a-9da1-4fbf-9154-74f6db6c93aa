"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';

export default function ContactPage() {
  return (
    <ThemeProvider defaultButtonVariant="hover-magnetic" defaultTextAnimation="entrance-slide" borderRadius="rounded" contentWidth="medium" sizing="medium" background="circleGradient" cardStyle="glass-elevated" primaryButtonStyle="gradient" secondaryButtonStyle="glass" headingFontWeight="normal">
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[{ name: "Home", id: "/" }, { name: "About", id: "/about" }, { name: "Services", id: "/services" }, { name: "Company", id: "/company-info" }, { name: "Contact", id: "/contact" }]}
          brandName="AutoSource"
          button={{ text: "Contact", href: "#" }}
        />
      </div>
      <main className="pt-24">
        <div id="contact" data-section="contact">
          <ContactCTA tag="Contact" title="Contact Us" description="We'd love to hear from you." buttons={[{ text: "Email Us" }]} background={{ variant: "plain" }} useInvertedBackground={false} />
        </div>
      </main>
      <div id="footer" data-section="footer">
        <FooterLogoReveal logoText="AutoSource" leftLink={{ text: "Privacy", href: "#" }} rightLink={{ text: "Terms", href: "#" }} />
      </div>
    </ThemeProvider>
  );
}