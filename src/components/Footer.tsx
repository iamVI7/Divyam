import { Facebook, Instagram, Youtube, Phone, Mail } from "lucide-react";

const quickLinks = ["Home", "About", "Services", "Celebrations", "Journal"];
const ourServices = [
  "Wedding Planning",
  "Catering",
  "Hospitality",
  "Décor & Styling",
  "Event Production",
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white/70 border-t border-white/10">
      <div className="max-w-content mx-auto px-6 lg:px-10 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="border border-gold/50 rounded-btn inline-block px-4 py-2 mb-4 text-sm tracking-[0.2em] font-heading text-white">
            DIVYAM
          </div>
          <p className="text-xs leading-relaxed text-white/40">
            Pure vegetarian luxury weddings, planned with discipline and
            served with grace, in Prayagraj.
          </p>
        </div>

        <div>
          <h4 className="text-white text-sm font-medium mb-4">Quick Links</h4>
          <ul className="flex flex-col gap-2.5 text-xs">
            {quickLinks.map((l) => (
              <li key={l}>
                <a href="#" className="hover:text-gold transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-medium mb-4">Our Services</h4>
          <ul className="flex flex-col gap-2.5 text-xs">
            {ourServices.map((l) => (
              <li key={l}>
                <a href="#services" className="hover:text-gold transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-medium mb-4">Contact</h4>
          <ul className="flex flex-col gap-2.5 text-xs">
            <li className="flex items-center gap-2">
              <Phone size={14} className="text-gold" /> +91 81750 09460
            </li>
            <li className="flex items-center gap-2">
              <Mail size={14} className="text-gold" /> hello@divyam.com
            </li>
            <li className="text-white/40">Prayagraj, Uttar Pradesh, India</li>
          </ul>

          <h4 className="text-white text-sm font-medium mt-6 mb-3">Follow Us</h4>
          <div className="flex gap-3">
            <a href="#" aria-label="Facebook" className="hover:text-gold transition-colors">
              <Facebook size={18} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-gold transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" aria-label="Youtube" className="hover:text-gold transition-colors">
              <Youtube size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-content mx-auto px-6 lg:px-10 py-5 text-xs text-white/40 flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} DIVYAM®. All rights reserved.</span>
          <span>A Unit of Adgamiq Communications Private Limited</span>
        </div>
      </div>
    </footer>
  );
}
