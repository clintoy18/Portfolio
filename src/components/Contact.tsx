import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mailtoLink = `mailto:aicsalonzo@gmail.com?subject=Message from ${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(
      `${message}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-24 border-t border-gray-200">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl font-light text-center text-gray-800 mb-16">
          Let's Connect
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/50 backdrop-blur-xl border border-white/40 rounded-3xl p-10 shadow-xl"
        >
          <form className="space-y-8" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-6 py-4 bg-white/60 border border-gray-200 rounded-xl focus:outline-none focus:border-gray-400 transition placeholder:text-gray-500"
              required
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-6 py-4 bg-white/60 border border-gray-200 rounded-xl focus:outline-none focus:border-gray-400 transition placeholder:text-gray-500"
              required
            />

            <textarea
              rows={6}
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-6 py-4 bg-white/60 border border-gray-200 rounded-xl focus:outline-none focus:border-gray-400 transition resize-none placeholder:text-gray-500"
              required
            />

            <button
              type="submit"
              className="w-full py-4 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition font-medium"
            >
              Send Message
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-gray-200 text-center text-gray-600">
            <p>aicsalonzo@gmail.com •</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
