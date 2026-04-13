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
import { supabase } from "@/lib/supabase";

const SERVICES_OPTIONS = [
  "Full Stack Development",
  "AI-Powered Application",
  "AI Chatbot Integration",
  "SaaS Development",
  "API Development",
  "UI/UX Design",
  "Other",
];

const BUDGET_OPTIONS = [
  "< $5,000",
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000+",
  "Let's discuss",
];

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

    // 1️⃣ SAVE TO SUPABASE
    const { error } = await supabase.from("contact_messages").insert([
      {
        full_name: formData.name,
        email: formData.email,
        company: formData.company,
        service: formData.service,
        budget: formData.budget,
        message: formData.message,
      },
    ]);

    if (error) {
      console.log("SUPABASE ERROR:", error);
      setLoading(false);
      return;
    }

    // 2️⃣ SEND EMAIL VIA EDGE FUNCTION
    try {
      console.log("SENDING TO EMAIL FUNCTION:", {
  full_name: formData.name,
  email: formData.email,
});
await fetch(
  "https://yrqqkrkychkewlyfpife.supabase.co/functions/v1/send-email",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      full_name: formData.name,
      email: formData.email,
      company: formData.company,
      service: formData.service,
      budget: formData.budget,
      message: formData.message,
    }),
  }
);
    } catch (err) {
      console.log("EMAIL ERROR:", err);
    }

    setLoading(false);
    setSubmitted(true);

    // 3️⃣ RESET FORM
    setFormData({
      name: "",
      email: "",
      company: "",
      service: "",
      budget: "",
      message: "",
    });
  };

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
            <div className="flex items-center gap-4 p-4 rounded-xl border border-[#1A2540] bg-[#0D1526]">
              <Mail className="text-cyan-400" />
              <div>
                <p className="text-white text-sm">hello@nexoratech.io</p>
                <p className="text-gray-500 text-xs">Email us anytime</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl border border-[#1A2540] bg-[#0D1526]">
              <MessageSquare className="text-green-400" />
              <div>
                <p className="text-white text-sm">WhatsApp Support (+92-316-0488395)</p>
                <p className="text-gray-500 text-xs">Fast response</p>
              </div>
            </div>

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
                  <CheckCircle2 className="text-green-400 mx-auto mb-4" size={40} />
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
                    className="w-full p-3 bg-black/40 border border-gray-700 rounded-lg text-white"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-black/40 border border-gray-700 rounded-lg text-white"
                  />

                  <input
                    type="text"
                    name="company"
                    placeholder="Company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full p-3 bg-black/40 border border-gray-700 rounded-lg text-white"
                  />

                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full p-3 bg-black/40 border border-gray-700 rounded-lg text-white"
                  >
                    <option value="">Select Service</option>
                    {SERVICES_OPTIONS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>

                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full p-3 bg-black/40 border border-gray-700 rounded-lg text-white"
                  >
                    <option value="">Select Budget</option>
                    {BUDGET_OPTIONS.map((b) => (
                      <option key={b} value={b}>
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
                    className="w-full p-3 bg-black/40 border border-gray-700 rounded-lg text-white"
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