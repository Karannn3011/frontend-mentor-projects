import logo from "../assets/logo.svg"
import hamburger from "../assets/icon-hamburger.svg"
import Menu from "./Menu.jsx"
import { useState } from "react"

function Navbar() {
    const [menu, setMenu] = useState(false);
    const [anim, setAnim] = useState(false);
    return (
        <>
        <nav className="absolute z-1 w-full">
        <div id="small" className="lg:hidden px-5 py-8 relative bg-transparent">
            <img onClick={() => {
                setMenu(true)
                setTimeout(() => setAnim(true), 50)
            }} className="absolute scale-120" src={hamburger} alt="Menu" />
            <img className="mx-auto scale-120" src={logo} alt="logo" />
        </div>
        <div id="large" className="hidden  items-center relative lg:flex py-8 px-10   bg-transparent">
            <img className="absolute scale-120" src={logo} alt="logo" />
            <ul className="flex *:border-b-2 *:border-transparent *:hover:border-b-white px-35 text-lg gap-x-12 *:cursor-pointer *:text-white flex-row">
            <li>home</li>
            <li>shop</li>
            <li>about</li>
            <li>contact</li>
           </ul>
        </div>
        <Menu menu={menu} anim={anim} setMenu={setMenu} setAnim={setAnim}/>
        </nav>
        
        </>
    )

}

export default Navbar;