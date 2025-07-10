function Tabs(props) {
  const imgs = [
    "images/illustration-features-tab-1.svg",
    "images/illustration-features-tab-2.svg",
    "images/illustration-features-tab-3.svg",
  ];

  const headings = [
    "Bookmark in one click",
    "Intelligent Search",
    "Share your Bookmarks",
  ];

  const about = [
    "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
  ];
  return (
    <div className="lg:flex lg:flex-row lg:gap-x-15 justify-between items-center">
      <div className="relative lg:w-[50%] mt-15 lg:mt-5 overflow-x-clip min-h-70">
        <div className="w-full absolute top-full -translate-y-full right-1/4 rounded-full bg-blue-600 h-3/4"></div>
        <img
          className="relative w-[90%] lg:scale-80 mx-auto"
          src={imgs[props.tab]}
          alt="hero"
        />
      </div>
      <section className="px-5 lg:pr-30 lg:w-[50%] text-center lg:text-left">
        <h1 className=" mt-10 leading-10 text-2xl font-[500] text-blue-950">
          {headings[props.tab]}
        </h1>
        <p className=" text-md mt-3 text-blue-950/60">
          {about[props.tab]}
        </p>
        <button className="hidden lg:block px-4 py-3 border-2 border-transparent lg:px-6 text-sm font-[500] transition-all rounded-md shadow-lg hover:text-blue-600 hover:bg-transparent bg-blue-600 hover:border-blue-600 mt-10 cursor-pointer text-white hover:shadow-md ">
            More info
          </button>
      </section>
    </div>
  );
}
export default Tabs;
