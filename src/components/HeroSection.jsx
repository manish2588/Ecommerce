import { assets } from "../assets/assets";

function HeroSection() {
  return (
    <div className="heroSection max-w-screen h-[75vh] border border-t-0 border-gray-500 flex flex-col  lg:flex-row">
      <div className="heroLeft w-full lg:basis-1/2 h-full flex flex-col items-center justify-center ">
        <div>
          {" "}
          <p className="text-gray-800 text-lg">OUR BEST SELLER</p>
          <p className="text-gray-800 text-6xl font-serif">Latest Arrivals</p>
          <p className="text-gray-800 text-lg">SHOP NOW</p>
        </div>
      </div>
      <div className="basis-1/2 h-full">
              <img src={assets.hero_img} className="w-full h-full object-cover"/>
      </div>
    </div>
  );
}

export default HeroSection;
