import Api from "./Api";
import { useState } from "react";
import Links from "./Links.jsx";

export default function Shorten() {
  const [links, setLinks] = useState([]);
  const [emtpy, isEmpty] = useState(false);
  async function adding(link) {
    if (link === "") {
      isEmpty(true);
    }
    function formatURL(url) {
    
    
      if (!/^https?:\/\//i.test(url)) {
        return "https://" + url;
      }
      return url;
    }

    const short = await Api(formatURL(link));

    const updatedLinks = [
      ...links,
      {
        orglink: link,
        shortlink: short,
      },
    ];

    updatedLinks.forEach((elem) => {
      sessionStorage.setItem(elem.orglink, elem.shortlink);
    });

    setLinks(updatedLinks);

    console.log(updatedLinks);
  }
  return (
    <div>
      <div
        id="urlform"
        className="relative text-center w-[90%] lg:w-[80%]  rounded-xl lg:rounded-md mx-auto mt-10  
                 [background-color:var(--color-dark-violet)] -translate-y-1/2"
      >
        <img
          src="/assets/bg-shorten-desktop.svg"
          alt=""
          className="hidden lg:block lg:absolute lg:right-0 lg:w-full lg:h-full lg:top-0 lg:z-0 lg:object-cover lg:rounded-tr-lg lg:rounded-bl-lg lg:rounded-br-lg"
        />

        <img
          src="/assets/bg-shorten-mobile.svg"
          alt=""
          className="lg:hidden absolute right-0 top-0 z-0 object-contain rounded-tr-xl"
        />

        <div className="relative z-10 py-5 px-3 lg:py-7 lg:px-11">
          <form className="lg:flex items-center lg:justify-between lg:gap-x-4">
            
            <input
            onChange={() => isEmpty(false)}
              id="urlvalue"
              className={`bg-white border-2 w-[90%] p-3 rounded-lg lg:w-[70%] ${
                emtpy ? " border-red-500" : "border-white"
              }`}
              type="text"
              placeholder="Shorten a link here..."
              required
            />
            
            
            <button
              onClick={(e) => {
                e.preventDefault();
                adding(document.getElementById("urlvalue").value);
                Api(document.getElementById("urlvalue").value);
              }}
              className="hover:brightness-120 cursor-pointer transition-all duration-300 bg-cyan rounded-lg text-white font-semibold w-[90%] lg:w-[30%] mt-4 lg:mt-0 py-3"
              type="submit"
            >
              Shorten it!
            </button>
          </form>
          <p className="text-red-500 text-left px-7 lg:px-0 mt-1">{emtpy ? "Please add a link" : ""}</p>
        </div>
      </div>
      <Links links={links} />
    </div>
  );
}
