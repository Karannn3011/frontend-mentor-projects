function Menu() {
  return (
    <>
      <div id="menu" className="fixed top-20 inset-0 bg-linear-to-b from-transparent to-black/90 ">
        <div className="w-[90%] mx-auto shadow-md text-center bg-white py-7">
          <ul className="flex flex-col gap-y-5 *:font-[600] *:text-very-dark-blue">
            <li>Pricing</li>
            <li>Product</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Community</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Menu;
