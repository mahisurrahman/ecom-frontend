// /* eslint-disable react-hooks/exhaustive-deps */
// import React, { useContext, useEffect, useState } from "react";
// import UserCartItems from "../../Components/UserCartItem/UserCartItems";
// import { AuthContext } from "../../Providers/AuthProviders";
// import useRequest from "../../ApiServices/useRequest";
// import Swal from "sweetalert2";
// import { useNavigate } from "react-router-dom";

// const UserCart = () => {
//   const { allCarts, user, setAllCarts } = useContext(AuthContext);
//   const [buttonLoading, setButtonLoading] = useState(false);
//   const [, getRequest] = useRequest();
//   const [, postRequest] = useRequest();
//   const navigate = useNavigate();

//   const getUserCartItems = async () => {
//     try {
//       // Fetch user cart items logic here
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handlePlaceOrder = async (item) => {
//     try {
//       setButtonLoading(true);
//       const customerDetails = {
//         shippingCountry: "Country",
//         shippingState: "State",
//         shippingAddress: "Address",
//         shippingPostalCode: "PostalCode",
//       };

//       const orderDetails = {
//         cartId: item._id,
//         userId: user._id,
//         productId: item.productId,
//         userName: user.userName,
//         userFullName: user.userFullName,
//         userPhoneNumber: user.phoneNumber,
//         userEmail: user.userEmail,
//         userCountry: customerDetails.shippingCountry,
//         userState: customerDetails.shippingState,
//         userAddress: customerDetails.shippingAddress,
//         userPostalCode: customerDetails.shippingPostalCode,
//         productName: item.productName,
//         productThumb: item.productImage,
//         productSellingPrice: item.totalPrice,
//         allTotalPrice: item.totalPrice,
//         totalQuantity: item.quantity,
//         discount: 0,
//       };

//       const createOrder = await postRequest("/orders/crt", orderDetails);
//       if (createOrder) {
//         let removeCartItem = await getRequest(
//           `/carts/remove/byid/${orderDetails.cartId}`
//         );
//         //Remove Cart Items from the Cart State//
//         const filterCart = allCarts.filter(
//           (ct) => ct._id !== orderDetails.cartId
//         );
//         setAllCarts(filterCart);

//         //Remove Cart Item using API//
//         if (removeCartItem) {
//           Swal.fire(`Placed order of ${item.productName}`);
//           navigate("/user/dash/orders");
//         }
//       }
//       setButtonLoading(false);
//     } catch (error) {
//       console.log(error);
//       setButtonLoading(false);
//     }
//   };

//   const handleOrderAll = async () => {
//     try {
//       setButtonLoading(true);
//       for (const item of allCarts) {
//         await handlePlaceOrder(item);
//       }
//       Swal.fire("All items have been ordered successfully!");
//       setButtonLoading(false);
//     } catch (error) {
//       console.log(error);
//       setButtonLoading(false);
//     }
//   };

//   useEffect(() => {
//     getUserCartItems();
//   }, [AuthContext, user, allCarts]);

//   return (
//     <div className="px-10 py-10 bg-white rounded-md h-[80vh]">
//       <div className="flex justify-center items-center font-bold text-2xl">
//         <h1>My Carts</h1>
//       </div>
//       <div className="mt-10">
//         {allCarts.length > 0 ? (
//           allCarts.map((item) => <UserCartItems item={item} key={item._id} />)
//         ) : (
//           <div className="h-[90vh] bg-white">
//             <p>No Item Present In Your Cart</p>
//           </div>
//         )}
//       </div>
//       {allCarts.length > 0 && (
//         <div className="flex justify-center mt-10">
//           <button
//             onClick={handleOrderAll}
//             className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
//             disabled={buttonLoading}
//           >
//             {buttonLoading ? "Ordering..." : "Order All"}
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserCart;

import React, { useContext, useEffect, useState } from "react";
import UserCartItems from "../../Components/UserCartItem/UserCartItems";
import { AuthContext } from "../../Providers/AuthProviders";
import useRequest from "../../ApiServices/useRequest";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const UserCart = () => {
  const { allCarts, user, setAllCarts } = useContext(AuthContext);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [, getRequest] = useRequest();
  const [, postRequest] = useRequest();
  const navigate = useNavigate();

  const getUserCartItems = async () => {
    try {
      // Fetch user cart items logic here
    } catch (error) {
      console.log(error);
    }
  };

  const handlePlaceOrder = async (item) => {
    try {
      setButtonLoading(true);
      const customerDetails = {
        shippingCountry: "Country",
        shippingState: "State",
        shippingAddress: "Address",
        shippingPostalCode: "PostalCode",
      };

      const orderDetails = {
        cartId: item._id,
        userId: user._id,
        productId: item.productId,
        userName: user.userName,
        userFullName: user.userFullName,
        userPhoneNumber: user.phoneNumber,
        userEmail: user.userEmail,
        userCountry: customerDetails.shippingCountry,
        userState: customerDetails.shippingState,
        userAddress: customerDetails.shippingAddress,
        userPostalCode: customerDetails.shippingPostalCode,
        productName: item.productName,
        productThumb: item.productImage,
        productSellingPrice: item.totalPrice,
        allTotalPrice: item.totalPrice,
        totalQuantity: item.quantity,
        discount: 0,
      };

      const createOrder = await postRequest("/orders/crt", orderDetails);
      if (createOrder) {
        let removeCartItem = await getRequest(
          `/carts/remove/byid/${orderDetails.cartId}`
        );
        //Remove Cart Items from the Cart State//
        const filterCart = allCarts.filter(
          (ct) => ct._id !== orderDetails.cartId
        );
        setAllCarts(filterCart);

        //Remove Cart Item using API//
        if (removeCartItem) {
          Swal.fire(`Placed order of ${item.productName}`);
        }
      }
      setButtonLoading(false);
    } catch (error) {
      console.log(error);
      setButtonLoading(false);
    }
  };

  const handleOrderAll = async () => {
    try {
      setButtonLoading(true);
      let totalSum = 0;
      for (const item of allCarts) {
        await handlePlaceOrder(item);
        totalSum += item.totalPrice;
      }
      Swal.fire(
        `All items have been ordered successfully! Total: $${totalSum}`
      );
      setAllCarts([]);
      localStorage.removeItem("cartItems"); // Assuming "cartItems" is the key for storing cart items in local storage
      navigate("/");
      setButtonLoading(false);
    } catch (error) {
      console.log(error);
      setButtonLoading(false);
    }
  };

  useEffect(() => {
    getUserCartItems();
  }, [AuthContext, user, allCarts]);

  return (
    <div className="px-10 py-10 bg-white rounded-md h-[80vh]">
      <div className="flex justify-center items-center font-bold text-2xl">
        <h1>My Carts</h1>
      </div>
      <div className="mt-10">
        {allCarts.length > 0 ? (
          allCarts.map((item) => <UserCartItems item={item} key={item._id} />)
        ) : (
          <div className="h-[90vh] bg-white">
            <p>No Item Present In Your Cart</p>
          </div>
        )}
      </div>
      {allCarts.length > 0 && (
        <div className="flex justify-center mt-10">
          <button
            onClick={handleOrderAll}
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
            disabled={buttonLoading}
          >
            {buttonLoading ? "Ordering..." : "Order All"}
          </button>
        </div>
      )}
    </div>
  );
};

export default UserCart;
