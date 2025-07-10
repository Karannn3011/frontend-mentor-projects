import { useState } from "react";
import Tabs from "./Tabs"
import Addto from "./Addto"
import Faq from "./Faq"

function Body() {
    const [tab, setTab] = useState(0)
  return (
    <>
    <div className="lg:flex flex-row-reverse justify-between items-center">

    
      <main className="mt-8">
        <div className="relative overflow-x-clip">
          <div className="w-full absolute top-[100%] -translate-y-full left-1/4 rounded-full bg-blue-600 h-3/4"></div>
          <img
            className="relative"
            src="images/illustration-hero.svg"
            alt="hero"
          />
        </div>
      </main>
      <main className="px-5 lg:px-30 text-center lg:w-1/2 lg:text-left">
        <h1 className=" mt-10 leading-10 text-3xl lg:text-5xl lg:leading-15 font-[500] text-blue-950">
          A Simple Bookmark Manager
        </h1>
        <p className=" my-5 text-blue-950/60">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="flex flex-row px-2 justify-between lg:justify-normal lg:gap-x-8 *:cursor-pointer *:hover:bg-transparent w-full mt-7">
          <button className="px-4 py-3 border-2 border-transparent lg:px-6 text-sm font-[500] transition-all rounded-md shadow-lg hover:text-blue-600 bg-blue-600 hover:border-blue-600 text-white hover:shadow-md ">
            Get it on Chrome
          </button>
          <button className="px-4 py-3 lg:px-6 border-2 border-transparent transition-all text-sm font-[500] text-black/80 rounded-md hover:border-black hover:text-black shadow-lg bg-grey-50 hover:shadow-md">
            Get it on Firefox
          </button>
        </div>
      </main>
      </div>
      <main id="features" className="px-5 mt-25">
        <h1 className="text-center mt-10 leading-10 text-2xl font-[500] text-blue-950 lg:text-3xl">
          Features
        </h1>
        <p className="text-center mt-3 text-blue-950/60">
          Our aim is to make it quick and easy for you to access your <br className="hidden lg:block" /> favourite
          websites. Your bookmarks sync between your devices <br className="hidden lg:block" />  so you can access
          them on the go.
        </p>
        <div className="flex flex-col mx-auto mt-10 text-center lg:flex-row lg:justify-between lg:w-[50%] *:hover:text-red-400">
          <hr className="text-black/30" />
          <div className="p-3">
            <input
              type="radio"
              name="selector"
              id="optionA"
              value="simple"
              className="peer w-0"
              
            />
            <label onClick={() => setTab(0)} for="optionA" className="p-3 cursor-pointer border-b-3 text-blue-950/60 border-white hover:text-red-400  peer-checked:border-b-red-400 peer-checked:text-blue-950">
              Simple Bookmarking
            </label>
          </div>
          <hr className="text-black/30" />
          <div className="p-3">
            <input
              type="radio"
              name="selector"
              id="optionB"
              value="speedy"
              className="peer w-0"
            />
            <label onClick={() => setTab(1)} for="optionB" className="p-3 cursor-pointer border-b-3 text-blue-950/60 border-white hover:text-red-400  peer-checked:border-b-red-400 peer-checked:text-blue-950">
              Speedy Searching
            </label>
          </div>
          <hr className="text-black/30" />
          <div className="p-3">
            <input
              type="radio"
              name="selector"
              id="optionC"
              value="easy"
              className="peer w-0"
            />
            <label onClick={() => setTab(2)} for="optionC" className="p-3 cursor-pointer hover:text-red-400 border-b-3 text-blue-950/60 border-white peer-checked:border-b-red-400 peer-checked:text-blue-950">
              Easy Sharing
            </label>
          </div>
          <hr className="text-black/30" />
        </div>
        
      </main>
      <Tabs tab={tab} />
      <main className="px-5 mt-30">
        <h1 className="text-center mt-10 leading-10 text-3xl font-[500] text-blue-950">
          Download the extension
        </h1>
        <p className="text-center my-5 text-blue-950/60">
           We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.
        </p>
        <div className="mt-6 lg:mt-20 flex flex-col lg:flex-row lg:px-30 gap-10 items-center">
          <Addto name="Chrome" img="/images/logo-chrome.svg" min="62" />
          <Addto name="Firefox" img="/images/logo-firefox.svg" min="55" />
          <Addto name="Opera" img="/images/logo-opera.svg" min="46" />
        </div>
      </main>
      <Faq />
    </>
  );
}
export default Body;
