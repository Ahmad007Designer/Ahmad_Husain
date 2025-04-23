"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import imghero from "/imghero.png";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceID = import.meta.env.VITE_SERVICE_ID;
    const templateID = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;
    if (!serviceID || !templateID || !publicKey) {
      toast.error("❌ Email service is not properly configured.", {
        position: "top-right",
      });
      return;
    }

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
        console.log("Success:", result.text);
        toast.success("✅ Message sent successfully!", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        form.current.reset();
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        toast.error("❌ Failed to send message. Try again later.", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      });
  };

  return (
    <section className="min-h-screen flex items-center justify-center p-6 mt-10 relative bg-black">
      <ToastContainer />
      <article className="shadow-lg rounded-lg flex flex-col md:flex-row max-w-4xl w-full relative">
        {/* Left Side Image */}
        <aside className="w-full md:w-1/2 relative">
          <div className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full bg-gradient-to-r from-[#6d2897] via-[#8e6cf5] to-[#bb61c5] shadow-[0_0_70px_rgba(182,0,182,0.7)]"></div>
          <img
            src={imghero}
            alt="Contact illustration"
            className="h-[250px] sm:h-[400px] md:h-[485px] w-[300px] sm:w-[480px] object-cover rounded-t-lg md:rounded-r-lg relative"
          />
        </aside>

        {/* Form Side */}
        <section className="p-8 w-full md:w-1/2 bg-gray-900 rounded-b-lg md:rounded-r-lg">
          <header className="mb-6">
            <h2 className="text-4xl font-bold text-center text-white">Contact Us</h2>
          </header>

          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label htmlFor="user_name" className="block text-gray-300 font-medium mb-2">Name</label>
              <input
                type="text"
                name="user_name"
                id="user_name"
                required
                placeholder="Your name"
                className="w-full px-4 py-2 text-white bg-gray-800 rounded-lg focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="user_email" className="block text-gray-300 font-medium mb-2">Email</label>
              <input
                type="email"
                name="user_email"
                id="user_email"
                required
                placeholder="Your email"
                className="w-full px-4 py-2 text-white bg-gray-800 rounded-lg focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="user_mob" className="block text-gray-300 font-medium mb-2">Phone Number</label>
              <input
                type="tel"
                name="user_mob"
                id="user_mob"
                required
                placeholder="Your phone number"
                className="w-full px-4 py-2 text-white bg-gray-800 rounded-lg focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300 font-medium mb-2">Message</label>
              <textarea
                name="message"
                id="message"
                required
                placeholder="Your message"
                className="w-full px-4 py-2 text-white bg-gray-800 rounded-lg focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full text-white border-2 py-2 px-6 focus:outline-none hover:bg-[#801b9c] hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-lg"
            >
              Send Message
            </button>
          </form>
        </section>
      </article>
    </section>
  );
}
