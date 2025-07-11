import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-6 text-white">
      <div className="max-w-2xl mx-auto text-center bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-xl" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
        <p className="mb-8 text-sm text-gray-300">
          I'd love to connect with you! Have a question or want to work together? Let's talk.
        </p>

        {/* ✅ Working FormSubmit Form */}
        <form
          action="https://formsubmit.co/avneeshkaur92@gmail.com"
          method="POST"
          className="space-y-4"
          data-aos="zoom-in"
        >
          {/* Disable captcha */}
          <input type="hidden" name="_captcha" value="false" />

          {/* Input: Name */}
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white/20 text-white placeholder:text-white text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
          />

          {/* Input: Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white/20 text-white placeholder:text-white text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
          />

          {/* Input: Message */}
          <textarea
            name="message"
            placeholder="Message"
            rows={5}
            required
            className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white/20 text-white placeholder:text-white text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
          ></textarea>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-3 rounded-full hover:bg-pink-700 transition duration-300"
          >
            Send Message 🚀
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;