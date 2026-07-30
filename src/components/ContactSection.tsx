"use client";

import { useState, FormEvent } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const celebrationTypes = [
  "Traditional Wedding",
  "Multi-day Celebration",
  "Jain Wedding",
  "Reception Celebration",
  "Other",
];

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      fullName: data.get("fullName"),
      phoneNumber: data.get("phoneNumber"),
      email: data.get("email"),
      weddingDate: data.get("weddingDate"),
      celebrationType: data.get("celebrationType"),
      message: data.get("message"),
    };

    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section id="contact" className="bg-navy text-white">
      <div className="max-w-content mx-auto px-6 lg:px-10 py-16 lg:py-20 grid lg:grid-cols-3 gap-12">
        {/* Info column */}
        <div>
          <h2 className="font-heading text-3xl font-medium mb-4">
            Let&rsquo;s Plan Your Celebration in Prayagraj
          </h2>
          <p className="text-sm text-white/60 leading-relaxed mb-8">
            We would be honoured to understand your vision and help you plan a
            celebration that your family will cherish.
          </p>

          <div className="border border-gold/50 rounded-btn inline-block px-4 py-2 mb-7 text-sm tracking-[0.2em] font-heading">
            DIVYAM
          </div>

          <div className="flex flex-col gap-4 text-sm text-white/70">
            <div className="flex gap-3">
              <MapPin size={18} className="text-gold shrink-0 mt-0.5" />
              <span>
                A Unit of Adgamiq Communications Private Limited
                <br />
                161 Floor, Noor Jail Road, George Town,
                <br />
                Prayagraj, Uttar Pradesh 211002, India
              </span>
            </div>
            <div className="flex gap-3">
              <Phone size={18} className="text-gold shrink-0 mt-0.5" />
              <span>+91 81750 09460</span>
            </div>
            <div className="flex gap-3">
              <Mail size={18} className="text-gold shrink-0 mt-0.5" />
              <span>hello@divyam.com</span>
            </div>
            <div className="flex gap-3">
              <Clock size={18} className="text-gold shrink-0 mt-0.5" />
              <span>Mon–Sun: 10:00 AM – 8:00 PM</span>
            </div>
            <p className="text-xs text-white/40 mt-1">
              Serving: Prayagraj &amp; Nearby Areas · Also Serving: Lucknow,
              Varanasi, Bhadohi &amp; Kanpur
            </p>
          </div>
        </div>

        {/* Form column */}
        <div>
          <h3 className="font-heading text-xl font-medium mb-5">
            Request a Private Consultation
          </h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                required
                name="fullName"
                placeholder="Full Name*"
                className="bg-white/5 border border-white/15 rounded-btn px-4 py-3 text-sm placeholder:text-white/40 focus:border-gold outline-none"
              />
              <input
                required
                name="phoneNumber"
                placeholder="Phone Number*"
                className="bg-white/5 border border-white/15 rounded-btn px-4 py-3 text-sm placeholder:text-white/40 focus:border-gold outline-none"
              />
            </div>
            <input
              required
              type="email"
              name="email"
              placeholder="Email Address*"
              className="bg-white/5 border border-white/15 rounded-btn px-4 py-3 text-sm placeholder:text-white/40 focus:border-gold outline-none"
            />
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                name="weddingDate"
                placeholder="Wedding Date (or Period)"
                className="bg-white/5 border border-white/15 rounded-btn px-4 py-3 text-sm placeholder:text-white/40 focus:border-gold outline-none"
              />
              <select
                name="celebrationType"
                defaultValue=""
                className="bg-white/5 border border-white/15 rounded-btn px-4 py-3 text-sm text-white/70 focus:border-gold outline-none"
              >
                <option value="" disabled>
                  Type of Celebration
                </option>
                {celebrationTypes.map((c) => (
                  <option key={c} value={c} className="text-ink">
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <textarea
              name="message"
              placeholder="Message"
              rows={3}
              className="bg-white/5 border border-white/15 rounded-btn px-4 py-3 text-sm placeholder:text-white/40 focus:border-gold outline-none resize-none"
            />

            <button
              type="submit"
              disabled={status === "submitting"}
              className="bg-gold text-navy font-medium px-6 py-3 rounded-btn uppercase text-sm tracking-wide hover:bg-white transition-colors duration-200 disabled:opacity-60"
            >
              {status === "submitting" ? "Sending..." : "Request Consultation"}
            </button>

            {status === "success" && (
              <p className="text-xs text-gold">
                Thank you. Our team will reach out to you shortly.
              </p>
            )}
            {status === "error" && (
              <p className="text-xs text-red-300">{errorMsg}</p>
            )}
          </form>
        </div>

        {/* WhatsApp column */}
        <div>
          <h3 className="font-heading text-xl font-medium mb-5">Or WhatsApp Us</h3>
          <div className="border border-white/15 rounded-card px-6 py-8 flex flex-col items-center text-center gap-4">
            <MessageCircle size={40} strokeWidth={1.25} className="text-gold" />
            <p className="text-sm text-white/70 leading-relaxed">
              Share a few details and we will get back to you.
            </p>
            <a
              href="https://wa.me/918175009460"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex justify-center items-center gap-2 bg-gold text-navy font-medium px-6 py-3 rounded-btn uppercase text-sm tracking-wide hover:bg-white transition-colors duration-200"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
