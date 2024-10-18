import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { GrFormRefresh } from "react-icons/gr";

const ContactForm = () => {
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_l7ujih7", "template_h424m0n", formRef.current, {
        publicKey: "7g_bN_6f8dpi8ogTO",
      })
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          setError(false);

          // Clear the input fields
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
          formRef.current.reset(); // Optional: Resets the form fields visually
        },
        (error) => {
          console.error(error.text);
          setError(true);
          setSuccess(false);
        }
      );
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-8">
      <motion.div
        className="max-w-2xl mx-auto p-6 shadow-gray-200 rounded-lg"
        animate="visible"
        variants={fadeInUp}
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1.5 }}
      >
        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
          {/* Name Field */}
          <motion.div
            variants={fadeInUp}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.5 }}
          >
            <label htmlFor="name" className="block text-sm font-medium text-white">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-3 block w-full rounded-md text-white bg-stone-900 border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter Your Name"
              required
            />
          </motion.div>

          {/* Email Field */}
          <motion.div
            variants={fadeInUp}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.5 }}
          >
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm text-white bg-stone-900 focus:ring-blue-500 focus:border-blue-500"
              placeholder="you@example.com"
              required
            />
          </motion.div>

          {/* Message Field */}
          <motion.div
            variants={fadeInUp}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.5 }}
          >
            <label htmlFor="message" className="block text-sm font-medium text-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="mt-1 p-3 block w-full rounded-md text-white bg-stone-900 border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your message here..."
              required
            ></textarea>
          </motion.div>

          {/* Submit Button */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.5 }}
          >
            <button
              type="submit"
              className="w-full bg-purple-900 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send Message
            </button>
            {error && <p className="text-red-500">Error sending message</p>}
            {success && <p className="text-green-500">Message sent successfully!</p>}
          </motion.div>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactForm;
