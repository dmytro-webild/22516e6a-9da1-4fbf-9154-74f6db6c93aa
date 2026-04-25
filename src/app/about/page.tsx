"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';

export default function AboutPage() {
  return (
    <ThemeProvider>
      <NavbarLayoutFloatingInline
        navItems={[{ name: "Home", id: "/" }, { name: "About", id: "/about" }, { name: "Services", id: "/services" }, { name: "Company", id: "/company-info" }, { name: "Contact", id: "/contact" }]}
        brandName="AutoSource"
      />
      <main className="pt-24">
        <h1 className="text-center text-4xl">About Autosphere Company</h1>
        <p className="text-center mt-6">We are the leader in automotive innovation.</p>
      </main>
      <ContactCTA tag="Contact" title="Learn More" description="Get in touch with us." buttons={[{ text: "Contact" }]} />
      <FooterLogoReveal logoText="AutoSource" leftLink={{ text: "Privacy", href: "#" }} rightLink={{ text: "Terms", href: "#" }} />
    </ThemeProvider>
  );
}