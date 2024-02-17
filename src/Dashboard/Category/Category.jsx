import React from "react";
import { Link } from "react-router-dom";
import { FaPencil, FaTrash } from "react-icons/fa6";
import CategoryForm from "./CategoryForm";


function Category() {
  return (
    <div className="p-5">
      <div className="flex items-center justify-between pb-10">
        <h4 className="text-[22px] font-semibold">All Category</h4>
        <button
          onClick={() => document.getElementById("category").showModal()}
          className="text-[16px] px-5 py-2 bg-rose-600 text-white rounded"
        >
          Add Category
        </button>
      </div>
      <dialog id="category" className="modal">
        <CategoryForm  />
      </dialog>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Sl</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Category;
