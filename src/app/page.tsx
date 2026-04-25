"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCatalog from '@/components/ecommerce/productCatalog/ProductCatalog';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="largeSmall"
        background="noise"
        cardStyle="solid"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="solid"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Cars",
          id: "catalog",
        },
        {
          name: "Why Us",
          id: "features",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="AutoSource"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "rotated-rays-animated",
      }}
      title="Find Your Next Drive Today"
      description="The largest marketplace for high-quality new and pre-owned vehicles. Browse, compare, and book your test drive instantly."
      tag="Trusted Marketplace"
      buttons={[
        {
          text: "Browse Cars",
          href: "#catalog",
        },
      ]}
      carouselItems={[
        {
          id: "1",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-car-care-process_23-2149193557.jpg?_wi=1",
          imageAlt: "Luxury sedan in studio",
        },
        {
          id: "2",
          imageSrc: "http://img.b2bpic.net/free-photo/blurred-traffic-light-trails-road-night_1359-421.jpg?_wi=1",
          imageAlt: "Sports car on highway",
        },
        {
          id: "3",
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-couple-near-car_23-2148744015.jpg?_wi=1",
          imageAlt: "SUV in urban setting",
        },
        {
          id: "4",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-shot-interior-details-modern-luxury-car_181624-22687.jpg?_wi=1",
          imageAlt: "Modern car interior",
        },
        {
          id: "5",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-carbon-fibre-headlight-sports-car_181624-23606.jpg?_wi=1",
          imageAlt: "Car alloy wheel",
        },
        {
          id: "6",
          imageSrc: "http://img.b2bpic.net/free-photo/vertical-shot-spoiler-white-luxury-car-lights-isolated_181624-23597.jpg",
          imageAlt: "Coupe in high-end garage",
        },
      ]}
    />
  </div>

  <div id="catalog" data-section="catalog">
      <ProductCatalog
      layout="section"
      products={[
        {
          id: "p1",
          name: "Urban Explorer SUV",
          price: "$34,500",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/car-with-american-flag-us-national-loyalty-day-celebration_23-2151306083.jpg",
        },
        {
          id: "p2",
          name: "City Commuter Hatch",
          price: "$22,000",
          rating: 4,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-customer-car-dealership-with-seller_23-2149106199.jpg",
        },
        {
          id: "p3",
          name: "Speedster Convertible",
          price: "$48,900",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/headlight-lamp-car_74190-4987.jpg",
        },
        {
          id: "p4",
          name: "Executive Sedan",
          price: "$42,000",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-customer-with-business-person-car-dealership_23-2149117151.jpg",
        },
        {
          id: "p5",
          name: "Family Wagon V6",
          price: "$38,500",
          rating: 4,
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-white-modern-car-outdoors_23-2149385731.jpg",
        },
        {
          id: "p6",
          name: "Premium Luxury SUV",
          price: "$62,000",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-couple-choosing-car-car-show-room_1303-15733.jpg",
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardMedia
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",
          title: "Verified Histories",
          description: "Every car comes with a certified history report.",
          tag: "Trust",
          imageSrc: "http://img.b2bpic.net/free-vector/set-retro-car-logos-with-geometric-forms_23-2147615679.jpg",
          imageAlt: "car manufacturing logo symbol",
        },
        {
          id: "f2",
          title: "Transparent Pricing",
          description: "No hidden fees or unexpected costs.",
          tag: "Fair",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-car-care-process_23-2149193557.jpg?_wi=2",
          imageAlt: "car manufacturing logo symbol",
        },
        {
          id: "f3",
          title: "24/7 Support",
          description: "Our experts are here to help you anytime.",
          tag: "Support",
          imageSrc: "http://img.b2bpic.net/free-photo/blurred-traffic-light-trails-road-night_1359-421.jpg?_wi=2",
          imageAlt: "car manufacturing logo symbol",
        },
      ]}
      title="Why Choose Us"
      description="We redefine the car buying experience with transparent pricing and verified vehicle histories."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "50k+",
          title: "Vehicles Sold",
          items: [
            "Certified",
            "Inspected",
          ],
        },
        {
          id: "m2",
          value: "200+",
          title: "Dealers",
          items: [
            "Authorized",
            "Verified",
          ],
        },
        {
          id: "m3",
          value: "98%",
          title: "Satisfaction",
          items: [
            "Returning",
            "Verified",
          ],
        },
      ]}
      title="Our Market Presence"
      description="Connecting buyers and sellers across the country with precision."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "John Doe",
          date: "2023-10-12",
          title: "SUV Buyer",
          quote: "Seamless experience and great car quality.",
          tag: "5 Stars",
          avatarSrc: "http://img.b2bpic.net/free-photo/portrait-young-handsome-man-spectacles_1303-14468.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-car-care-process_23-2149193557.jpg?_wi=3",
          imageAlt: "professional man portrait studio",
        },
        {
          id: "t2",
          name: "Jane Smith",
          date: "2023-11-05",
          title: "Sedan Buyer",
          quote: "Transparent process, very happy with service.",
          tag: "5 Stars",
          avatarSrc: "http://img.b2bpic.net/free-photo/young-smiling-professional-woman-having-coffee-break-her-full-working-day-she-holds-paper-cup-outdoors-near-business-building-while-relaxing-enjoying-her-beverage_158595-6863.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/blurred-traffic-light-trails-road-night_1359-421.jpg?_wi=3",
          imageAlt: "professional man portrait studio",
        },
        {
          id: "t3",
          name: "Robert Brown",
          date: "2023-12-01",
          title: "Convertible Buyer",
          quote: "Excellent range and very friendly team.",
          tag: "5 Stars",
          avatarSrc: "http://img.b2bpic.net/free-photo/man-looking-somethig-funny_1098-21824.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-couple-near-car_23-2148744015.jpg?_wi=2",
          imageAlt: "professional man portrait studio",
        },
        {
          id: "t4",
          name: "Sarah Wilson",
          date: "2024-01-15",
          title: "Hatchback Buyer",
          quote: "Best platform for buying a reliable car.",
          tag: "5 Stars",
          avatarSrc: "http://img.b2bpic.net/free-photo/portrait-young-girl-wearing-stylish-glasses-smart-lady-elegent-pink-jacket-with-beige-blouse-happy-student-showing-thumbs-up-big-window-with-nice-view_197531-3127.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-shot-interior-details-modern-luxury-car_181624-22687.jpg?_wi=2",
          imageAlt: "professional man portrait studio",
        },
        {
          id: "t5",
          name: "Mark Evans",
          date: "2024-02-20",
          title: "Wagon Buyer",
          quote: "Professional, efficient, and reliable results.",
          tag: "5 Stars",
          avatarSrc: "http://img.b2bpic.net/free-photo/portrait-optimistic-businessman-formalwear_1262-3600.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-carbon-fibre-headlight-sports-car_181624-23606.jpg?_wi=2",
          imageAlt: "professional man portrait studio",
        },
      ]}
      title="Voices of Our Community"
      description="See why thousands trust our platform for their vehicle purchases."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "AutoTech Global",
        "Precision Engineering",
        "Global Automotive",
        "Vehicle Innovation",
        "Premium Motors",
        "AutoFinance Partners",
        "Service First",
      ]}
      title="Partnered Brands"
      description="Collaborating with leading manufacturers and dealers globally."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "faq1",
          title: "How do I check history?",
          content: "Enter the VIN in our tracker.",
        },
        {
          id: "faq2",
          title: "Is pricing final?",
          content: "Yes, transparent and no hidden fees.",
        },
        {
          id: "faq3",
          title: "Can I test drive?",
          content: "Absolutely, schedule online today.",
        },
      ]}
      title="Common Questions"
      description="Everything you need to know about buying with us."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Get in Touch"
      title="Ready to get behind the wheel?"
      description="Contact our sales team today to start your journey."
      buttons={[
        {
          text: "Contact Support",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="AutoSource"
      leftLink={{
        text: "Privacy Policy",
        href: "#",
      }}
      rightLink={{
        text: "Terms of Service",
        href: "#",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
