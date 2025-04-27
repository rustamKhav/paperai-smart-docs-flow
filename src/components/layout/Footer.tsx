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
    <footer className="bg-gray-50 border-t mt-auto py-4">
      <div className="container px-4 mx-auto md:px-6">
        {/* Trust section with logos */}
        <div className="py-6">
          <h3 className="text-center font-semibold text-lg mb-4">Trusted Partners</h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 items-center">
            <div className="flex items-center gap-2 text-gray-600">
              <span className="text-xl">🚀</span>
              <span>SpaceX</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <span className="text-xl">🍎</span>
              <span>Apple</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <span className="text-xl">🔍</span>
              <span>Google</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <span className="text-xl">☁️</span>
              <span>Microsoft</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <span className="text-xl">💻</span>
              <span>Meta</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t pt-4">
          <div className="flex items-center gap-4">
            <div 
              className="text-sm text-gray-500 cursor-pointer relative"
              onMouseEnter={() => setShowLanguages(true)}
              onMouseLeave={() => setShowLanguages(false)}
            >
              English
              {/* Language dropdown */}
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
            <div className="flex items-center gap-4">
              <a href="#" className="text-sm text-gray-600">
                📱 App Store
              </a>
              <a href="#" className="text-sm text-gray-600">
                🤖 Google Play
              </a>
            </div>
          </div>
          <p className="text-sm text-gray-600">
            © 2024 Paper AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
