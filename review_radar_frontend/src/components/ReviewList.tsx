import React from "react";

interface ProductSummary {
  name: string;
}
interface ReviewListProps {
  product: ProductSummary;
}

/**
 * Displays an aggregated list of reviews for the selected product.
 */
// PUBLIC_INTERFACE
const ReviewList: React.FC<ReviewListProps> = () => {
  // TODO: Replace with actual aggregated data from APIs/backend
  const dummyReviews = [
    { user: "Jane", rating: 5, text: "Fantastic product, highly recommend!" },
    { user: "Sam", rating: 3, text: "Okay, but had some issues." },
  ];

  return (
    <ul className="divide-y">
      {dummyReviews.map((rev, idx) => (
        <li key={idx} className="py-3">
          <div className="flex gap-2 items-center text-sm">
            <span className="font-semibold text-[color:var(--color-secondary,#38A3A5)]">{rev.user}</span>
            <span className="text-yellow-500">{'★'.repeat(rev.rating)}</span>
          </div>
          <div className="ml-1 text-gray-600">{rev.text}</div>
        </li>
      ))}
      <li className="py-3 text-xs text-gray-400">
        {/* TODO: List is fetched and paginated from backend/API */}
        (Review list from various sources will appear here)
      </li>
    </ul>
  );
};

export default ReviewList;
