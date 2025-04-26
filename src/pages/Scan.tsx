
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import DocumentUpload from "@/components/ui/document-upload";
import ProcessingIndicator from "@/components/ui/processing-indicator";
import { ArrowLeft, Download, Share, Check } from "lucide-react";
import { Link } from "react-router-dom";

type ProcessingStep = "upload" | "processing" | "success";

const Scan = () => {
  const [currentStep, setCurrentStep] = useState<ProcessingStep>("upload");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [processingProgress, setProcessingProgress] = useState(0);
  const { toast } = useToast();
  
  const handleFileSelected = (file: File) => {
    setSelectedFile(file);
    
    // Simulate processing
    setCurrentStep("processing");
    
    // Mock progress updates
    const interval = setInterval(() => {
      setProcessingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setCurrentStep("success");
          }, 500);
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };
  
  const handleDownload = () => {
    toast({
      title: "Document downloaded",
      description: "Your processed document has been downloaded successfully."
    });
  };
  
  const handleShare = () => {
    toast({
      title: "Share options",
      description: "Sharing options would appear here."
    });
  };
  
  const handleStartOver = () => {
    setSelectedFile(null);
    setProcessingProgress(0);
    setCurrentStep("upload");
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container px-4 py-8 mx-auto md:py-12 md:px-6">
        {currentStep === "upload" && (
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-2">Upload document</h1>
            <p className="text-gray-600 text-center mb-8">
              Scan documents, translate and auto-fill forms instantly
            </p>
            
            <DocumentUpload 
              onFileSelected={handleFileSelected}
              allowedFileTypes={[".pdf", ".doc", ".docx", ".jpg", ".jpeg", ".png"]}
              maxSizeMB={10}
              showScanOption={true}
            />
          </div>
        )}
        
        {currentStep === "processing" && (
          <div className="max-w-md mx-auto text-center">
            <img src="/paperai-logo.svg" alt="PaperAI" className="h-10 mx-auto mb-8" />
            <ProcessingIndicator 
              message="Processing document..."
              progress={processingProgress}
            />
          </div>
        )}
        
        {currentStep === "success" && selectedFile && (
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-50 mb-4">
                <Check className="h-8 w-8 text-primary animate-check-animation" />
              </div>
              <h1 className="text-3xl font-bold mb-2">Document processed successfully</h1>
              <p className="text-gray-600">
                {selectedFile.name} has been processed and is ready to download
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-gray-50 p-8 rounded-lg mb-8 w-full max-w-md shadow-card hover:shadow-card-hover transition-shadow duration-150">
                <div className="flex justify-center items-center h-40">
                  <div className="flex flex-col items-center">
                    <div className="text-5xl mb-4 font-bold text-primary">AI</div>
                    <div className="text-xl font-medium">{selectedFile.name}</div>
                    <div className="text-sm text-gray-500 mt-2">
                      {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full max-w-md">
                <Button 
                  onClick={handleDownload}
                  className="w-full bg-primary hover:bg-primary-600 text-lg py-6 transition-all duration-150 transform hover:scale-[1.02]"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download processed document
                </Button>
                
                <div className="flex justify-center mt-4 gap-4">
                  <Button variant="outline" size="icon" onClick={handleShare} className="rounded-full h-12 w-12 transition-all duration-150 hover:bg-primary-50">
                    <Share className="h-5 w-5" />
                  </Button>
                </div>
                
                <div className="mt-8">
                  <h3 className="font-semibold mb-4">Continue to...</h3>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Link to="/scan">
                      <Button variant="outline" className="w-full justify-start transition-all duration-150 hover:bg-primary-50">
                        Scan document
                      </Button>
                    </Link>
                    <Link to="/translate">
                      <Button variant="outline" className="w-full justify-start transition-all duration-150 hover:bg-primary-50">
                        Translate document
                      </Button>
                    </Link>
                    <Link to="/autofill">
                      <Button variant="outline" className="w-full justify-start transition-all duration-150 hover:bg-primary-50">
                        Auto-fill forms
                      </Button>
                    </Link>
                    <Link to="/organize">
                      <Button variant="outline" className="w-full justify-start transition-all duration-150 hover:bg-primary-50">
                        Organize document
                      </Button>
                    </Link>
                    <Button variant="outline" className="w-full justify-start transition-all duration-150 hover:bg-primary-50" onClick={handleStartOver}>
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Process new document
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-primary-50 rounded-lg text-center">
              <h3 className="font-semibold mb-2">Secure. Private. In your control.</h3>
              <p className="text-gray-600 text-sm">
                Your document has been securely processed with no storage, no tracking, and complete privacy.
                The file will be automatically deleted after 2 hours.
              </p>
              <div className="flex justify-center gap-8 mt-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white rounded-full mr-3 flex items-center justify-center">
                    <span className="text-xs font-medium text-primary">ISO</span>
                  </div>
                  <span className="text-sm">ISO 27001</span>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white rounded-full mr-3 flex items-center justify-center">
                    <span className="text-xs font-medium text-primary">GDPR</span>
                  </div>
                  <span className="text-sm">GDPR Compliant</span>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white rounded-full mr-3 flex items-center justify-center">
                    <span className="text-xs font-medium text-primary">SEC</span>
                  </div>
                  <span className="text-sm">Secure Processing</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Scan;
