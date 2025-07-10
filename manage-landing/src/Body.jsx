import Feature from "./components/Feature.jsx";
import Slider from "./components/Slider.jsx"

function Body() {
  return (
    <>
      <main className="my-20 lg:my-30 lg:flex flex-row justify-between items-start lg:px-20">
        <section className="text-center lg:text-left px-5 lg:w-1/2">
          <h1 className="text-3xl lg:text-4xl lg:leading-13 font-bold text-very-dark-blue">
            What's different about Manage?
          </h1>
          <p className="text-center lg:text-left text-dark-grayish-blue my-5 lg:text-lg lg:pr-50">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </section>
        <section className="my-10 lg:my-0 lg:w-1/2 flex flex-col gap-y-5">
          <Feature
            num="01"
            title="Track company-wide progress"
            info="See how your day-to-day tasks fit into the wider vision. Go from 
  tracking progress at the milestone level all the way done to the 
  smallest of details. Never lose sight of the bigger picture again."
          />
          <Feature
            num="02"
            title="Advance built-in reports"
            info="Set internal delivery estimates and track progress toward company 
  goals. Our customisable dashboard helps you build out the reports 
  you need to keep key stakeholders informed."
          />
          <Feature
            num="03"
            title="Everything you need in one place"
            info="Stop jumping from one service to another to communicate, store files, 
  track tasks and share documents. Manage offers an all-in-one team 
  productivity solution."
          />
        </section>
      </main>
      <main>
        <h1 className=" text-center text-3xl lg:text-4xl text-very-dark-blue font-bold">What they've said</h1>
        <Slider />
      </main>
    </>
  );
}

export default Body;
