import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[var(--primary)] text-white pt-12 pb-6 mt-20">
      <div className="w-[90%] max-w-6xl mx-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">

        {/* Logo / About */}
        <div>
          <h2 className="text-2xl font-bold mb-3">QuickKart</h2>
          <p className="text-sm opacity-80">
            Your one-stop destination for premium <br /> products with fast delivery
            and secure payments.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/categories" className="hover:underline">Products</Link></li>
            <li><Link to="/about us" className="hover:underline">About</Link></li>
            <li><Link to="/contact us" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Customer Support</h3>
          <ul className="space-y-2 text-sm">
            <li>Help Center</li>
            <li>Returns</li>
            <li>Shipping Info</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Follow Us</h3>
          <div className="flex gap-4">
            <FaFacebookF className="cursor-pointer hover:scale-110 transition" />
            <FaTwitter className="cursor-pointer hover:scale-110 transition" />
            <FaInstagram className="cursor-pointer hover:scale-110 transition" />
            <FaGithub className="cursor-pointer hover:scale-110 transition" />
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/30 mt-8 pt-4 text-center text-sm opacity-80">
        © {new Date().getFullYear()} QuickKart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;