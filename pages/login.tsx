import BtnLoginWith from "../components/BtnLoginWith/BtnLoginWith";
import appleLogo from "../public/assets/img/applelogo.png";


export default function Login() {
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
          <BtnLoginWith logo='https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg' nameOfBtn="Facebook" />
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
            id="username"
            type="text"
            placeholder="Username"
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
        <div className="flex items-center justify-between">
          <button
            className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
            type="button"
          >
            Sign In
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
            href="#"
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
