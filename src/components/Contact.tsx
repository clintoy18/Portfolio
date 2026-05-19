import React, { useState } from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    window.location.href = `mailto:aicsalonzo@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="px-6 py-24 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">
            Contact
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-normal text-zinc-950 md:text-5xl">
            Building a front-end or full-stack project with real users?
          </h2>
          <p className="mt-5 text-sm leading-7 text-zinc-600">
            I am open to collaborations around web apps, dashboards,
            community-focused tools, and maintainable full-stack systems.
          </p>
          <a
            href="mailto:aicsalonzo@gmail.com"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-zinc-950"
          >
            <Mail size={16} /> aicsalonzo@gmail.com
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="p-5 sm:p-8">
            <form className="grid gap-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <Input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                />
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </div>

              <Textarea
                placeholder="Tell me what you are building"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                required
              />

              <Button type="submit" className="w-full sm:w-auto">
                Send message <ArrowUpRight size={16} />
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
