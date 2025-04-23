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
        });
        form.current.reset();
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        toast.error("❌ Failed to send message. Try again later.", {
          position: "top-right",
          autoClose: 4000,
        });
      });
  };

  return (
    <main id="contact" className="min-h-screen bg-black flex items-center justify-center px-4 py-12">
      <ToastContainer />
      <article className="flex flex-col md:flex-row max-w-5xl w-full shadow-lg rounded-lg overflow-hidden bg-gray-900">
        {/* Left Side Image with gradient */}
        <aside className="relative w-full md:w-1/2 flex items-center justify-center bg-black">
          <div className="absolute z-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full bg-gradient-to-r from-[#6d2897] via-[#8e6cf5] to-[#bb61c5] shadow-[0_0_70px_rgba(182,0,182,0.7)] transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
          <img
            src={imghero}
            alt="Contact illustration"
            className="relative z-10 object-cover h-full w-full md:rounded-r-lg"
          />
        </aside>

        {/* Right Side Contact Form */}
        <section className="w-full md:w-1/2 p-8 bg-gray-900">
          <h2 className="text-4xl font-bold text-white text-center mb-6">Contact Us</h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label htmlFor="user_name" className="block text-gray-300 mb-1">Name</label>
              <input
                type="text"
                name="user_name"
                id="user_name"
                required
                placeholder="Your name"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="user_email" className="block text-gray-300 mb-1">Email</label>
              <input
                type="email"
                name="user_email"
                id="user_email"
                required
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="user_mob" className="block text-gray-300 mb-1">Phone Number</label>
              <input
                type="tel"
                name="user_mob"
                id="user_mob"
                required
                placeholder="Your phone number"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-1">Message</label>
              <textarea
                name="message"
                id="message"
                required
                placeholder="Your message"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-6 text-white bg-transparent border-2 border-purple-600 rounded-full hover:bg-[#801b9c] hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </section>
      </article>
    </main>
  );
}
