import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState } from "react";
import BtnLoginWith from "../../components/BtnLoginWith/BtnLoginWith";
import appleLogo from "../../public/assets/img/applelogo.png";
import Footer from "../../components/footer/Footer";

type formValues = {
  email: string;
  password: string;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <div className="flex justify-center mt-8">
      <form
        className="w-64 md:w-96"
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        <h1 className="text-3xl font-bold text-center">Login</h1>
        <div className="mt-12 grid space-y-4 bg-red">
          <BtnLoginWith
            logo="https://tailus.io/sources/blocks/social/preview/images/google.svg"
            nameOfBtn="Google"
          />
          <BtnLoginWith logo={appleLogo} nameOfBtn="Apple" />
          <BtnLoginWith
            logo="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg"
            nameOfBtn="Facebook"
          />
        </div>
        <div className="mb-6 mt-6">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            {...register("email", {
              required: { value: true, message: "This field is requiered" },
            })}
            placeholder="email"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
            {...register("password", {
              minLength: {
                value: 8,
                message: "Your password must have 8 characters or more",
              },
            })}
            placeholder="******************"
          />
          <p className="text-red text-xs italic">Please choose a password.</p>
        </div>
        <div className="flex items-center justify-between">
          <button
            test-id="signin-button"
            className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Sign In
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
            // href="#"
          >
            Forgot Password?
          </a>
        </div>

        <Footer />
      </form>
    </div>
  );
}
