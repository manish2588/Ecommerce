import Title from "../components/Title";
import { assets } from "../assets/assets";
import { easeInOut, motion } from "framer-motion";
function AboutPage() {
  return (
    <motion.section className="mt-8 space-y-4"
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:1,ease:easeInOut}}
    >
      <Title text1={"ABOUT"} text2={"US"} />
      <div className="flex flex-col lg:flex-row">
        <div className="basis-2/5 p-4 object-cover">
          <img src={assets.about_img} />
        </div>
        <div className="basis-3/5 p-6 space-y-6">
          <p className="text-gray-500 text-base">
            Forever was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes.
          </p>
          <p className="text-gray-500 text-base">
            Since our inception, we've worked tirelessly to curate a diverse
            selection of high-quality products that cater to every taste and
            preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </p>
          <h1 className="text-gray-800 text-base font-medium">Our Mission</h1>
          <p className="text-gray-500 text-base">
            Our mission at Forever is to empower customers with choice,
            convenience, and confidence. We're dedicated to providing a seamless
            shopping experience that exceeds expectations, from browsing and
            ordering to delivery and beyond.
          </p>
        </div>
      </div>
    </motion.section>
  );
}

export default AboutPage;
