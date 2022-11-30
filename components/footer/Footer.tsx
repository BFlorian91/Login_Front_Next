export default function Footer() {
  return (
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
  );
}
