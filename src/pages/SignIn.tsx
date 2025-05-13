import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppContext } from "../contexts/appContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import * as apiClient from "../apiClient";

export type SignInFormData = {
  email: string;
  password: string;
};

const SignIn = () => {
  const navigate = useNavigate();
  const { showToast } = useAppContext();
  const queryClient = useQueryClient();
  const location = useLocation();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignInFormData>();

  const mutation = useMutation({
    mutationFn: apiClient.signIn,
    onSuccess: async () => {
      showToast({ message: "Sign In Successful", type: "SUCCESS" });
      await queryClient.invalidateQueries({ queryKey: ["validateToken"] });
      navigate(location.state?.from?.pathname || "/");
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <div className="w-full h-[50vh]">
      <div className="w-[90%] mx-auto">
        <form onSubmit={onSubmit} className="flex flex-col gap-5">
          <h2 className="text-3xl font-bold">Sign In</h2>
          <div className="flex flex-col gap-4">
            <label
              htmlFor=""
              className="text-gray-700 text-sm font-bold flex-1"
            >
              Email
              <input
                type="email"
                id="email"
                className="border rounded w-full py-2 px-2 mt-3 font-normal"
                {...register("email", { required: "This field is required" })}
              />
              {errors.email && (
                <span className="text-red-700">{errors.email.message}</span>
              )}
            </label>

            <label
              htmlFor=""
              className="text-gray-700 text-sm font-bold flex-1"
            >
              Password
              <input
                type="password"
                id="password"
                className="border rounded w-full py-2 px-2 mt-3 font-normal"
                {...register("password", {
                  required: "This field is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              {errors.password && (
                <span className="text-red-700">{errors.password.message}</span>
              )}
            </label>
            <span className="flex flex-col md:flex-row gap-7 md:justify-between md:items-center">
              <button
                type="submit"
                className="p-3 bg-blue-800 hover:bg-blue-600 text-white font-semibold"
              >
                Log In
              </button>
              <p className="">
                Don't have an account?{" "}
                <span>
                  <Link
                    className="cursor-pointer underline hover:text-blue-700"
                    to={"/register"}
                  >
                    Sign Up
                  </Link>
                </span>
              </p>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
