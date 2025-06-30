import React from "react";

interface ProductSummary {
  name: string;
}
interface AISummarySidebarProps {
  selectedProduct: ProductSummary | null;
}

/**
 * Sidebar for AI-generated review summaries/insights for the product.
 */
// PUBLIC_INTERFACE
const AISummarySidebar: React.FC<AISummarySidebarProps> = ({ selectedProduct }) => (
  <div className="bg-[color:var(--color-accent,#F6B93B)] rounded-lg shadow p-6 h-full min-h-64 flex flex-col">
    <h2 className="text-lg font-semibold text-white mb-2">AI Insights</h2>
    {selectedProduct ? (
      <div>
        <p className="text-white/90">[Placeholder for AI summary of {selectedProduct.name}]</p>
        {/* TODO: Render actual AI-generated review summary */}
      </div>
    ) : (
      <p className="text-white/80">Search a product to see summary insights and highlights powered by AI.</p>
    )}
  </div>
);

export default AISummarySidebar;
