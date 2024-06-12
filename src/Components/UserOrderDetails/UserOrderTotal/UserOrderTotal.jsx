import React from "react";

const UserOrderTotal = ({selectedOrder}) => {
  return (
    <div className="col-span-5 border-l-2 border-eight border-b-2 pb-10 pl-5">
      <div className="flex justify-between text-xs text-ninth">
        <p>Sub Total</p>
        <p>
          $ <span>{selectedOrder.allTotalPrice}</span>
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
          $ <span>10.00</span>
        </p>
      </div>
      <div className="flex justify-between text-xs text-ninth mt-2">
        <p>Tax Fee</p>
        <p>
          $ <span>02.00</span>
        </p>
      </div>
      <div className="flex justify-between text-md text-primary mt-2">
        <p className="font-semibold">Total</p>
        <p>
          $ <span>{selectedOrder.allTotalPrice + 12.00}</span>
        </p>
      </div>
    </div>
  );
};

export default UserOrderTotal;
