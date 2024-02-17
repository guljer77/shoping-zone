import React from "react";
import { FaPencil, FaTrash } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Product() {
  return (
    <div className="p-5">
      <div className="flex items-center justify-between pb-5">
        <h4 className="text-[24px] font-semibold">All Product</h4>
        <Link
          to="/dashboard/addProduct"
          className="px-5 py-2 bg-rose-600 text-white rounded"
        >
          Add Product
        </Link>
      </div>
      <div className="overflow-x-auto overflow-y-hidden">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Sl</th>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>1</td>
              <td>
                <div className="mask mask-squircle w-12 h-12">
                  <img
                    src="/tailwind-css-component-profile-2@56w.png"
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </td>
              <td>Zemlak, Daniel and Leannon</td>
              <td>Purple</td>
              <td className="flex items-center justify-start gap-2">
                <Link className="flex items-center justify-center w-[30px] h-[30px] bg-green-600 rounded text-white">
                  <FaPencil />
                </Link>
                <span className="flex items-center cursor-pointer justify-center w-[30px] h-[30px] bg-rose-600 rounded text-white">
                  <FaTrash />
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Product;
