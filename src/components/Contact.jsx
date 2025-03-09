import React, { useRef } from 'react';
import emailjs from "@emailjs/browser";
import Reveal from "./Reveal";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_fp3a69p', 'template_y614lgm', form.current, '4Xj6Js_zUJGu5s8d9')
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset(); // Reset form after successful submission
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div
      id="contact"
      className="relative flex items-center justify-center min-h-screen px-4 md:px-6 font-serif bg-gradient-to-br from-gray-100 to-purple-50"
    >
      <Reveal>
        <div className="relative flex flex-col items-center w-full max-w-lg p-6 md:p-8 rounded-xl shadow-2xl bg-white bg-opacity-90">
          <p className="text-gray-800 font-bold text-2xl md:text-3xl mb-4 md:mb-6 text-center">
            Let’s Connect!
          </p>
          <form ref={form} onSubmit={sendEmail} className="w-full space-y-4 md:space-y-6">
            <input
              type="text"
              id="name"
              placeholder="Your Name ..."
              name="name"
              className="w-full rounded-lg border border-purple-500 py-2 md:py-3 px-3 md:px-4 text-gray-800 bg-gradient-to-r from-purple-100 to-purple-50 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
            />
            <input
              type="email"
              id="email"
              placeholder="Your Email ..."
              name="email"
              className="w-full rounded-lg border border-purple-500 py-2 md:py-3 px-3 md:px-4 text-gray-800 bg-gradient-to-r from-purple-100 to-purple-50 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
            />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="4"
              placeholder="Your Message ..."
              className="w-full rounded-lg border border-purple-500 py-2 md:py-3 px-3 md:px-4 text-gray-800 bg-gradient-to-r from-purple-100 to-purple-50 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
            />
            <button
              type="submit"
              className="w-full py-2 md:py-3 rounded-lg text-white font-semibold text-base md:text-lg bg-purple-600 hover:bg-purple-700 transition-colors duration-300 shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </Reveal>
    </div>
  );
};

export default Contact;
