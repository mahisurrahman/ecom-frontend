import React from "react";

const SingleProductItem = ({product}) => {
  return (
    <tr>
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600">
        {`Nike Shoes`}
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600">
        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-24 h-10 object-cover rounded-lg"
          alt=""
        />
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{`3`}</td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
        $ {`35`}
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
        $ <span>{`45`}</span>
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
        <span className="px-4 py-2font-bold">{`0`} %</span>
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
        <span className="px-4 py-2font-bold">{`Shoes`}</span>
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

export default SingleProductItem;
