import React from "react";
import profile from "../image/profile.png";
import cv from "../image/Afzal_khan_React.js_developer.pdf"; // Add the path to your CV file
import { TypeAnimation } from "react-type-animation";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiNodejsSmall,
  DiReact,
} from "react-icons/di";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="mt-24 lg:mt-36 relative max-w-[1200px] mx-auto">
      <div className="grid md:grid-cols-2 gap-8 place-items-center">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation
            sequence={["Front End Developer", 1000, "UI&UX Designer", 1000]}
            speed={50}
            repeat={Infinity}
            className="text-gray-400 text-xl mt-2 md:text-5xl font-serif"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-200 text-3xl sm:text-4xl md:text-5xl tracking-tight mb-4 font-serif"
          >
            I AM <br />
            <span className="text-purple-500">MIR AFZAL KHAN</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-300 text-lg md:text-2xl max-w-[300px] md:max-w-[500px] mb-6 font-serif"
          >
            I am a passionate Front-End Developer with over 1 year of
            experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-wrap sm:flex-nowrap items-center justify-center md:justify-start gap-6 my-4"
          >
            <motion.a
              href={cv}
              download="Afzal_khan_React.js_developer.pdf" // Specify the downloaded file name
              href={cv} // Link to the CV file
              download="Afzalkhan_CV.pdf" // Specify the downloaded file name
              href={cv}
              download="Afzal_khan.pdf" // Specify the downloaded file name
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
              }}
              className="z-10 cursor-pointer font-serif text-gray-200 md:w-auto p-2 sm:p-4 border border-purple-400 hover:bg-purple-600 rounded-sm"
            >
              Download CV
            </motion.a>

            <div className="flex flex-row gap-4 text-4xl md:text-6xl text-purple-400 z-20">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://github.com/afzaljadoon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineGithub />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.linkedin.com/in/mir-afzal-khan-131519252/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineLinkedin />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.instagram.com/afzal_khan_jadoon/profilecard/?igsh=MXdyOXB1eHV1Y2Jsag=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineInstagram />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.img
          src={profile}
          alt="Profile"
          alt="Profile"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* Tech Stack Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
        className="flex flex-row items-center justify-center py-12 px-12 md:px-0 w-full text-7xl"
      >
        <p className="text-gray-200 mr-6 font-serif">
          My Tech Stack
        </p>
        <DiHtml5 className="text-orange-600 mx-2" />
        <DiCss3 className="text-blue-600 mx-2" />
        <DiJavascript1 className="text-yellow-500 mx-2" />
        <DiReact className="text-blue-500 mx-2" />
        <DiNodejsSmall className="text-green-500 mx-2" />
      </motion.div>
    </div>
  );
};

export default Hero;
