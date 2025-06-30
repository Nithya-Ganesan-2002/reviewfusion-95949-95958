"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import ReviewDashboard from "@/components/ReviewDashboard";
import AISummarySidebar from "@/components/AISummarySidebar";
import Footer from "@/components/Footer";

// Define shared product interface
interface ProductSummary {
  name: string;
}

// PUBLIC_INTERFACE
export default function Home() {
  // UI state placeholders
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<ProductSummary | null>(null);

  // Shim for passing correct setter type
  const handleSetSelectedProduct = (p: ProductSummary) => setSelectedProduct(p);

  // Basic responsive 3-panel layout: Header, Main, Sidebar (AI), Footer
  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)]">
      <Header>
        <SearchBar
          value={searchValue}
          setValue={setSearchValue}
          setSelectedProduct={handleSetSelectedProduct}
        />
      </Header>
      <main className="flex-1 flex flex-col md:flex-row w-full max-w-screen-xl mx-auto px-4 md:px-8 py-6 gap-6">
        {/* Main content: Dashboard + Product Info + Review panels */}
        <section className="flex-1 min-w-0">
          <ReviewDashboard selectedProduct={selectedProduct} />
        </section>
        {/* Sidebar: AI generated review summaries */}
        <aside className="w-full md:w-96 md:ml-6 flex-shrink-0">
          <AISummarySidebar selectedProduct={selectedProduct} />
        </aside>
      </main>
      <Footer />
    </div>
  );
}
