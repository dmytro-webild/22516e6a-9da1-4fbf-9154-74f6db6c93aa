"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';

export default function ContactPage() {
  return (
    <ThemeProvider>
      <NavbarLayoutFloatingInline
        navItems={[{ name: "Home", id: "/" }, { name: "About", id: "/about" }, { name: "Services", id: "/services" }, { name: "Company", id: "/company-info" }, { name: "Contact", id: "/contact" }]}
        brandName="AutoSource"
      />
      <main className="pt-24">
        <ContactCTA tag="Contact" title="Contact Us" description="We'd love to hear from you." buttons={[{ text: "Email Us" }]} />
      </main>
      <FooterLogoReveal logoText="AutoSource" leftLink={{ text: "Privacy", href: "#" }} rightLink={{ text: "Terms", href: "#" }} />
    </ThemeProvider>
  );
}