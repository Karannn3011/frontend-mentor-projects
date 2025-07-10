export default function Stats() {
  return (
    <div className="lg:my-20">
      <div className="text-center px-5">
        <h1 className="text-4xl text-very-dark-blue font-bold">
          Advanced Statistics
        </h1>
        <p className="text-grayish-violet my-4">
          Track how your links are performing across the web with
          <br className="hidden lg:block" /> our advanced statistics dashboard.
        </p>
      </div>
      <div className="relative lg:w-[80%] lg:mt-35 lg:mx-auto">
        <div className="flex flex-col gap-y-12 lg:flex-row lg:items-center">
          <div className="z-5 rounded-lg text-center w-[90%] mt-20 lg:mt-0 bg-white shadow-xl mx-auto lg:text-left p-5 pt-0 lg:w-[60%] lg:-translate-y-10">
            <div className="p-4 w-19 bg-dark-violet rounded-full mx-auto -translate-y-1/2">
              <img
                src="/assets/icon-brand-recognition.svg"
                alt="working"
                className="object-cover mx-auto"
              />
            </div>
            <h1 className="text-xl text-very-dark-blue font-bold">
              Brand Recognition
            </h1>
            <p className="text-grayish-violet my-4 text-">
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
          <div>
            <hr className="rotate-90 max-w-30 lg:rotate-0 lg:w-10 mx-auto text-cyan border-3 border-cyan" />
          </div>
          <div className="z-5 rounded-lg text-center w-[90%] bg-white shadow-xl lg:text-left mx-auto p-5 pt-0  lg:w-[60%]">
            <div className="p-4 w-19 bg-dark-violet rounded-full mx-auto -translate-y-1/2">
              <img
                src="/assets/icon-detailed-records.svg"
                alt="working"
                className="object-cover mx-auto"
              />
            </div>
            <h1 className="text-xl text-very-dark-blue font-bold">
              Detailed Records
            </h1>
            <p className="text-grayish-violet my-4 text-">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
          <div>
            <hr className="rotate-90 max-w-30 lg:rotate-0 lg:w-10 mx-auto text-cyan border-3 border-cyan" />
          </div>
          <div className="z-5 rounded-lg text-center w-[90%] bg-white shadow-xl mx-auto p-5 pt-0  lg:w-[60%] lg:text-left lg:translate-y-10">
            <div className="p-4 w-19 bg-dark-violet rounded-full mx-auto -translate-y-1/2">
              <img
                src="/assets/icon-fully-customizable.svg"
                alt="working"
                className="object-cover mx-auto"
              />
            </div>
            <h1 className="text-xl text-very-dark-blue font-bold">
              Fully Customizable
            </h1>
            <p className="text-grayish-violet my-4 text-">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
