
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, Archive, FileText } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.location.reload();
    }
  };
  
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="container flex items-center justify-between h-14 px-4 mx-auto md:px-6">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity"
          onClick={handleLogoClick}
        >
          <span className="text-2xl">📄</span>
          <span className="font-semibold">Paper AI</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/storage" className="font-semibold uppercase text-gray-700 hover:text-primary transition-colors duration-150">
            <div className="flex items-center gap-2">
              <Archive className="h-4 w-4" />
              <span>Storage</span>
            </div>
          </Link>
          <Link to="/templates" className="font-semibold uppercase text-gray-700 hover:text-primary transition-colors duration-150">
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span>Templates</span>
            </div>
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Link to="/login">
            <Button className="hidden md:inline-flex bg-primary hover:bg-primary-600 transition-all duration-150">
              Log in
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
              to="/storage" 
              className="font-semibold uppercase text-gray-700 py-2 hover:text-primary transition-colors duration-150"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="flex items-center gap-2">
                <Archive className="h-4 w-4" />
                <span>Storage</span>
              </div>
            </Link>
            <Link 
              to="/templates" 
              className="font-semibold uppercase text-gray-700 py-2 hover:text-primary transition-colors duration-150"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>Templates</span>
              </div>
            </Link>
            <div className="flex pt-2 space-x-4 border-t">
              <Link to="/login">
                <Button 
                  className="bg-primary hover:bg-primary-600 transition-all duration-150"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Log in
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
