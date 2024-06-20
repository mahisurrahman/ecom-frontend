import React, { useContext, useState } from "react";
import CurrentOrders from "../../Components/UserOrderDetails/CurrentOrders/CurrentOrders";
import "./UserOrders.css";
import CurrentOrderDetails from "../../Components/UserOrderDetails/CurrentOrderDetails/CurrentOrderDetails";
import { AuthContext } from "../../Providers/AuthProviders";
import Loading from "../../Components/Loading/Loading";

const UserOrders = () => {
  const { loading, userOrders } = useContext(AuthContext);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleIndividualOrder = (uOrder) => {
    try {
      setSelectedOrder(uOrder);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="w-full grid grid-cols-12 gap-5">
          <div className="col-span-4 bg-white py-10 rounded-lg">
            <h1 className="text-xl font-bold mb-2 mx-5">My Orders</h1>
            <div className="px-5 h-[100vh] overflow-y-scroll custom-scrollbar ">
              {userOrders ? (
                userOrders.map((uOrder, index) => (
                  <div key={index} onClick={()=>handleIndividualOrder(uOrder)}>
                    <CurrentOrders uOrder={uOrder} index={index} />
                  </div>
                ))
              ) : (
                <p>No orders</p>
              )}
            </div>
          </div>
          <div className="col-span-8 bg-white rounded-lg">
          {selectedOrder ? (
              <CurrentOrderDetails selectedOrder={selectedOrder} />
            ) : (
              <div className="text-center py-10"><p>Click an order to view details</p></div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserOrders;
