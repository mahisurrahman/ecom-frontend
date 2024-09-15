import UserOrderTotal from "../UserOrderTotal/UserOrderTotal";
import UserOrderShippingAddress from "../UserOrderShippingAddress/UserOrderShippingAddress";
import UserOrderedItems from "../UserOrderedItems/UserOrderedItems";
import { useEffect, useState } from "react";
import useRequest from "../../../ApiServices/useRequest";
import Swal from "sweetalert2";

const CurrentOrderDetails = ({ selectedOrder }) => {
  const [currentState, setCurrentState] = useState(null);
  const [postRequest, getRequest] = useRequest();
  const [tax, setTax] = useState(0);

  const orderStateHandle = async () => {
    try {
      if (selectedOrder.isCancelled === true) {
        setCurrentState("Cancelled");
      } else if (selectedOrder.isDelievered === true) {
        setCurrentState("Delivered");
      } else if (selectedOrder.isPending === true) {
        setCurrentState("Processing");
      } else {
        setCurrentState("Deleted");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleOrderDelete = async (id) => {
    try {
      const orderId = id;
      const removeOrder = await getRequest(`/orders/del/byId/${orderId}`);
      if (removeOrder?.data?.error === false) {
        Swal.fire("Successfully Removed the Order");
      } else {
        Swal.fire("Failed to Remove the Order");
        console.log(removeOrder);
      }

      return window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    orderStateHandle();
  }, [currentState]);


  const getTax = async () =>{
    try{
      const response = await getRequest('/tax/src');
      setTax(response?.data?.data[0]?.taxNumber);
    }catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
    getTax();
  },[])

  return (
    <div className="h-[85vh]">
      <div className="px-10 py-10 flex items-center justify-between">
        <h1 className="font-bold">
          Order Details -{" "}
          <span className="font-normal">{selectedOrder._id}</span>
        </h1>
        <div className="flex items-center gap-1 text-seventh font-semibold text-sm">
          {/* <button
            onClick={() => handleOrderDelete(selectedOrder._id)}
            className="px-4 py-1 font-bold rounded-full bg-red-700 text-white duration-700 hover:cursor-pointer hover:duration-700 hover:bg-red-400"
          >
            Refund
          </button> */}
        </div>
      </div>
      <div className="mt-2 px-5 mx-10 flex item-center justify-between py-4 rounded-lg bg-eight">
        <div className="flex items-center gap-2 text-xs">
          <p className="font-bold">Order Status : </p>
          <p className="px-4 rounded-2xl py-2 bg-third text-white font-bold">
            Order {currentState}
          </p>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <p className="font-bold">Payment Status : </p>
          <p className="px-4 rounded-2xl py-2 bg-fourth text-white font-bold">
            Cash On Delivery
          </p>
        </div>
      </div>
      <div className="mt-10 px-10 grid grid-cols-12">
        <UserOrderShippingAddress
          selectedOrder={selectedOrder}
        ></UserOrderShippingAddress>
        <UserOrderTotal selectedOrder={selectedOrder} tax={tax}></UserOrderTotal>
      </div>
      <div className="mt-5 px-10">
        <UserOrderedItems selectedOrder={selectedOrder}></UserOrderedItems>
      </div>
    </div>
  );
};

export default CurrentOrderDetails;
