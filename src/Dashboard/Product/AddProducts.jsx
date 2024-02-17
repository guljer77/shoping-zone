import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

// const options = [
//   { value: "Black", label: "Black" },
//   { value: "White", label: "White" },
//   { value: "Blue", label: "Blue" },
//   { value: "Yellow", label: "Yellow" },
//   { value: "Pink", label: "Pink" },
//   { value: "Violet", label: "Violet" },
//   { value: "Purple", label: "Purple" },
//   { value: "Gray", label: "Gray" },
// ];

function AddProducts() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div className="p-5">
      <div className="flex items-center justify-between pb-5">
        <h4 className="text-[24px] font-semibold">Add Product</h4>
        <Link
          to="/dashboard/product"
          className="px-5 py-2 bg-rose-600 text-white rounded"
        >
          Product
        </Link>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="lg:flex items-center justify-between gap-5 lg:pb-3">
            <div className="lg:w-1/2 w-full lg:pb-0 pb-5">
              <label className="block text-[14px] pb-1">Product Name</label>
              <input
                type="text"
                placeholder="Product Name"
                {...register("title", { required: true })}
                className="p-2 w-full outline-0 border"
              />
            </div>
            <div className="lg:w-1/2 w-full lg:pb-0 pb-5">
              <label className="block text-[14px] pb-1">Product Category</label>
              <select
                {...register("brand", { required: true })}
                className="p-2 w-full outline-0 border"
              >
                <option>Select Brand</option>
              </select>
            </div>
          </div>
          <div className="lg:flex items-center justify-between gap-5 lg:pb-3">
            <div className="lg:w-1/2 w-full lg:pb-0 pb-5">
              <label className="block text-[14px] pb-1">Regular Price</label>
              <input
                type="text"
                {...register("price", { required: true })}
                placeholder="Regular Price"
                className="p-2 w-full outline-0 border"
              />
            </div>
            <div className="lg:w-1/2 w-full lg:pb-0 pb-5">
              <label className="block text-[14px] pb-1">Discount Offer</label>
              <select
                {...register("offer", { required: true })}
                className="p-2 w-full outline-0 border"
              >
                <option>Discount Offer</option>
                <option value="5">5% Discount</option>
                <option value="10">10% Discount</option>
                <option value="15">15% Discount</option>
                <option value="20">20% Discount</option>
                <option value="25">25% Discount</option>
                <option value="30">30% Discount</option>
                <option value="35">35% Discount</option>
              </select>
            </div>
          </div>
          <div className="lg:flex items-center justify-between gap-5 lg:pb-3">
            <div className="lg:w-1/2 w-full lg:pb-0 pb-5">
              <label className="block text-[14px] pb-1">Product Stock</label>
              <input
                type="number"
                {...register("stock", { required: true })}
                placeholder="Product Stock"
                className="p-2 w-full outline-0 border"
              />
            </div>
            <div className="lg:w-1/2 w-full lg:pb-0 pb-5">
              <label className="block text-[14px] pb-1">Available Color</label>
            </div>
          </div>
          <div className="lg:pb-3 pb-5">
            
          </div>
          <div className="pb-5">
            <input
              type="file"
              {...register("image", { required: true })}
              className="p-2 outline-0 border w-full"
            />
          </div>
          <div>
            <input
              type="submit"
              value="Upload Product"
              className="px-5 py-2 cursor-pointer bg-rose-600 text-white rounded"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProducts;
