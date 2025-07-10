import close from "../assets/icon-close.svg"


function Menu(props) {
 

  return (
    <div
      id="menu-container"
      className={`${props.menu ? `block` : `hidden`} fixed inset-0 z-50 transition-all duration-300 ease-in-out ${props.anim ? `bg-black/60` : `bg-black/0`}`}
    >
      <div className={`flex flex-row items-center justify-between bg-white transition-transform duration-300 ease-in-out px-5 py-8 ${props.anim ? `translate-y-0` : `-translate-y-full`}`}>
        <div>
        <img onClick={() => {
            props.setAnim(false);
            setTimeout(() => props.setMenu(false), 300)
          }}
          className="scale-120 cursor-pointer"
           src={close} alt="Close Menu" />
        </div>
          
           <ul className="flex w-[75%] max-w-98 text-lg font-bold justify-between *:cursor-pointer flex-row">
            <li>home</li>
            <li>shop</li>
            <li>about</li>
            <li>contact</li>
           </ul>
      </div>
    </div>
  );
}

export default Menu;
