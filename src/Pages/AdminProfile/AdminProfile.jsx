

import AdminDashChart from "../../Components/AdminComponents/AdminDashChart/AdminDashChart";
import AdminOrderStatus from "../../Components/AdminComponents/AdminOrderStatus/AdminOrderStatus";
import AdminProfileSummary from "../../Components/AdminComponents/AdminProfileSummary/AdminProfileSummary";
import AdminTodaysOrders from "../../Components/AdminComponents/AdminTodaysOrders/AdminTodaysOrders";
import AdminTopProducts from "../../Components/AdminComponents/AdminTopProducts/AdminTopProducts";

const AdminProfile = () => {
  return (
    <div className="h-[85vh] overflow-y-scroll scrollbar-thin scrollbar-thumb-scrollbar-thumb">
     <AdminProfileSummary/>
     <AdminOrderStatus/>
     <AdminTodaysOrders/>
     <div className="mt-10 px-10 py-10 bg-white rounded-lg shadow-lg grid grid-cols-12 gap-5">
        <div className="col-span-8">
          <AdminDashChart/>
        </div>
        <div className="col-span-4">
          <AdminTopProducts/>
        </div>
     </div>
    </div>
  );
};

export default AdminProfile;
