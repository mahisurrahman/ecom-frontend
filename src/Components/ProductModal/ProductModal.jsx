import React from "react";

const ProductModal = ({ user, product, onClose, handleCart, getStock }) => {
  if (!product) return null;

  // Static rating data
  const staticRating = 4.5; // Example rating out of 5
  const staticRatingCount = 123; // Example number of people who rated

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      {/* Modal Content */}
      <div className="relative bg-white p-8 rounded-lg shadow-xl w-[80vw] h-[80vh] max-w-4xl overflow-y-auto flex flex-col justify-between">
        {/* Close Button (Cross Mark) */}
        <button
          onClick={onClose}
          className="text-4xl absolute top-4 right-4 text-gray-600 hover:text-gray-800 focus:outline-none"
        >
          &times;
        </button>

        {/* Main Content Container */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center h-full">
          {/* Product Image */}
          <div className="flex-shrink-0 w-full md:w-1/2 flex items-center justify-center">
            <img
              className="max-w-full h-auto rounded-lg object-contain"
              src={`http://localhost:8000/images/${product.productThumb}`}
              alt={product.productName}
            />
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <div className="mb-6">
              <h2 className="text-3xl font-bold mb-2">{product?.productName}</h2>
              
              {/* Rating Section */}
              <div className="flex items-center mb-4">
                {/* Static Stars for Rating */}
                {[...Array(5)].map((star, index) => {
                  return (
                    <svg
                      key={index}
                      className={`w-6 h-6 ${
                        index < Math.floor(staticRating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.977a1 1 0 00.95.69h4.184c.969 0 1.371 1.24.588 1.81l-3.388 2.464a1 1 0 00-.364 1.118l1.286 3.977c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.388 2.464c-.785.57-1.84-.197-1.54-1.118l1.286-3.977a1 1 0 00-.364-1.118L2.605 9.404c-.784-.57-.38-1.81.588-1.81h4.184a1 1 0 00.95-.69l1.286-3.977z"></path>
                    </svg>
                  );
                })}
                <span className="ml-2 text-gray-600 text-sm">
                  {staticRating} ({staticRatingCount} ratings)
                </span>
              </div>

              <p className="text-gray-700 mb-6">{product?.productDescription}</p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-2xl font-bold text-primary">{product?.sellingPrice.toFixed(2)} Tk</p>
              
              {/* Conditionally Render Add to Cart Button */}
              {user?.userType === 2 && (
                <button
                  className={`bg-primary text-white px-4 py-3 rounded-lg hover:bg-primary-dark transition duration-300 ${
                    getStock(product._id) === 0
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  onClick={() => {
                    if (getStock(product._id) > 0) {
                      handleCart(product); // Invoke handleCart function
                    }
                  }}
                  disabled={getStock(product._id) === 0}
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
