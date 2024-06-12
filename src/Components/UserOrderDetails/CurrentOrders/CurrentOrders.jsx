import { useEffect, useState } from "react";

const CurrentOrders = ({ uOrder, index }) => {
  const [currentState, setCurrentState] = useState(null);

  const orderStateHandle = async () => {
    try {
      if (uOrder.isCancelled === true) {
        setCurrentState("Cancelled");
      } else if (uOrder.isDelievered === true) {
        setCurrentState("Delivered");
      } else if (uOrder.isPending === true) {
        setCurrentState("Processing");
      } else {
        setCurrentState("Deleted");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    orderStateHandle();
  }, [currentState]);

  
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Intl.DateTimeFormat("en-US", options).format(
      new Date(dateString)
    );
  };
  return (
    <div className="px-2 py-4 rounded-md bg-fifth my-5 hover:cursor-pointer hover:bg-sixth">
      <div className="flex items-center justify-between pb-4 px-2">
        <p className="font-bold text-xs">Order {index + 1}</p>
        <p className="px-2 py-2 text-xs bg-third text-white rounded-lg font-bold">
          Order {currentState}
        </p>
      </div>
      <div className="mt-4 px-2 flex justify-between items-center text-xs">
        <p className="font-bold">Order Date: </p>
        <p>{formatDate(uOrder.createdDate)}</p>
      </div>
      <div className="mt-4 px-2 flex justify-between items-center text-xs">
        <p className="font-bold">Delivery Time: </p>
        <p>Null</p>
      </div>
      <div className="mt-4 px-2 flex justify-between items-center text-xs">
        <p className="font-bold">Delivery Charge: </p>
        <p>10$</p>
      </div>
      <div className="mt-4 px-2 flex justify-between items-center text-md">
        <p className="font-bold">Product Purchased: </p>
        <p>${uOrder.allTotalPrice}</p>
      </div>
      {/* <div className="mt-4 px-2 flex justify-between items-center text-md">
        <p className="font-bold">Total Price: </p>
        <p>$ {uOrder.allTotalPrice + 10}</p>
      </div> */}
    </div>
  );
};

export default CurrentOrders;
