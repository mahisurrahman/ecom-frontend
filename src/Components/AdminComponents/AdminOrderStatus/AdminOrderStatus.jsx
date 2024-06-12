import React from 'react';
import PendingOrders from '../PendingOrders/PendingOrders';
import DeliveredOrders from '../DeliveredOrders/DeliveredOrders';
import ProcessingOrders from '../ProcessingOrders/ProcessingOrders';
import CancelledOrders from '../CancelledOrders/CancelledOrders';

const AdminOrderStatus = () => {
    return (
        <div className="mt-10 px-10 py-10 bg-white rounded-lg shadow-lg">
        <h1 className="text-xl font-bold pl-5 border-l-4 border-third">
            Order Status
        </h1>
        <div className="grid grid-cols-4 gap-4 mt-8">
            <PendingOrders/>
            <DeliveredOrders/>
            <ProcessingOrders/>
            <CancelledOrders/>
        </div>
      </div>
    );
};

export default AdminOrderStatus;