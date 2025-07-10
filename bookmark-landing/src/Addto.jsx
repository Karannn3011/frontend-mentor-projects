function Addto(props) {
    let shift = "lg:translate-y-0";
    if (props.name=="Chrome") {
        shift = "lg:-translate-y-10"
    } else if (props.name=="Opera") {
        shift = "lg:translate-y-10"
    }
    return (
        <div className={`flex flex-col items-center rounded-md text-center w-[90%] mx-auto shadow-md py-8 px-4 ${shift}`}>
        <img src={props.img} alt={props.name} className="mx-auto" />
        <p className="font-semibold text-xl text-blue-950/80 mt-5">Add to {props.name}</p>
        <p className="text-blue-950/60 mt-1">Minimum version {props.min}</p>
        <svg className="my-6 w-full" xmlns="http://www.w3.org/2000/svg" width="280" height="4">
        <path fill="#495DCF" fill-opacity=".2" fill-rule="evenodd" d="M0 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm280 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-17 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-35 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-35 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-35 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-18 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-17 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm122 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-35 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-35 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-70 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM88 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM70 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM53 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM35 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM18 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
        <button></button>
        </svg>
        <button className="bg-blue-600 border-2 border-transparent hover:border-blue-600 hover:bg-transparent hover:text-blue-600 transition-all w-full rounded-lg py-3 text-white text-sm font-semibold shadow-md cursor-pointer">Add & Install Extension</button>
        </div>
    )
}

export default Addto