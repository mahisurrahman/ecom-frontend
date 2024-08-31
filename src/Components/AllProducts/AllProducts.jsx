import { useContext, useEffect, useState } from "react";
import CategorySideBar from "../CategorySidebar/CategorySideBar";
import { AuthContext } from "../../Providers/AuthProviders";
import useRequest from "../../ApiServices/useRequest";
import Swal from "sweetalert2";
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router-dom";
import ProductModal from "../ProductModal/ProductModal";

const AllProducts = () => {
  const {
    user,
    allCategories,
    allProducts,
    allStocks,
    setAllCarts,
    allCarts,
    setAllStocks,
    loading,
  } = useContext(AuthContext);
  const [showProds, setShowProds] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // State for the selected product
  const [postRequest, getRequest] = useRequest();
  const navigate = useNavigate();

  const getProducts = async () => {
    try {
      const allProdss = await getRequest("/products/src");
      setShowProds(allProdss?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const getStock = (productId) => {
    try {
      const stock = allStocks.find(
        (stockItem) => stockItem?.productId === productId
      );
      return stock ? stock.stockQTY : "Out of Stock";
    } catch (error) {
      console.log(error);
    }
  };

  const handleCart = async (item) => {
    // Existing cart logic
  };

  const handleCategoryClick = async (category) => {
    // Existing category click logic
  };

  // Function to open modal with the selected product
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="bg-white">
      {loading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-12">
          <div className="col-span-2">
            <CategorySideBar
              allCategories={allCategories}
              handleCategoryClick={handleCategoryClick}
            />
          </div>
          <div className="col-span-10 px-10 py-12 bg-fifth">
            <div className="grid grid-cols-4 gap-4">
              {showProds ? (
                showProds.map((item) => (
                  <div
                    className="h-[55vh] bg-white rounded-lg border border-sixth shadow-xl duration-500 hover:scale-105 hover:duration-500 hover:cursor-pointer"
                    key={item._id}
                    onClick={() => handleProductClick(item)} // Open modal on click
                  >
                    <div className="flex items-center justify-center overflow-hidden h-[50%] mt-8 px-2">
                      <img
                        className="w-[24vh] overflow-hidden rounded-lg"
                        src={`http://localhost:8000/images/${item.productThumb}`}
                        alt=""
                      />
                    </div>
                    <div className="px-[1.5vw] mt-[3.5vh]">
                      <p className="font-bold text-[20px]">
                        {item.productName}
                      </p>
                      <p className="font-bold text-md mt-[2vh]">
                        Stock Remaining:{" "}
                        <span className="font-normal">
                          {getStock(item._id)}
                        </span>
                      </p>
                      <p className="font-bold text-md ">
                        Discounts:{" "}
                        <span className="font-normal">{item.discount}%</span>
                      </p>
                    </div>
                    {user?.userType === 2 ? (
                      <div className="mt-[2vh] px-[1.5vw] flex justify-between items-center gap-2">
                        <p className="font-extrabold text-lg text-seventh">
                          Price:{" "}
                          <span className="text-xl font-extrabold text-primary">
                            {Number(item.sellingPrice).toFixed(2)} Tk
                          </span>
                        </p>

                        <button
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent modal from opening
                            handleCart(item);
                          }}
                          className={`text-xs bg-fourth px-4 py-2 text-white tracking-wide font-bold rounded-lg duration-700 hover:duration-700 hover:bg-primary hover:cursor-pointer ${
                            getStock(item._id) === 0
                              ? "text-sixth hover:text-sixth hover:cursor-default"
                              : ""
                          }`}
                          disabled={getStock(item._id) === 0}
                        >
                          Add to Cart
                        </button>
                      </div>
                    ) : (
                      <div className="mt-[2vh] px-[1.5vw] flex justify-end items-center gap-2">
                        <p className="font-extrabold text-lg text-seventh">
                          Price:{" "}
                          <span className="text-xl font-extrabold text-primary">
                            {item.sellingPrice} Tk
                          </span>
                        </p>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="w-full">
                  <p className="text-center text-4xl font-bold">
                    No products available in this Category
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {/* Render the modal */}
      {selectedProduct && (
        <ProductModal
          user={user}
          product={selectedProduct}
          onClose={closeModal}
          handleCart={handleCart} // Pass handleCart function
          getStock={getStock} // Pass getStock function
        />
      )}
    </div>
  );
};

export default AllProducts;
