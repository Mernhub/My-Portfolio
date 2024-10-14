import React from "react";
import { CONTACT } from "../constants";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";
import {
  FaGoogle,
  FaMailBulk,
  FaMailchimp,
  FaPhone,
  FaPhoneVolume,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="border-t border-stone-900 pb-20">
      
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 1, y: -100 }}
        transition={{ duration: 1 }}
        className="my-10 text-center text-4xl"
      >
        Get In Touch
      </motion.h2>
      <div>
        <ContactForm />
      </div>
      <div className="text-center flex justify-center gap-36">
      
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 1, x: 100 }}
          transition={{ duration: 1.5 }}
          className="my-4 flex items-center justify-center space-x-2"
        >
          <FaPhone className="text-3xl mr-4" />
          <span>{CONTACT.phoneNo}</span>
        </motion.p>

        <motion.a
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5 }}
          href="mailto:136abdullah42@email.com"
          className="flex items-center justify-center space-x-2"
        >
          <FaGoogle className="text-3xl mr-4" />
          <span>{CONTACT.email}</span>
        </motion.a>
      </div>
      
    </div>
  );
};

export default Contact;
