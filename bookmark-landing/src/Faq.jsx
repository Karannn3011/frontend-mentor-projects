import { useState } from "react";

function Faq() {
  const [currentQues, setCurrentQues] = useState(-1);
  const ques = [
    {
      q: "What is a Bookmark?",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis",
    },
    {
      q: "How can I request a new browser?",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis",
    },
    {
      q: "Is there a mobile app?",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis",
    },
    {
      q: "What about other Chromium Browsers?",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis",
    },
  ];
  return (
    <>
      <main className="px-5 mt-30 lg:mt-40 lg:w-1/2 mx-auto text-center">
        <h1 className="text-center mt-10 leading-10 text-3xl font-[500] text-blue-950">
          Frequently Asked Questions
        </h1>
        <p className="text-center my-5 text-blue-950/60">
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
        <div>
          {ques.map((elem, i) => {
            return (
              <>
                <div
                  id={`q${i}`}
                  className="flex cursor-pointer flex-row justify-between items-center"
                  onClick={() => {
                    if (currentQues == i) {
                      setCurrentQues(-1);
                    } else {
                      setCurrentQues(i);
                    }
                  }}
                >
                  <p className="text-left hover:text-red-400 text-blue-950 p-3">{elem.q}</p>
                  <svg
                    className={`transition-transform duration-300 ease-in-out ${i == currentQues ? `rotate-180` : `rotate-0`}`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="12"
                  >
                    <path
                      fill="none"
                      stroke={i == currentQues ? "red" : "#5267DF"}
                      stroke-width="3"
                      d="M1 1l8 8 8-8"
                    />
                  </svg>
                </div>
                <p
                  className={`${
                    i == currentQues ? "block" : "hidden"
                  } text-blue-950/60 text-justify px-3 py-4`}
                >
                  {elem.a}
                </p>
                <hr className="text-black/30" />
              </>
            );
          })}
        </div>
        <button className="px-4 py-3 border-2 border-transparent lg:px-6 text-sm font-[500] transition-all rounded-md shadow-lg hover:text-blue-600 hover:bg-transparent bg-blue-600 hover:border-blue-600 mt-10 cursor-pointer text-white hover:shadow-md ">
            More info
          </button>
      </main>
    </>
  );
}

export default Faq;
