import Navbar from "./components/Navbar.jsx";
import mobhero1 from "./assets/mobile-image-hero-1.jpg";
import mobhero2 from "./assets/mobile-image-hero-2.jpg";
import mobhero3 from "./assets/mobile-image-hero-3.jpg";
import deskhero1 from "./assets/desktop-image-hero-1.jpg";
import deskhero2 from "./assets/desktop-image-hero-2.jpg";
import deskhero3 from "./assets/desktop-image-hero-3.jpg";
import angle from "./assets/icon-angle-left.svg";
import { useRef, useState } from "react";
import arrow from "./assets/icon-arrow.svg";
import darkimg from "./assets/image-about-dark.jpg"
import lightimg from "./assets/image-about-light.jpg"

const information = [
  {
    heading: "Discover innovative ways to decorate",
    description:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    heading: "We are available all across the globe",
    description:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    heading: "Manufactured with the best materials",
    description:
      "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];
function Body() {
  const boxRef = useRef(null);
  const textRef = useRef(null);
  const [current, setCurrent] = useState(0);
  function handlePrev() {
    const box = boxRef.current;
    const text = textRef.current;
    const boxwidth = box.clientWidth;
    const textwidth = text.clientWidth;
    if (current > 0) {
      setCurrent(current - 1);
      box.scrollTo({
        left: (current - 1) * boxwidth,
        behavior: "smooth",
      });
      text.scrollTo({
        left: (current - 1) * textwidth,
        behavior: "smooth",
      });
    } else {
      setCurrent(2);
      box.scrollTo({
        left: 2 * boxwidth,
        behavior: "smooth",
      });
      text.scrollTo({
        left: 2 * textwidth,
        behavior: "smooth",
      });
    }
  }

  function handleNext() {
    const box = boxRef.current;
    const boxwidth = box.clientWidth;
    const text = textRef.current;
    const textwidth = text.clientWidth;
    if (current < 2) {
      setCurrent(current + 1);
      box.scrollTo({
        left: (current + 1) * boxwidth,
        behavior: "smooth",
      });
      text.scrollTo({
        left: (current + 1) * textwidth,
        behavior: "smooth",
      });
    } else {
      setCurrent(0);
      box.scrollTo({
        left: 0,
        behavior: "smooth",
      });
      text.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }
  }
  return (
    <>
      <div className="lg:flex lg:flex-row">
        <div className="relative">
          <Navbar />
          <div
            id="container"
            ref={boxRef}
            className="overflow-x-scroll no-scrollbar relative w-[100vw] lg:w-[55vw]"
          >
            <div
              id="imgbox mobile"
              className="lg:hidden *:w-[100%] flex flex-row w-[300%]"
            >
              <img src={mobhero1} alt="hero1" />
              <img src={mobhero2} alt="hero2" />
              <img src={mobhero3} alt="hero3" />
            </div>
            <div
              id="imgbox desktop"
              className="hidden  *:w-[100%] lg:flex flex-row w-[300%]"
            >
              <img src={deskhero1} alt="hero1" />
              <img src={deskhero2} alt="hero2" />
              <img src={deskhero3} alt="hero3" />
            </div>
          </div>

          <div className="absolute *:cursor-pointer lg:hidden *:py-4 *:px-5 bg-black flex flex-row bottom-0 right-0">
            <img onClick={handlePrev} src={angle} alt="Previous" />
            <img
              onClick={handleNext}
              src={angle}
              alt="Next"
              className="rotate-180"
            />
          </div>
        </div>
        <section className="relative">
          <div
            id="text-container"
            ref={textRef}
            className="overflow-x-scroll no-scrollbar relative w-[100vw] lg:w-[45vw]"
          >
            <div className="*:w-[100vw]  flex flex-row w-[300%] pt-8 lg:pt-20 pb-9 lg:pb-7 lg:px-20 px-6 gap-x-12 lg:gap-x-40">
              {information.map((e, i) => {
                return (
                  <div key={i} className="">
                    <h1 className="text-4xl font-bold">{e.heading}</h1>
                    <p className="text-gray-500 mt-5">{e.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="hover:opacity-75 flex cursor-pointer px-6 lg:px-20 flex-row gap-x-4 items-center mb-10">
            <p className="tracking-[10px] font-semibold">SHOP NOW</p>
            <img className="w-15 h-4" src={arrow} alt="Shop now!" />
          </div>
          <div className="absolute hidden *:cursor-pointer lg:flex *:py-4 *:px-7 *:bg-black *:transition-opacity *:duration-200 *:hover:opacity-70  flex-row bottom-0 left-0">
            <img onClick={handlePrev} src={angle} alt="Previous" />
            <img
              onClick={handleNext}
              src={angle}
              alt="Next"
              className="rotate-180"
            />
          </div>
        </section>
      </div>
      <div className="lg:flex flex-row lg:*:w-1/3">
              <section>
                <img className="w-full" src={darkimg} alt="About" />
              </section>
              <section className="py-8 px-6">
                <h1 className="font-bold tracking-[4px]">ABOUT OUR FURNITURE</h1>
                <p className="my-4 text-gray-500">Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.</p>
              </section>
              <section>
                <img className="w-full h-full" src={lightimg} alt="About" />
              </section>
      </div>
    </>
  );
}

export default Body;
