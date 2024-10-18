import React from "react";
import { CONTACT } from "../constants";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";
import { FaGoogle, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="border-t border-stone-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 1, y: -100 }}
        transition={{ duration: 1 }}
        className="my-10 text-center text-4xl md:text-5xl" // Responsive font size
      >
        Get In Touch
      </motion.h2>
      <div>
        <ContactForm />
      </div>
      <div className="text-center flex flex-col md:flex-row justify-center gap-10 md:gap-36 mt-10">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 1, x: 100 }}
          transition={{ duration: 1.5 }}
          className="my-4 flex items-center justify-center space-x-2 text-lg md:text-2xl" // Responsive text size
        >
          <FaPhone className="text-3xl" />
          <span>{CONTACT.phoneNo}</span>
        </motion.p>

        <motion.a
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5 }}
          href="mailto:136abdullah42@email.com"
          className="flex items-center justify-center space-x-2 text-lg md:text-2xl" // Responsive text size
        >
          <FaGoogle className="text-3xl" />
          <span>{CONTACT.email}</span>
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;
