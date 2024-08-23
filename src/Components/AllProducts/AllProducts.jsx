import { useContext, useEffect, useState } from "react";
import CategorySideBar from "../CategorySidebar/CategorySideBar";
import { AuthContext } from "../../Providers/AuthProviders";
import useRequest from "../../ApiServices/useRequest";
import Swal from "sweetalert2";
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router-dom";

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
  console.log("user", user);
  const [showProds, setShowProds] = useState([]);
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
    try {
      if (user && user._id) {
        const { value: quantity } = await Swal.fire({
          title: "Enter quantity",
          input: "number",
          inputAttributes: {
            min: 1,
            max: getStock(item._id),
            step: 1,
          },
          inputValue: 1,
          showCancelButton: true,
        });

        if (quantity > 0) {
          const cartItems = {
            userId: user._id,
            productId: item._id,
            quantity: parseInt(quantity, 10),
          };
          const dummyCart = {
            userId: user._id,
            productId: item._id,
            productImage: item.productThumb,
            productPrice: item.buyingPrice,
            quantity: parseInt(quantity, 10),
          };

          Swal.fire("Added to Cart");

          let matchFound = false;
          let updatedCarts = await allCarts.map((d) => {
            if (d.productId === item._id) {
              matchFound = true;
              return {
                ...d,
                quantity: parseInt(d.quantity) + parseInt(quantity),
              };
            }
            return d;
          });

          if (!matchFound) {
            updatedCarts = [...updatedCarts, dummyCart];
          }

          let stocksData = allStocks.map((dt) => {
            if (dt.productId === item._id) {
              return {
                ...dt,
                stockQTY: parseInt(dt.stockQTY) - parseInt(quantity),
              };
            }
            return dt;
          });

          setAllStocks(stocksData);

          setAllCarts(updatedCarts);
          postRequest("/carts/crt", cartItems);
        } else {
          Swal.fire("Invalid Quantity");
        }
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCategoryClick = async (category) => {
    try {
      const getCategoriseProds = await getRequest(
        `/products/src/category/${category._id}`
      );

      setShowProds(getCategoriseProds?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white">
      {loading ? (
        <Loading></Loading>
      ) : (
        <div className="grid grid-cols-12">
          <div className="col-span-2">
            <CategorySideBar
              allCategories={allCategories}
              handleCategoryClick={handleCategoryClick}
            ></CategorySideBar>
          </div>
          <div className="col-span-10 px-10 py-12 bg-fifth">
            <div className="grid grid-cols-4 gap-4">
              {showProds ? (
                showProds.map((item) => (
                  <div
                    className="h-[55vh] bg-white rounded-lg border border-sixth shadow-xl"
                    key={item._id}
                  >
                    <div className="flex items-center justify-center h-[50%] mt-8 px-2">
                      <img
                        className="w-[24vh] overflow-hidden rounded-lg"
                        src={`http://localhost:8000/images/${item.productThumb}`}
                        alt=""
                      />
                    </div>
                    <div className="px-[1.5vw] mt-[3.5vh]">
                      <p className=" font-bold text-[20px]">
                        {item.productName}
                      </p>
                      <p className="font-bold text-sm mt-[2vh]">
                        Stock Remaining:{" "}
                        <span className="font-normal">
                          {getStock(item._id)}
                        </span>
                      </p>
                      <p className="font-bold text-sm">
                        Discount:{" "}
                        <span className="font-normal">{item.discount} %</span>
                      </p>
                    </div>
                    {
                      user?.userType === 2 ? 
                      <div className="mt-[2vh] px-[1.5vw] flex justify-between items-center gap-2">
                      <p className="font-extrabold text-lg text-seventh">
                        Price:{" "}
                        <span className="text-xl font-extrabold text-primary">
                          {item.sellingPrice} Tk
                        </span>
                      </p>
                        <button
                        onClick={() => handleCart(item)}
                        className={`text-xs bg-fourth px-4 py-2 text-white tracking-wide font-bold rounded-lg duration-700 hover:duration-700 hover:bg-primary hover:cursor-pointer ${
                          getStock(item._id) === 0
                            ? "text-sixth hover:text-sixth hover:cursor-default"
                            : ""
                        }`}
                        disabled={getStock(item._id) === 0}
                      >
                        Add to Cart
                      </button>
                    </div> :
                    <div className="mt-[2vh] px-[1.5vw] flex justify-end items-center gap-2">
                    <p className="font-extrabold text-lg text-seventh">
                      Price:{" "}
                      <span className="text-xl font-extrabold text-primary">
                        {item.sellingPrice} Tk
                      </span>
                    </p>
                  </div>
                    }
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
    </div>
  );
};

export default AllProducts;
