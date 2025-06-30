import React from "react";
import ReviewList from "./ReviewList";
import SubmitReview from "./SubmitReview";

interface ProductSummary {
  name: string;
}
interface ReviewDashboardProps {
  selectedProduct: ProductSummary | null;
}

/**
 * Aggregated Review Dashboard: container for all reviews of a product,
 * aggregated summary, and write-review section.
 */
// PUBLIC_INTERFACE
const ReviewDashboard: React.FC<ReviewDashboardProps> = ({ selectedProduct }) => {
  return (
    <div className="flex flex-col gap-6">
      {selectedProduct ? (
        <>
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-[color:var(--color-primary,#22577A)]">
              {selectedProduct.name}
            </h2>
            {/* TODO: Add product metadata, aggregated score, etc. */}
            <p className="text-sm text-gray-500">Product details go here.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium mb-2 text-[color:var(--color-secondary,#38A3A5)]">
                User Reviews
              </h3>
              <ReviewList product={selectedProduct} />
            </div>
            <div>
              <h3 className="font-medium mb-2 text-[color:var(--color-secondary,#38A3A5)]">
                Write Your Review
              </h3>
              <SubmitReview product={selectedProduct} />
            </div>
          </div>
        </>
      ) : (
        <div className="text-center text-gray-400">
          <p>Search for a product to view reviews and details.</p>
        </div>
      )}
    </div>
  );
};

export default ReviewDashboard;
