function Feature(props) {
  return (
    <>
    <div>
      <div className="flex flex-row lg:bg-transparent items-center ml-5 rounded-l-full bg-very-pale-red ">
        <div className="bg-bright-red font-bold text-white  text-center rounded-full py-2 px-4">
          {props.num}
        </div>
        <p className="ml-3 text-very-dark-blue font-semibold">{props.title}</p>
      </div>
      <p className="px-5 text-left my-4 lg:ml-15 text-dark-grayish-blue">
        {props.info}
      </p>
      </div>
    </>
  );
}

export default Feature;
