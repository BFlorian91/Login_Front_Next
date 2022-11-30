import Link from "next/link";
import { Path, useForm, UseFormRegister, SubmitHandler } from "react-hook-form";
import { useState } from "react";

import BtnLoginWith from "../../components/BtnLoginWith/BtnLoginWith";
import appleLogo from "../../public/assets/img/applelogo.png";

type IFormValues = {
  mail: string,
  password: string,
};

type InputProps = {
    label: Path<IFormValues>;
    register: UseFormRegister<IFormValues>;
    required: boolean;
  };

export default function Login() {
  const [userMail, setUserMail] = useState("");
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
      <div className="w-64 md:w-96">
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
          <p className="text-red text-xs italic">Please choose a password.</p>
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
          <p className="text-red text-xs italic">Please confirm the password.</p>
        </div>
        <div className="flex items-center justify-between">
          <Link
            href="/#"
            test-id="signin-button"
            className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={() => mailIsValid(userMail)}
          >
            Sign In
          </Link>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
            // href="#"
          >
            Forgot Password?
          </a>
        </div>

        <div className="mt-32 space-y-4 text-gray-600 text-center sm:-mb-8">
          <p className="text-xs">
            By proceeding, you agree to our{" "}
            <a href="#" className="underline">
              Terms of Use
            </a>{" "}
            and confirm you have read our{" "}
            <a href="#" className="underline">
              Privacy and Cookie Statement
            </a>
            .
          </p>
          <p className="text-xs">
            This site is protected by reCAPTCHA and the{" "}
            <a href="#" className="underline">
              Google Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="underline">
              Terms of Service
            </a>{" "}
            apply.
          </p>
        </div>
      </div>
    </div>
  );
}
