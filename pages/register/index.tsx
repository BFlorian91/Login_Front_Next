import Link from "next/link";
import React from "react";
import { Path, useForm, UseFormRegister, SubmitHandler } from "react-hook-form";

import BtnLoginWith from "../../components/BtnLoginWith/BtnLoginWith";
import appleLogo from "../../public/assets/img/applelogo.png";
import Footer from "../../components/footer/Footer";

interface IFormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormValues>({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: IFormValues) => console.log(data);

  React.useEffect(() => {
    const subscription = watch((value, { name, type }) =>
      console.log(value, name, type)
    );
    return subscription.unsubscribe();
  }, [watch]);

  const mailIsValid = (email: string): boolean => {
    if (
      email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      return true;
    }
    return false;
  };

  return (
    <div className="flex justify-center mt-8">
      <div className="flex flex-col items-center">
        <form className="w-64 md:w-96" onSubmit={handleSubmit(onSubmit)}>
          <div className="w-64 md:w-96">
            <h1 className="text-3xl font-bold text-center">Register</h1>
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
                name="userMail"
                id="userMail"
                type="email"
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
                id="password"
                type="password"
                placeholder="******************"
              />
              <p className="text-red text-xs italic">
                Please choose a password.
              </p>
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
                id="confirmPassword"
                type="password"
                placeholder="******************"
              />
              <p className="text-red text-xs italic">
                Please confirm your password.
              </p>
            </div>
            <div className="flex justify-around items-start mt-16">
              <a
                // href="/#"
                test-id="signin-button"
                className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-8 cursor-pointer rounded border-white-50 border-2"
                type="button"
                // onClick={() => mailIsValid(data('email'))}
              >
                Register
              </a>
              <a
                href="/login"
                test-id="signin-button"
                className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-8 cursor-pointer rounded border-white-50 border-2"
                type="button"
              >
                Login
              </a>
            </div>
          </div>
        </form>
        <Footer />
      </div>
    </div>
  );
}
