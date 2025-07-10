import { useState } from "react";
import Api from "./Api";
export default function Links(props) {
  const linkset = Object.keys(sessionStorage);
  const newlink = linkset
    .map((link) => {
      const value = sessionStorage.getItem(link);
      if (value && value.includes("cleanuri")) {
        return {
          orglink: link,
          shortlink: value,
        };
      }
      return null;
    })
    .filter((item) => item !== null);
  console.log(newlink);
  const handleCopy = (text, orglink) => {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(orglink);
    });
  } else {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "absolute";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    setCopied(orglink);
  }
};
  const [copied, setCopied] = useState("");
  return (
    <div className="-mt-8 mb-17 lg:mb-10">
      {newlink.map((elem, i) => {
        return (
          <div
            key={i}
            className="bg-white w-[90%] lg:w-[80%] mx-auto p-5 flex flex-col gap-3 rounded-lg my-5 lg:flex-row lg:items-center lg:justify-between shadow-md"
          >
            <h1 className="">{elem.orglink}</h1>
            <div className="flex flex-col lg:flex-row lg:items-center row-start-2 justify-between lg:gap-x-7">
              <a
                id={`value${i}`}
                target="_blank"
                href={
                  elem.orglink.includes("http")
                    ? elem.orglink
                    : "https://" + elem.orglink
                }
                className="dynamic-link text-cyan"
              >
                {elem.shortlink}
              </a>
              <button
                id={`copybtn${i}`}
                value={elem.orglink}
                onClick={() =>
                  handleCopy(
                    document.getElementById(`value${i}`).textContent,
                    elem.orglink
                  )
                }
                className={
                  `cursor-pointer hover:brightness-120 transition-all duration-300 mt-3 lg:mt-0 text-white p-2 min-w-40 rounded-lg` +
                  ` ${
                    copied.match(elem.orglink) ? "bg-dark-violet" : "bg-cyan"
                  }`
                }
              >
                {copied.match(elem.orglink) ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
