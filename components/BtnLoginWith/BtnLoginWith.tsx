type ButtonProps = {
  logo: any; // Need to fix that !!!!!!!!!
  nameOfBtn: string;
};

export default function BtnLoginWith({ logo, nameOfBtn }: ButtonProps) {
  return (
    <div>
      <button className="w-full group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300  hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
        <div className="relative flex items-center space-x-4 justify-center">
          <img
            src={logo.src ? logo.src : logo}
            width={200}
            height={200}
            className="absolute left-0 w-5"
            alt={`${nameOfBtn} logo`}
          />
          <span className="block w-max font-semibold tracking-wide text-white text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
            Continue with {nameOfBtn}
          </span>
        </div>
      </button>
    </div>
  );
}
