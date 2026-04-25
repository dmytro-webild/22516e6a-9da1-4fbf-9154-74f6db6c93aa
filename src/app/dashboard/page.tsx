"use client";

import { useState } from "react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import ReactLenis from "lenis/react";

export default function DashboardPage() {
  const [savedItems, setSavedItems] = useState<Array<{ id: string, name: string, price: string }>>([
    { id: "p1", name: "Urban Explorer SUV", price: "$34,500" },
    { id: "p3", name: "Speedster Convertible", price: "$48,900" }
  ]);

  const handleRemove = (id: string) => {
    setSavedItems(savedItems.filter(item => item.id !== id));
  };

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
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Home", id: "/" },
            { name: "Cars", id: "/#catalog" },
            { name: "Dashboard", id: "/dashboard" },
          ]}
          brandName="AutoSource"
          button={{ text: "Logout", onClick: () => console.log("Logging out") }}
        />
        
        <main className="pt-32 pb-20 px-6 container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Your Dashboard</h1>
          <div className="bg-white dark:bg-zinc-900 p-8 rounded-lg border border-zinc-200 dark:border-zinc-800">
            <h2 className="text-2xl mb-6">Saved Vehicles</h2>
            {savedItems.length === 0 ? (
              <p>No saved vehicles yet.</p>
            ) : (
              <ul className="space-y-4">
                {savedItems.map((item) => (
                  <li key={item.id} className="flex justify-between items-center p-4 border rounded">
                    <div>
                      <p className="font-bold">{item.name}</p>
                      <p className="text-sm text-zinc-500">{item.price}</p>
                    </div>
                    <button 
                      onClick={() => handleRemove(item.id)}
                      className="text-red-500 hover:text-red-700 text-sm font-medium"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </main>

        <FooterLogoReveal
          logoText="AutoSource"
          leftLink={{ text: "Privacy Policy", href: "#" }}
          rightLink={{ text: "Terms of Service", href: "#" }}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}
