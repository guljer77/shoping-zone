import React from "react";
import { FaFacebookSquare, FaLinkedinIn, FaGoogle } from "react-icons/fa";
import Logo from "../../assets/logo (2).png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";

function Signup() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { userRegister, updateUser, googleAuth } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMGBB_KEY
    }`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then(res => res.json())
      .then(imgData => {
        const imgUrl = imgData.data.display_url;
        userRegister(data.email, data.password)
          .then(() => {
            updateUser(data.name, imgUrl)
              .then(() => {
                navigate(from, { replace: true });
              })
              .catch(error => {
                console.log(error);
              });
          })
          .catch(error => {
            console.log(error);
          });
      });
  };

  //google-signUp
  const googleHandle = () => {
    googleAuth()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="lg:w-[720px] w-full h-auto mx-auto bg-gray-200 rounded lg:flex items-center justify-between">
        <div className="lg:w-1/2 w-full lg:mb-0 mb-10">
          <div className="text-center px-10">
            <img src={Logo} alt="" className="w-[120px] h-[120px] mx-auto" />
            <p className="mb-3 text-[16px] font-semibold">
              Already have an account? Please Login
            </p>
            <Link
              to="/login"
              className="px-3 py-2 rounded bg-primary text-white text-[15px] font-medium"
            >
              Login
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 w-full bg-primary rounded-e flex items-center justify-center py-10 px-7">
          <div className="text-center w-full">
            <h4 className="text-white text-[22px] font-semibold">
              Create an Account
            </h4>
            <p className="text-[15px] text-white font-light">
              Please fill in the form below?
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="pt-5 pb-3">
                <input
                  type="text"
                  placeholder="Name"
                  {...register("name", { required: true })}
                  className="w-full py-[6px] px-2 rounded outline-0 border"
                />
                {errors.name?.type === "required" && (
                  <p className="text-white py-2">Name is Required</p>
                )}
              </div>
              <div className="pb-3">
                <input
                  type="file"
                  {...register("image", { required: true })}
                  className="w-full py-[6px] px-2 rounded outline-0 border"
                />
                {errors.image?.type === "required" && (
                  <p className="text-white py-2">Image is Required</p>
                )}
              </div>
              <div className="pb-3">
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", { required: true })}
                  className="w-full py-[6px] px-2 rounded outline-0 border"
                />
                {errors.email?.type === "required" && (
                  <p className="text-white py-2">Email is Required</p>
                )}
              </div>
              <div className="pb-3">
                <input
                  type="password"
                  placeholder="Password"
                  {...register("password", {
                    required: true,
                    minLength: 8,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  className="w-full py-[6px] px-2 rounded outline-0 border"
                />
                {errors.password?.type === "required" && (
                  <p className="text-white">Password is Required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-white">Password Must be 8 Characters</p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-white">
                    Must be a UpperCase and lowercase and number and Special
                    Characters
                  </p>
                )}
              </div>
              <div className="pb-3">
                <input
                  type="submit"
                  placeholder="Login"
                  className="w-full py-[6px] px-2 rounded bg-white text-primary cursor-pointer"
                />
              </div>
            </form>
            <div className="relative">
              <hr className="border border-white mt-5" />
              <p className="text-center relative inline-block px-3 py-2 bg-primary text-white -top-[21px]">
                OR
              </p>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <span
                onClick={googleHandle}
                className="w-[30px] h-[30px] bg-white rounded cursor-pointer text-primary flex items-center justify-center"
              >
                <FaGoogle />
              </span>
              <span className="w-[30px] h-[30px] bg-white rounded cursor-pointer text-primary flex items-center justify-center">
                <FaFacebookSquare />
              </span>
              <span className="w-[30px] h-[30px] bg-white rounded cursor-pointer text-primary flex items-center justify-center">
                <FaLinkedinIn />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
