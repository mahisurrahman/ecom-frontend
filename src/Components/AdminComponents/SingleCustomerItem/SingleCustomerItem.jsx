import React from "react";

const SingleCustomerItem = () => {
  return (
    <tr>
        {/* <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600">
        {`mahisur`}
      </td> */}
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600">
        {`Mahisur Rahman`}
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600">
        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-10 h-10 object-cover rounded-full"
          alt=""
        />
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{`brownmahis2@gmail.com`}</td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
        {`01621754583`}
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
        <span>{`Male`}</span>
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
        <span className="px-4 py-2font-bold">{`22.02.2024`}</span>
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
        <button
          type="button"
          class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-green-600 hover:text-black disabled:opacity-50 disabled:pointer-events-none"
        >
          View
        </button>
      </td>
    </tr>
  );
};

export default SingleCustomerItem;
