
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, Download } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto md:px-6">
        <Link to="/" className="flex items-center">
          <img src="/paperai-logo.svg" alt="PaperAI" className="h-8" />
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/scan" className="font-semibold uppercase text-gray-700 hover:text-primary">
            Scan Document
          </Link>
          <Link to="/translate" className="font-semibold uppercase text-gray-700 hover:text-primary">
            Translate
          </Link>
          <Link to="/autofill" className="font-semibold uppercase text-gray-700 hover:text-primary">
            Auto-fill
          </Link>
          <Link to="/organize" className="font-semibold uppercase text-gray-700 hover:text-primary">
            Organize
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Link to="/download" className="hidden md:inline-flex">
            <Button variant="ghost" size="icon">
              <Download className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/login">
            <Button variant="ghost" className="hidden md:inline-flex">
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="hidden md:inline-flex bg-primary hover:bg-primary-600">
              Sign up
            </Button>
          </Link>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b shadow-sm">
          <div className="container px-4 py-4 flex flex-col space-y-3">
            <Link 
              to="/scan" 
              className="font-semibold uppercase text-gray-700 py-2 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Scan Document
            </Link>
            <Link 
              to="/translate" 
              className="font-semibold uppercase text-gray-700 py-2 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Translate
            </Link>
            <Link 
              to="/autofill" 
              className="font-semibold uppercase text-gray-700 py-2 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Auto-fill
            </Link>
            <Link 
              to="/organize" 
              className="font-semibold uppercase text-gray-700 py-2 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Organize
            </Link>
            <div className="flex pt-2 space-x-4 border-t">
              <Link to="/login">
                <Button variant="ghost" onClick={() => setMobileMenuOpen(false)}>
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button 
                  className="bg-primary hover:bg-primary-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
