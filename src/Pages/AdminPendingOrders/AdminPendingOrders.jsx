import { useEffect, useState } from "react";
import PendingOrdersTable from "../../Components/AdminComponents/PendingOrdersTable/PendingOrdersTable";
import useRequest from "../../ApiServices/useRequest";

const AdminPendingOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [postRequest, getRequest] = useRequest();

  const getAllPndingOrds = async () => {
    try {
      const orders = await getRequest("/orders/src/pending/all");
      setAllOrders(orders?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllPndingOrds();
  }, []);

  return (
    <div className="px-10 py-10 bg-white rounded-lg">
      <h1 className="text-2xl font-bold">Admin Pending Orders</h1>
      <div className="mt-10">
        <PendingOrdersTable allOrders={allOrders} />
      </div>
    </div>
  );
};

export default AdminPendingOrders;
