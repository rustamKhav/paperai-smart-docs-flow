
import { Link } from "react-router-dom";
import { useState } from "react";
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

const languages = [
  { code: "en", name: "English" },
  { code: "zh", name: "Mandarin" },
  { code: "hi", name: "Hindi" },
  { code: "es", name: "Spanish" },
  { code: "fr", name: "French" },
  { code: "ar", name: "Arabic" },
  { code: "bn", name: "Bengali" },
  { code: "ru", name: "Russian" },
  { code: "pt", name: "Portuguese" },
  { code: "id", name: "Indonesian" }
];

const Footer = () => {
  const [showLanguages, setShowLanguages] = useState(false);
  
  return (
    <footer className="bg-gray-50 border-t mt-auto">
      <div className="container px-4 py-8 mx-auto md:px-6">
        {/* Trust section with logos */}
        <div className="py-8 overflow-hidden">
          <h3 className="text-center font-semibold text-lg mb-6">Trusted Partners</h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 items-center">
            <div className="w-24 h-6 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-600 text-xs">🤝 Partner 1</span>
            </div>
            <div className="w-24 h-6 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-600 text-xs">🤝 Partner 2</span>
            </div>
            <div className="w-24 h-6 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-600 text-xs">🤝 Partner 3</span>
            </div>
            <div className="w-24 h-6 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-600 text-xs">🤝 Partner 4</span>
            </div>
            <div className="w-24 h-6 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-600 text-xs">🤝 Partner 5</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <img src="/paperai-logo.svg" alt="Paper AI" className="h-10" />
            <p className="mt-4 text-sm text-gray-600">
              AI-powered document management for expats, students, and professionals.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold">Features</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/scan" className="text-gray-600 hover:text-primary transition-colors duration-150">
                  Scan Document
                </Link>
              </li>
              <li>
                <Link to="/translate" className="text-gray-600 hover:text-primary transition-colors duration-150">
                  Translate
                </Link>
              </li>
              <li>
                <Link to="/autofill" className="text-gray-600 hover:text-primary transition-colors duration-150">
                  Auto-fill
                </Link>
              </li>
              <li>
                <Link to="/organize" className="text-gray-600 hover:text-primary transition-colors duration-150">
                  Organize
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold">Company</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary transition-colors duration-150">
                  About
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-primary transition-colors duration-150">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary transition-colors duration-150">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold">Legal</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-primary transition-colors duration-150">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-primary transition-colors duration-150">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center relative">
              <div 
                className="text-sm text-gray-500 cursor-pointer"
                onMouseEnter={() => setShowLanguages(true)}
                onMouseLeave={() => setShowLanguages(false)}
              >
                English
                
                {showLanguages && (
                  <div className="absolute bottom-full mb-2 bg-white shadow-md rounded-md py-2 w-40 z-10 animate-fade-in">
                    <ul>
                      {languages.map(lang => (
                        <li key={lang.code} className="px-4 py-1 hover:bg-gray-100 cursor-pointer text-sm">
                          {lang.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex flex-col gap-4 sm:flex-row items-center">
              <div className="flex gap-3">
                <a href="#" className="text-gray-400 hover:text-primary transition-transform duration-150 hover:scale-105">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-transform duration-150 hover:scale-105">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-transform duration-150 hover:scale-105">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-transform duration-150 hover:scale-105">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
              
              <div className="flex items-center gap-4">
                <a href="#">
                  <div className="h-8 bg-gray-100 rounded px-3 flex items-center">
                    <span>📱 App Store</span>
                  </div>
                </a>
                <a href="#">
                  <div className="h-8 bg-gray-100 rounded px-3 flex items-center">
                    <span>🤖 Google Play</span>
                  </div>
                </a>
              </div>
            </div>
            
            <p className="text-sm text-gray-600">
              © 2025 Paper AI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
