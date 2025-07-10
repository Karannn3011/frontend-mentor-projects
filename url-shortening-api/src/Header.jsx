import { useState } from "react";

export default function Header() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <header className="flex lg:px-20 flex-row justify-between items-center p-5">
        <div className="flex flex-row  items-center gap-x-19">
        <img src="/assets/logo.svg" alt="logo" />
        <ul className="hidden lg:flex gap-x-4 *:text-grayish-violet *:hover:text-black *:cursor-pointer text-sm">
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
        </div>
        <div className="hidden lg:flex items-center gap-x-5">
          <button className="text-grayish-violet text-sm hover:text-black cursor-pointer">Login</button>
          <button className="bg-cyan px-8 py-2 w-full rounded-full text-white cursor-pointer hover:brightness-150 transition-all duration-300">Sign Up</button>
        </div>
        <img
          className="lg:hidden cursor-pointer"
          onClick={() => setMenu(!menu)}
          src="/assets/icon-menu.svg"
          width="40px"
          alt="menu"
        />
       
      </header>
      <div
        className={`z-10 absolute bg-dark-violet text-white text-center p-5  w-[80%] left-1/2 leading-13 ease-in-out font-semibold rounded-xl pb-7
        transition-transform duration-200 ${
          menu ? `-translate-y-0 -translate-x-1/2` : `-translate-y-[500px] -translate-x-1/2`}
        }`}
      >
        <ul>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
          <li>
            <hr className="text-white/40" />
          </li>
          <li>Login</li>
          <li>
            <button className="bg-cyan w-full rounded-full">Sign Up</button>
          </li>
        </ul>
      </div>
    </>
  );
}
