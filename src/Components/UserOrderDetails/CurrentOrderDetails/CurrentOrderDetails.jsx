import { FaEye } from "react-icons/fa";
import UserOrderTotal from "../UserOrderTotal/UserOrderTotal";
import UserOrderShippingAddress from "../UserOrderShippingAddress/UserOrderShippingAddress";
import UserOrderedItems from "../UserOrderedItems/UserOrderedItems";
import { useEffect, useState } from "react";

const CurrentOrderDetails = ({selectedOrder}) => {
  const [currentState, setCurrentState] = useState(null);

  const orderStateHandle = async()=>{
    try{
      if(selectedOrder.isCancelled === true){
        setCurrentState('Cancelled');
      }else if (selectedOrder.isDelievered === true){
        setCurrentState('Delivered');
      }else if(selectedOrder.isPending === true){
        setCurrentState('Processing');
      }else{
        setCurrentState('Deleted');
      }
    }catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
    orderStateHandle();
  },[currentState])

  return (
    <div>
      <div className="px-10 py-10 flex items-center justify-between">
        <h1 className="font-bold">
          Order Details - <span className="font-normal">{selectedOrder._id}</span>
        </h1>
        <div className="flex items-center gap-1 text-seventh font-semibold text-lg">
          <FaEye></FaEye>
          <p>Details</p>
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
        <UserOrderShippingAddress selectedOrder={selectedOrder}></UserOrderShippingAddress>
        <UserOrderTotal selectedOrder={selectedOrder}></UserOrderTotal>
      </div>
      <div className="mt-5 px-10">
      <UserOrderedItems selectedOrder={selectedOrder}></UserOrderedItems>
      </div>
    </div>
  );
};

export default CurrentOrderDetails;
