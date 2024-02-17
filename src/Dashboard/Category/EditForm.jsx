import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditForm() {
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
    <>
      <div className="p-10">
        <div className="flex items-center justify-between pb-5">
          <h4 className="text-[22px] font-semibold">Update Category</h4>
          <Link
            to="/dashboard/category"
            className="text-[16px] px-5 py-2 bg-rose-600 text-white rounded"
          >
            Category
          </Link>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            {...register("category", { required: true })}
            placeholder="Category Name"
            className="w-full p-2 outline-0 border mb-3"
          />
          {errors.category?.type === "required" && (
            <p className="text-red-600 py-2">Category is Required</p>
          )}
          <input
            type="submit"
            value="Update Category"
            className="px-5 py-2 bg-rose-600 text-white rounded cursor-pointer"
          />
        </form>
      </div>
    </>
  );
}

export default EditForm;
