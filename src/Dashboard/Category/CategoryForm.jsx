import React from "react";
import { useForm } from "react-hook-form";

function CategoryForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    console.log(data);
  };
  return (
    <>
      <div className="modal-box">
        <h3 className="font-bold text-lg pb-5">Add Category Item</h3>
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
            value="New Category"
            className="px-5 py-2 bg-rose-600 text-white rounded cursor-pointer"
          />
        </form>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default CategoryForm;
