
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t mt-auto">
      <div className="container px-4 py-8 mx-auto md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <img src="/paperai-logo.svg" alt="PaperAI" className="h-8" />
            <p className="mt-4 text-sm text-gray-600">
              AI-powered document management for expats, students, and professionals.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold">Features</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/scan" className="text-gray-600 hover:text-primary">
                  Scan Document
                </Link>
              </li>
              <li>
                <Link to="/translate" className="text-gray-600 hover:text-primary">
                  Translate
                </Link>
              </li>
              <li>
                <Link to="/autofill" className="text-gray-600 hover:text-primary">
                  Auto-fill
                </Link>
              </li>
              <li>
                <Link to="/organize" className="text-gray-600 hover:text-primary">
                  Organize
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold">Company</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold">Legal</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-primary">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-600">
              © 2025 PaperAI. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-gray-600">
              <p className="text-sm">
                Secure. Private. In your control.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
