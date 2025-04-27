
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowRight, Scan, Upload, File, Download } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero section */}
        <section className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
          <div className="container px-4 mx-auto text-center md:px-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
              Kill paperwork with AI
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              Upload documents, get instant translations, and say goodbye to manual form-filling. Paper AI handles it all.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <Link to="/scan">
                <Button className="bg-primary hover:bg-primary-600 text-lg py-6 px-8">
                  Get started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/learn-more">
                <Button variant="outline" className="text-lg py-6 px-8">
                  Learn more
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Features section */}
        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto md:px-6">
            <h2 className="text-3xl font-bold text-center">How Paper AI works</h2>
            
            <div className="grid grid-cols-1 gap-12 mt-16 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary-50 mb-4">
                  <Upload className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Upload</h3>
                <p className="mt-2 text-gray-600">
                  Upload or scan any document in seconds.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary-50 mb-4">
                  <Scan className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Translate</h3>
                <p className="mt-2 text-gray-600">
                  AI translates to your language instantly.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary-50 mb-4">
                  <File className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Auto-fill</h3>
                <p className="mt-2 text-gray-600">
                  Let AI extract data and complete forms.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary-50 mb-4">
                  <Download className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Download & Organize</h3>
                <p className="mt-2 text-gray-600">
                  Get processed documents organized instantly.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to action section */}
        <section className="py-16 bg-secondary">
          <div className="container px-4 mx-auto md:px-6">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold">Ready to simplify your paperwork?</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl">
                Join thousands who save time and reduce stress with Paper AI.
              </p>
              <Link to="/scan" className="mt-8">
                <Button className="bg-primary hover:bg-primary-600 text-lg py-6 px-8">
                  Upload a document now
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Trust section */}
        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto md:px-6">
            <div className="p-8 bg-blue-50 rounded-lg">
              <h3 className="text-xl font-semibold text-center mb-4">Secure. Private. In your control.</h3>
              <p className="text-center text-gray-600">
                Your documents are processed with no storage, no tracking, and complete privacy.
              </p>
              <div className="flex justify-center gap-8 mt-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white rounded-full mr-3 flex items-center justify-center">
                    <span className="text-lg">🔒</span>
                  </div>
                  <span className="text-sm">ISO 27001</span>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white rounded-full mr-3 flex items-center justify-center">
                    <span className="text-lg">🛡️</span>
                  </div>
                  <span className="text-sm">GDPR Compliant</span>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white rounded-full mr-3 flex items-center justify-center">
                    <span className="text-lg">🔐</span>
                  </div>
                  <span className="text-sm">Secure Processing</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
