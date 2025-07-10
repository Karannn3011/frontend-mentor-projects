export default function Boost() {
  return (
    <div className="relative text-center text-white bg-dark-violet ">
      <img
        className="hidden lg:block absolute h-full w-full right-0 top-0 z-0"
        src="/assets/bg-boost-desktop.svg"
        alt="bg"
      />
      <img
        className="absolute h-full w-full right-0 top-0 z-0 lg:hidden"
        src="/assets/bg-boost-mobile.svg"
        alt="bg"
      />

      <div className=" relative py-20 lg:py-10 px-3 z-2">
        <h1 className="text-3xl font-bold">Boost your links today</h1>
        <button className="hover:brightness-120 cursor-pointer transition-all duration-300 bg-cyan text-white font-semibold rounded-full py-4 px-10 mt-7">
          <a href="#urlform">Get Started</a>
        </button>
      </div>
    </div>
  );
}
