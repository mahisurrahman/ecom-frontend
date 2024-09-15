import React from "react";

const UserOrderTotal = ({selectedOrder, tax}) => {
  return (
    <div className="col-span-5 border-l-2 border-eight border-b-2 pb-10 pl-5">
      <div className="flex justify-between text-xs text-black">
        <p>Sub Total</p>
        <p>
          Tk <span>{selectedOrder.allTotalPrice}</span>
        </p>
      </div>
      <div className="flex justify-between text-xs text-ninth mt-2">
        <p>Discount</p>
        <p>
          % <span>00.00</span>
        </p>
      </div>
      <div className="flex justify-between text-xs text-ninth mt-2">
        <p>Delivery Fee</p>
        <p>
          Tk <span>{selectedOrder?.deliveryFee}</span>
        </p>
      </div>
      <div className="flex justify-between text-xs text-ninth mt-2">
        <p>Tax Fee</p>
        <p>
           <span>{tax} %</span>
        </p>
      </div>
      <div className="flex justify-between text-md text-primary mt-2">
        <p className="font-semibold">Total</p>
        <p>
          Tk <span>{selectedOrder.allTotalPrice + selectedOrder?.deliveryFee + ((tax/100)*selectedOrder?.allTotalPrice)}</span>
        </p>
      </div>
    </div>
  );
};

export default UserOrderTotal;
