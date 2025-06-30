import React, { useState } from "react";

interface ProductSummary {
  name: string;
}
interface SubmitReviewProps {
  product: ProductSummary;
}

/**
 * Write and submit a new review for the selected product.
 */
// PUBLIC_INTERFACE
const SubmitReview: React.FC<SubmitReviewProps> = () => {
  // TODO: Integrate user/auth logic and backend POST
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: Auth, validation, post to backend endpoint
    alert("Review submitted (simulated): " + reviewText);
    setReviewText("");
    setRating(0);
  }

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <label className="text-sm mb-1" htmlFor="review-text">
        Your Review
      </label>
      <textarea
        id="review-text"
        className="border rounded-md p-2 min-h-20"
        value={reviewText}
        onChange={e => setReviewText(e.target.value)}
        placeholder="Share your experience..."
        required
      />
      <label className="text-sm mb-1 mt-2">Rating</label>
      <div className="flex gap-1 mb-2">
        {[1,2,3,4,5].map((num) => (
          <button
            type="button"
            key={num}
            onClick={() => setRating(num)}
            className={`text-2xl focus:outline-none ${rating >= num ? 'text-yellow-500' : 'text-gray-300'}`}
            aria-label={`${num} stars`}
          >
            ★
          </button>
        ))}
      </div>
      <button
        type="submit"
        className="self-end bg-[color:var(--color-secondary,#38A3A5)] hover:bg-[color:var(--color-primary,#22577A)] text-white px-4 py-2 rounded-md font-medium transition"
      >
        Submit
      </button>
    </form>
  );
};

export default SubmitReview;
