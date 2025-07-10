export default function Info() {
  return (
    <div className="lg:flex lg:flex-row-reverse lg:pl-20 lg:my-10 lg: lg:justify-between lg:items-start">
      <div className="overflow-x-hidden">
        <div className="translate-x-5 lg:translate-x-0">
          <img
            src="/assets/illustration-working.svg"
            alt="working"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <div className="text-center mt-10 mb-30 px-5 lg:text-left">
        <h1 className="text-4xl lg:text-6xl lg:leading-18 text-very-dark-blue font-bold">
          More than just <br className="hidden lg:block" /> shorter links
        </h1>
        <p className="text-grayish-violet my-4">
          Build your brand’s recognition and get detailed{" "}
          <br className="hidden lg:block" /> insights on how your links are
          performing.
        </p>
        <button className="cursor-pointer hover:brightness-120 transition-all duration-300 bg-cyan text-white font-semibold rounded-full py-4 px-10 my-7">
          <a href="#urlform">Get Started</a>
        </button>
      </div>
    </div>
  );
}
