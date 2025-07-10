import Testimonial from "./Testimonial.jsx";
import ali from "../assets/avatar-ali.png";
import anisha from "../assets/avatar-anisha.png";
import richard from "../assets/avatar-richard.png";
import shanai from "../assets/avatar-shanai.png";
import { useRef, useState, useEffect } from "react";
import GetStarted from "./GetStartedBtn.jsx";

function Slider() {
  const boxRef = useRef(null);
  const buttonRef = useRef(null);
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const box = boxRef.current;
      if (!box) return;

      if (current === 4) {
        box.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
        setCurrent(1);
      } else {
        let scrollLeft;
        scrollLeft = current * box.innerWidth;

        box.scrollTo({
          top: 0,
          left: scrollLeft,
          behavior: "smooth",
        });
        setCurrent(current + 1);
      }
    };

    const interval = setInterval(() => {
      if (buttonRef.current) {
        buttonRef.current.click();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [current]);

  return (
    <>
      <div
        id="container"
        ref={boxRef}
        className="mb-10 mx-auto *:pt-20 lg:*:pt-25 w-screen snap-center snap-mandatory no-scrollbar overflow-x-scroll scroll-smooth"
      >
        <div
          id="track"
          className="flex w-[400vw] lg:w-[400vw] flex-row "
        >
          <Testimonial
            current={current}
            id="1"
            av={anisha}
            name="Anisha Li"
            said="“Manage has supercharged our team’s workflow. The ability to maintain 
  visibility on larger milestones at all times keeps everyone motivated.”"
          />
          <Testimonial
            current={current}
            id="2"
            av={ali}
            name="Ali Bravo"
            said="“We have been able to cancel so many other subscriptions since using 
  Manage. There is no more cross-channel confusion and everyone is much 
  more focused.”"
          />
          <Testimonial
            current={current}
            id="3"
            av={richard}
            name="Richard Watts"
            said="“Manage allows us to provide structure and process. It keeps us organized 
  and focused. I can’t stop recommending them to everyone I talk to!”"
          />
          <Testimonial
            current={current}
            id="4"
            av={shanai}
            name="Shanai Gough"
            said="“Their software allows us to track, manage and collaborate on our projects 
  from anywhere. It keeps the whole team in-sync without being intrusive.”"
          />
        </div>
      </div>

      <button
        id="scroll"
        ref={buttonRef}
        onClick={() => {
          const box = boxRef.current;
          if (!box) return;

          if (current === 4) {
            box.scrollTo({ left: 0, behavior: "smooth" });
            setCurrent(1);
          } else {
            box.scrollTo({
              left: current * window.screen.width,
              behavior: "smooth",
            });
            setCurrent((prev) => prev + 1);
          }
        }}
        className="invisible"
      ></button>
      <div className="flex lg:hidden flex-row  w-20 mx-auto gap-x-3">
        {[1, 2, 3, 4].map((e, i) => {
          return (
            <div
              key={i}
              className={`w-3 rounded-full h-3 border border-bright-red ${
                current == e ? `bg-bright-red` : `bg-transparent`
              }`}
            ></div>
          );
        })}
      </div>
      <div className="flex items-center justify-center my-10 lg:mb-10 lg:my-0">
        <GetStarted className="" />
      </div>
    </>
  );
}

export default Slider;
