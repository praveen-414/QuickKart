import React from "react";
import Button from "../components/Button";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import toast from "react-hot-toast";

const ContactUs = () => {
  const form = useRef();
  const validateForm = ({ fullName, email, message }) => {
    if (!fullName.trim()) {
      return "Full name is required";
    }

    if (fullName.trim().length < 3) {
      return "Full name must be at least 3 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      return "Email is required";
    }

    if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }

    if (!message.trim()) {
      return "Message is required";
    }

    if (message.trim().length < 10) {
      return "Message must be at least 10 characters";
    }

    return null; // No errors
  };
  const sendEmail = (e) => {
    e.preventDefault();

    const formData = {
      fullName: form.current.fullName.value,
      email: form.current.email.value,
      message: form.current.message.value,
    };

    const error = validateForm(formData);

    if (error) {
      toast.error(error);
      return;
    }

    const publicKey = "1WL3-J6lXFlEoejhN";
    const serviceId = "service_4i0ywhc";
    const templateId = "template_0zlz29e";

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey,
      })
      .then(
        () => {
          toast.success("Thanks for reaching out! Your message has been sent.");
          form.current.reset(); // Clear form after success
        },
        (error) => {
          console.log(error);
          toast.error("Failed to send message. Please try again.");
        },
      );
  };

  return (
    <div className="w-full min-h-screen bg-white px-6 md:px-12 py-14">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#111827]">
          Contact <span className="text-gray-500">Us</span>
        </h1>
        <p className="text-gray-500 mt-3">
          Have questions about products or orders? We’d love to help.
        </p>
      </div>

      {/* Main Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left Side */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-[#111827] mb-6">
            Get In Touch
          </h2>

          <div className="space-y-5">
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="text-lg font-medium text-[#111827]">
                support@quickkart.com
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <p className="text-lg font-medium text-[#111827]">
                +91 98765 43210
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Address</p>
              <p className="text-lg font-medium text-[#111827]">
                Sangli, Maharashtra, India
              </p>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-semibold text-[#111827] mb-2">
              Customer Support
            </h3>
            <p className="text-gray-500 leading-7">
              Our team is available 24/7 to help you with orders, returns,
              payments, and product details.
            </p>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <div>
              <label className="block mb-2 text-sm font-medium text-[#111827]">
                Full Name
              </label>
              <input
                name="fullName"
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#111827]"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-[#111827]">
                Email Address
              </label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#111827]"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-[#111827]">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none resize-none focus:border-[#111827]"
              ></textarea>
            </div>
            <Button type="submit" text="Send Message" className="w-full" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
