"use client";

import { useState, FormEvent } from "react";
import { MapPin, Phone, Mail, Clock, ChevronDown } from "lucide-react";
import Reveal from "./Reveal";
import TitleDivider from "./TitleDivider";

function WhatsAppIcon({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.004 3C9.373 3 4 8.373 4 15.004c0 2.446.71 4.72 1.936 6.637L4 29l7.53-1.905a11.94 11.94 0 0 0 4.474.865h.005C22.64 27.96 28 22.588 28 15.958 28 9.328 22.635 3 16.004 3Zm0 21.75h-.004a9.9 9.9 0 0 1-5.043-1.382l-.362-.215-4.47 1.131 1.192-4.355-.236-.448A9.898 9.898 0 0 1 5.82 15c0-5.478 4.457-9.936 9.988-9.936 5.532 0 9.987 4.458 9.987 9.936 0 5.478-4.455 9.75-9.99 9.75Zm5.47-7.39c-.3-.15-1.77-.874-2.045-.974-.274-.1-.474-.15-.674.15-.2.3-.774.974-.949 1.174-.174.2-.35.225-.65.075-.3-.15-1.264-.466-2.408-1.485-.89-.793-1.492-1.773-1.667-2.073-.174-.3-.019-.462.131-.611.135-.134.3-.35.45-.525.15-.174.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.674-1.62-.924-2.22-.243-.583-.49-.504-.674-.513a13 13 0 0 0-.574-.011c-.2 0-.525.075-.8.375-.274.3-1.05 1.025-1.05 2.5 0 1.474 1.075 2.899 1.225 3.099.15.2 2.113 3.227 5.121 4.524.715.309 1.273.494 1.708.632.718.228 1.371.196 1.888.119.576-.086 1.77-.724 2.02-1.423.25-.7.25-1.299.175-1.424-.075-.124-.275-.199-.575-.349Z" />
    </svg>
  );
}

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

  const inputClasses =
    "bg-white/5 border border-white/15 rounded-btn px-4 py-3 text-sm placeholder:text-white/40 focus:border-gold outline-none transition-colors";

  return (
    <section id="contact" className="bg-navy text-white">
      <div className="max-w-content mx-auto px-6 lg:px-10 py-14 lg:py-16 grid lg:grid-cols-3 gap-12">
        {/* Info column */}
        <Reveal direction="right">
          <h2 className="font-heading text-3xl font-medium mb-1">
            Let&rsquo;s Plan Your Celebration in Prayagraj
          </h2>
          <TitleDivider align="left" light />
          <p className="text-sm text-white/60 leading-relaxed mt-5 mb-7">
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
        </Reveal>

        {/* Form column */}
        <Reveal delay={0.1}>
          <h3 className="font-heading text-xl font-medium mb-5">
            Request a Private Consultation
          </h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                required
                name="fullName"
                placeholder="Full Name*"
                className={inputClasses}
              />
              <input
                required
                name="phoneNumber"
                placeholder="Phone Number*"
                className={inputClasses}
              />
            </div>
            <input
              required
              type="email"
              name="email"
              placeholder="Email Address*"
              className={inputClasses}
            />
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                name="weddingDate"
                placeholder="Wedding Date (or Period)"
                className={inputClasses}
              />
              <div className="relative">
                <select
                  name="celebrationType"
                  defaultValue=""
                  className={`${inputClasses} w-full text-white/70 appearance-none pr-9`}
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
                <ChevronDown
                  size={16}
                  className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-gold"
                />
              </div>
            </div>
            <textarea
              name="message"
              placeholder="Message"
              rows={3}
              className={`${inputClasses} resize-none`}
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
        </Reveal>

        {/* WhatsApp column */}
        <Reveal delay={0.2}>
          <h3 className="font-heading text-xl font-medium mb-5">Or WhatsApp Us</h3>
          <div className="border border-white/15 rounded-card px-6 py-8 flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center">
              <WhatsAppIcon size={34} className="text-white" />
            </div>
            <p className="text-sm text-white/70 leading-relaxed max-w-[160px] mx-auto">
              Share a few details and we will get back to you.
            </p>
            <a
              href="https://wa.me/918175009460"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex justify-center items-center gap-2 bg-gold text-navy font-medium px-6 py-3 rounded-btn uppercase text-sm tracking-wide hover:bg-white transition-colors duration-200"
            >
              <WhatsAppIcon size={16} />
              Chat on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}