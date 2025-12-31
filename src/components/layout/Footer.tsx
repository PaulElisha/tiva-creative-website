import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";
import tivaLogoWhite from "@/assets/tiva-icon-white.png";

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Digital Business Foundations", href: "/services#foundations" },
    { name: "Product & Scale", href: "/services#scale" },
    { name: "Transformation Advisory", href: "/services#transformation" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src={tivaLogoWhite} alt="Tiva Creative" className="h-10 w-auto" />
              <div className="flex flex-col">
                <span className="font-display text-xl font-bold">tiva</span>
                <span className="font-display text-xl font-light opacity-80">creative</span>
              </div>
            </Link>
            <p className="font-body text-sm opacity-80 leading-relaxed mb-6">
              Digital consulting and business transformation for ambitious African businesses.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="font-body text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="font-body text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 opacity-80" />
                <span className="font-body text-sm opacity-80">hello@tivacreative.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5 opacity-80" />
                <span className="font-body text-sm opacity-80">+234 XXX XXX XXXX</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 opacity-80" />
                <span className="font-body text-sm opacity-80">Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-sm opacity-60">
            © {new Date().getFullYear()} Tiva Creative. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="font-body text-sm opacity-60 hover:opacity-100 transition-opacity">
              Privacy Policy
            </Link>
            <Link to="/terms" className="font-body text-sm opacity-60 hover:opacity-100 transition-opacity">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}