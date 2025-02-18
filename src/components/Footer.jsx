import { assets } from "../assets/assets";

function Footer() {
  return (
   <footer>
     <div className="flex flex-col space-y-4 lg:flex-row mt-8 mb-4  border-b-1 border-gray-400">
      <div className="basis-1/2">
        <img src={assets.logo} className=" w-2/5 lg:w-1/4" />
        <p className="text-gray-500 text-base w-full lg:w-3/4 text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <div className="basis-1/2 flex flex-col space-y-4 lg:flex-row">
        <div className="basis-1/2 space-y-1">
          <h1 className="text-gray-800 text-lg font-medium font-serif mb-1 lg:mb-4">
            COMPANY
          </h1>
          <p className="text-base text-gray-500">Home</p>
          <p className="text-base text-gray-500">About</p>
          <p className="text-base text-gray-500">Delivery</p>
          <p className="text-base text-gray-500">Privacy Policy</p>
        </div>
        <div className="basis-1/2 space-y-1">
          <h1 className="text-gray-800 text-lg font-medium font-serif mb-1 lg:mb-4">
            GET IN TOUCH
          </h1>
          <p className="text-base text-gray-500">+1-000-000-0000</p>
          <p className="text-base text-gray-500">manishkc258@gmail.com</p>
          <p className="text-base text-gray-500">Facebook</p>
        </div>
      </div>
    </div>
    <p className="mt-2 text-gray-900 text-center mb-6 p-2">Copyright 2025@ Forever - All Right Reserved.</p>
   </footer>
  );
}

export default Footer;
