import React from 'react';
import CustomSearch from '../../Components/CustomSearch/CustomSearch';
import AllCustomerTable from '../../Components/AdminComponents/AllCustomerTable/AllCustomerTable';

const AdminAllCustomers = () => {
    return (
        <div className="h-[85vh] bg-white rounded-lg shadow-lg overflow-y-scroll scrollbar-thin scrollbar-thumb-scrollbar-thumb px-10 py-10">
      <div className="flex items-center justify-between border-b-2 pb-5">
        <h1 className="text-xl font-bold pl-5 border-l-4 border-seventh">
          All Customers List
        </h1>
       <CustomSearch/>
      </div>
      <div className="px-4 py-2">
        <AllCustomerTable/>
      </div>
    </div>
    );
};

export default AdminAllCustomers;