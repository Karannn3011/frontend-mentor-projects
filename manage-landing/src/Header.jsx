import bgtab from "./assets/bg-tablet-pattern.svg";
import logo from "./assets/logo.svg";
import hamburger from "./assets/icon-hamburger.svg";
import closeMenu from "./assets/icon-close.svg"
import intro from "./assets/illustration-intro.svg";
import GetStarted from "./components/GetStartedBtn.jsx";
import Menu from "./Menu.jsx";
import { useState } from "react";
function Header() {
    const [menu, setMenu] = useState(false);
    
    
  return (
    <>
      <header className="relative overflow-x-clip">
        <img className="lg:scale-100 lg:left-1/2 lg:-translate-y-1/6 absolute -z-10 scale-120 left-20 " src={bgtab} alt="bg" />
        <img className="lg:-left-1/3 lg:translate-y-3/4 absolute -z-10 top-1/2 left-2/3 translate-y-1/4 " src={bgtab} alt="bg" />
        <div>
          <nav className="p-5 lg:px-10 flex flex-row justify-between items-center">
            <div>
              <img src={logo} alt="logo" />
            </div>
            <div className="lg:hidden">
              <img className="z-10" onClick={() => { 
                setMenu(!menu)
                document.body.classList.toggle("overflow-y-hidden")}} 
                src={menu ? closeMenu : hamburger} alt="menu" />
              {menu && <Menu />}
            </div>
            <div className="hidden lg:block">
              <ul className="*:cursor-pointer *:hover:text-black/50 transition-all duration-200 flex flex-row gap-x-9 *:font-[600] lg:*:font-[500] *:text-very-dark-blue">
            <li>Pricing</li>
            <li>Product</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Community</li>
          </ul>
            </div>
            <div className="hidden lg:block">
              <GetStarted />
            </div>
          </nav>
          <main className="flex flex-col lg:flex-row-reverse items-center justify-between lg:px-20 lg:my-5">
            <section>
              <img className="mx-auto my-5 lg:my-0" src={intro} alt="hero" />
            </section>
            <section className="text-center lg:text-left px-5 lg:w-1/2">
              <h1 className="text-4xl lg:text-5xl lg:leading-13 font-[700] text-very-dark-blue">
                Bring everyone together to build better products.
              </h1>
              <p className="text-dark-grayish-blue my-5 lg:text-lg lg:pr-50">
                Manage makes it simple for software teams to plan day-to-day
                tasks while keeping the larger team goals in view.
              </p>
              <GetStarted className="my-2" />
            </section>
          </main>
        </div>
      </header>
    </>
  );
}

export default Header;
