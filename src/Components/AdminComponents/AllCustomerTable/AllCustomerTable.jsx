import React from "react";
import SingleCustomerItem from "../SingleCustomerItem/SingleCustomerItem";

const AllCustomerTable = () => {
  return (
    <div className="mt-8 rounded-lg shadow-lg">
      <div class="flex flex-col">
        <div class="-m-1.5 overflow-x-auto">
          <div class="p-1.5 min-w-full inline-block align-middle">
            <div class="overflow-hidden">
              <table class="min-w-full divide-y divide-gray-200">
                <thead className="bg-fourth">
                  <tr>
                    {/* <th
                      scope="col"
                      class="px-6 py-3 text-start text-xs text-white font-extrabold uppercase"
                    >
                    Username
                    </th> */}
                    <th
                      scope="col"
                      class="px-6 py-3 text-start text-xs text-white font-extrabold uppercase"
                    >
                    Full Name
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-start text-xs text-white font-extrabold uppercase"
                    >
                       Image
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-start text-xs text-white font-extrabold uppercase"
                    >
                       Email
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-start text-xs text-white font-extrabold uppercase"
                    >
                       Number
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-start text-xs text-white font-extrabold uppercase"
                    >
                      Gender
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-start text-xs text-white font-extrabold uppercase"
                    >
                      Member Since
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-end text-xs text-white font-extrabold uppercase"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                    <SingleCustomerItem/>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCustomerTable;
