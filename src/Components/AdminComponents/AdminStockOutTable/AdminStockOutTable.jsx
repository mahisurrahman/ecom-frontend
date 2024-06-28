import React, { useEffect } from "react";
import useRequest from "../../../ApiServices/useRequest";
import AdminSingleStkOutItem from "../AdminSingleStkOutItem/AdminSingleStkOutItem";

const AdminStockOutTable = ({ allStockOuts }) => {
  return (
    <div className="mt-8 rounded-lg shadow-lg">
      <div class="flex flex-col">
        <div class="-m-1.5 overflow-x-auto">
          <div class="p-1.5 min-w-full inline-block align-middle">
            <div class="overflow-hidden">
              <table class="min-w-full divide-y divide-gray-200">
                <thead className="bg-fourth">
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 text-start text-xs text-white font-extrabold uppercase"
                    >
                      Product Name
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-start text-xs text-white font-extrabold uppercase"
                    >
                      Product Image
                    </th>
                    <th
                      scope="col"
                      class="pl-10 py-3 text-start text-xs text-white font-extrabold uppercase"
                    >
                      Stock Remaining
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-center text-xs text-white font-extrabold uppercase"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                  {allStockOuts.map((stock) => (
                    <AdminSingleStkOutItem key={stock._id} stock={stock} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminStockOutTable;
