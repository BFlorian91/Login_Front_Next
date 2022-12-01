import { useForm } from "react-hook-form";
import BtnLoginWith from "../../components/BtnLoginWith/BtnLoginWith";
import appleLogo from "../../public/assets/img/applelogo.png";
import Footer from "../../components/footer/Footer";
import React from "react";

interface IFormInputs {
  email: string;
  password: string;
}

let renderCounter = 0; // Debugging

export default function Login() {
  renderCounter++; // Debugging
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInputs>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: IFormInputs) => console.log(data);

  React.useEffect(() => {
    const subscription = watch((value, { name, type }) =>
      console.log(value, name, type)
    );
    return subscription.unsubscribe();
  }, [watch]);

  return (
    <div className="flex justify-center mt-8">
      <div className="flex flex-col items-center">
        <form className="w-64 md:w-96" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-3xl font-bold text-center">Login</h1>
          {/* <span className="text-orange-700 font-black text-3xl flex-end">{renderCounter}</span> */}
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
                maxLength: 40,
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
              type="password"
              placeholder="******************"
            />
            <p className="text-red text-xs italic">Please choose a password.</p>
          </div>
          <div className="flex flex-col space-y-8 items-center sm:flex-row sm:items-center sm:justify-around sm:space-y-0 justify-center">
            <button
              test-id="signin-button"
              className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-8 cursor-pointer rounded border-white-50 border-2"
              type="submit"
            >
              Sign In
            </button>
            <a
              className="cursor-pointer inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
              href="/register"
            >
              Don't have an account yet?
            </a>
          </div>
          <div className="flex items-center justify-center mt-5">
            <a
              className="cursor-pointer inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
              // href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
        <Footer />
      </div>
    </div>
  );
}
