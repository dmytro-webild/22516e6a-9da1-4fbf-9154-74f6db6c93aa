"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';

export default function AboutPage() {
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
        <h1 className="text-center text-4xl">About Autosphere Company</h1>
        <p className="text-center mt-6">We are the leader in automotive innovation.</p>
      </main>
      <div id="contact" data-section="contact">
        <ContactCTA tag="Contact" title="Learn More" description="Get in touch with us." buttons={[{ text: "Contact" }]} background={{ variant: "plain" }} useInvertedBackground={false} />
      </div>
      <div id="footer" data-section="footer">
        <FooterLogoReveal logoText="AutoSource" leftLink={{ text: "Privacy", href: "#" }} rightLink={{ text: "Terms", href: "#" }} />
      </div>
    </ThemeProvider>
  );
}