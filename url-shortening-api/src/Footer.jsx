export default function Footer() {
  return (
    <div className="bg-very-dark-violet text-white text-center px-5 py-10 lg:pt-15 lg:text-left ">
      <div className="lg:flex lg:flex-row lg:items-start lg:justify-between lg:gap-x-25">
        <img
          className="invert-100 brightness-0 contrast-200 mx-auto"
          src="/assets/logo.svg"
          alt="logo"
        />
        <div className="mt-12 lg:mt-0">
          <h1 className="font-bold">Features</h1>
          <ul className="text-gray my-5 leading-8 *:hover:text-cyan cursor-pointer">
            <li>Link Shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
          </ul>
        </div>
        <div className="mt-12 lg:mt-0 ">
          <h1 className="font-bold">Resources</h1>
          <ul className="text-gray my-5 leading-8 *:hover:text-cyan cursor-pointer">
            <li>Blog</li>
            <li>Developers</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="mt-12 lg:mt-0">
          <h1 className="font-bold">Company</h1>
          <ul className="text-gray my-5 leading-8 *:hover:text-cyan cursor-pointer">
            <li>About</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex flex-row w-[60%] lg:w-40 mx-auto justify-between mt-10 lg:mt-0 *:cursor-pointer *:hover:filter-cyan *:transition-all *:duration-300">
          <img src="/assets/icon-facebook.svg" alt="facebook" />
          <img src="/assets/icon-twitter.svg" alt="twitter" />
          <img src="/assets/icon-pinterest.svg" alt="pinterest" />
          <img src="/assets/icon-instagram.svg" alt="instagram" />
        </div>
      </div>
    </div>
  );
}
