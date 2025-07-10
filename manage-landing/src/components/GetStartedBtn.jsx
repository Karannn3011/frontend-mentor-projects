function GetStartedBtn(props) {
    return (
        <>
        <button className={`w-33 shadow-bright-red font-[500] text-sm shadow-md hover:opacity-80 transition-opacity duration-250 cursor-pointer ${props.invert ? `bg-very-light-gray text-bright-red font-bold mt-10 lg:mt-0 z-5` : `bg-bright-red text-very-light-gray`}  py-3 rounded-full px-2 ` + props.className}>Get Started</button>
        </>
    )
}

export default GetStartedBtn