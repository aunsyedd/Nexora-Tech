"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";
import Button from "@/components/ui/Button";


const SERVICES_OPTIONS = [
  "Full Stack Development",
  "AI-Powered Application",
  "AI Chatbot Integration",
  "SaaS Development",
  "API Development",
  "UI/UX Design",
  "Other",
];

const BUDGET_OPTIONS = ["< $500", "$500 – $1k", "$1k – $3k", "$3k+", "Discuss"];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

try {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const data = await response.json();

  if (!response.ok) {
    console.log(data.error);
    setLoading(false);
    return;
  }

  setSubmitted(true);

  setFormData({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

} catch (err) {
  console.log(err);
}

setLoading(false);
    setLoading(false);
    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      company: "",
      service: "",
      budget: "",
      message: "",
    });
  };

  const selectClass =
    "w-full p-3 bg-[#0D1526] border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500";

  const optionClass = "bg-[#0D1526] text-white";

  return (
    <section className="pb-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* LEFT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
<a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=nexoratechintl@gmail.com&su=Project%20Inquiry%20-%20Nexora%20Tech"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-start gap-4 p-4 rounded-xl border border-[#1A2540] bg-[#0D1526] hover:border-cyan-400 hover:bg-[#101B31] transition-all duration-300"
>
  <Mail className="text-cyan-400 mt-1" />

  <div className="flex-1">
    <p className="text-white text-sm font-medium">
      nexoratechintl@gmail.com
    </p>

    <p className="text-gray-500 text-xs mb-3">
      Email us anytime for AI & software solutions
    </p>

    <div className="flex flex-wrap gap-2">
      {[
        "Start New Project",
        "Request Quote",
        "AI Consultation",
        "Partnership Inquiry",
        "Technical Support",
      ].map((item) => (
        <span
          key={item}
          className="text-[11px] px-3 py-1 rounded-full border border-[#22314F] text-gray-300 bg-[#111827]"
        >
          {item}
        </span>
      ))}
    </div>
  </div>
</a>

<a
  href="https://wa.me/923130143478?text=Hi%20Nexora%20Tech!%20I%20want%20to%20discuss%20my%20project."
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-start gap-4 p-4 rounded-xl border border-[#1A2540] bg-[#0D1526] hover:border-green-400 hover:bg-[#101B31] transition-all duration-300"
>
  <MessageSquare className="text-green-400 mt-1" />

  <div className="flex-1">
    <p className="text-white text-sm font-medium">
      WhatsApp Support (+92-313-0143478)
    </p>

    <p className="text-gray-500 text-xs mb-3">
      Fast response • Available for AI & software projects
    </p>
    <p className="text-gray-500 text-xs mb-3">
      Click Here Contact Us Via Whatsapp
    </p>

    {/* Pre Questions */}
    <div className="flex flex-wrap gap-2">
      {[
        "Need AI Chatbot",
        "Build SaaS Product",
        "Web App Development",
        "UI/UX Design",
        "API Integration",
      ].map((item) => (
        <span
          key={item}
          className="text-[11px] px-3 py-1 rounded-full border border-[#22314F] text-gray-300 bg-[#111827]"
        >
          {item}
        </span>
      ))}
    </div>
  </div>
</a>

            <div className="flex items-center gap-4 p-4 rounded-xl border border-[#1A2540] bg-[#0D1526]">
              <MapPin className="text-purple-400" />
              <div>
                <p className="text-white text-sm">Pakistan / Remote</p>
                <p className="text-gray-500 text-xs">Global clients</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl border border-[#1A2540] bg-[#0D1526]">
              <Clock className="text-orange-400" />
              <div>
                <p className="text-white text-sm">Mon - Fri</p>
                <p className="text-gray-500 text-xs">9AM - 6PM</p>
              </div>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl border border-[#1A2540] bg-[#0D1526] p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle2
                    className="text-green-400 mx-auto mb-4"
                    size={40}
                  />
                  <h2 className="text-white text-2xl font-bold">
                    Message Sent!
                  </h2>
                  <p className="text-gray-400 mt-2">
                    We will contact you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-[#0D1526] border border-gray-700 rounded-lg text-white"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-[#0D1526] border border-gray-700 rounded-lg text-white"
                  />

                  <input
                    type="text"
                    name="company"
                    placeholder="Company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full p-3 bg-[#0D1526] border border-gray-700 rounded-lg text-white"
                  />

                  {/* SERVICE */}
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={selectClass}
                  >
                    <option value="" className={optionClass}>
                      Select Service
                    </option>
                    {SERVICES_OPTIONS.map((s) => (
                      <option key={s} value={s} className={optionClass}>
                        {s}
                      </option>
                    ))}
                  </select>

                  {/* BUDGET */}
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className={selectClass}
                  >
                    <option value="" className={optionClass}>
                      Select Budget
                    </option>
                    {BUDGET_OPTIONS.map((b) => (
                      <option key={b} value={b} className={optionClass}>
                        {b}
                      </option>
                    ))}
                  </select>

                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full p-3 bg-[#0D1526] border border-gray-700 rounded-lg text-white"
                  />

                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}