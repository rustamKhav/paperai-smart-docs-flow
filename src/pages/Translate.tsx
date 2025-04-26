
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import DocumentUpload from "@/components/ui/document-upload";
import ProcessingIndicator from "@/components/ui/processing-indicator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Download } from "lucide-react";

type ProcessingStep = "upload" | "options" | "processing" | "success";

const languages = [
  { code: "en", name: "English" },
  { code: "es", name: "Spanish" },
  { code: "fr", name: "French" },
  { code: "de", name: "German" },
  { code: "it", name: "Italian" },
  { code: "zh", name: "Chinese (Simplified)" },
  { code: "ja", name: "Japanese" },
  { code: "ko", name: "Korean" },
  { code: "ar", name: "Arabic" },
  { code: "ru", name: "Russian" },
];

const Translate = () => {
  const [currentStep, setCurrentStep] = useState<ProcessingStep>("upload");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [targetLanguage, setTargetLanguage] = useState("en");
  const [processingProgress, setProcessingProgress] = useState(0);
  const { toast } = useToast();
  
  const handleFileSelected = (file: File) => {
    setSelectedFile(file);
    setCurrentStep("options");
  };
  
  const handleLanguageChange = (value: string) => {
    setTargetLanguage(value);
  };
  
  const handleProcessDocument = () => {
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
        return prev + 5;
      });
    }, 300);
  };
  
  const handleDownload = () => {
    toast({
      title: "Document downloaded",
      description: "Your translated document has been downloaded successfully."
    });
  };
  
  const handleStartOver = () => {
    setSelectedFile(null);
    setProcessingProgress(0);
    setCurrentStep("upload");
  };
  
  const getSelectedLanguageName = () => {
    return languages.find(lang => lang.code === targetLanguage)?.name || "English";
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container px-4 py-8 mx-auto md:py-12 md:px-6">
        {currentStep === "upload" && (
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-2">Translate document</h1>
            <p className="text-gray-600 text-center mb-8">
              Upload your document and our AI will translate it to your preferred language
            </p>
            
            <DocumentUpload 
              onFileSelected={handleFileSelected}
              allowedFileTypes={[".pdf", ".doc", ".docx", ".txt"]}
              maxSizeMB={10}
              showScanOption={false}
            />
          </div>
        )}
        
        {currentStep === "options" && selectedFile && (
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-2">Translation options</h1>
            <p className="text-gray-600 text-center mb-8">
              Select your target language and other translation preferences
            </p>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <div className="bg-gray-50 p-8 rounded-lg mb-4">
                  <h3 className="font-semibold mb-4">Document to translate</h3>
                  <div className="flex items-center">
                    <div className="bg-white p-3 rounded border mr-4">
                      <div className="text-xl font-bold text-primary">AI</div>
                    </div>
                    <div>
                      <div className="font-medium">{selectedFile.name}</div>
                      <div className="text-sm text-gray-500">
                        {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                      </div>
                    </div>
                  </div>
                </div>
                <Button variant="outline" onClick={handleStartOver} className="w-full">
                  Choose a different document
                </Button>
              </div>
              
              <div className="flex-1">
                <div className="bg-white border rounded-lg p-6">
                  <h3 className="font-semibold mb-4">Translation settings</h3>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Target language
                    </label>
                    <Select 
                      value={targetLanguage} 
                      onValueChange={handleLanguageChange}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select language" />
                      </SelectTrigger>
                      <SelectContent>
                        {languages.map((lang) => (
                          <SelectItem key={lang.code} value={lang.code}>
                            {lang.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button 
                    onClick={handleProcessDocument}
                    className="w-full bg-primary hover:bg-primary-600"
                  >
                    Translate document
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {currentStep === "processing" && (
          <div className="max-w-md mx-auto text-center">
            <img src="/paperai-logo.svg" alt="PaperAI" className="h-10 mx-auto mb-8" />
            <ProcessingIndicator 
              message={`Translating document to ${getSelectedLanguageName()}...`}
              progress={processingProgress}
            />
          </div>
        )}
        
        {currentStep === "success" && selectedFile && (
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">Translation complete</h1>
              <p className="text-gray-600">
                {selectedFile.name} has been translated to {getSelectedLanguageName()}
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-full max-w-md">
                <Button 
                  onClick={handleDownload}
                  className="w-full bg-primary hover:bg-primary-600 text-lg py-6"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download translated document
                </Button>
                
                <div className="mt-8 flex justify-center">
                  <Button variant="outline" onClick={handleStartOver}>
                    Translate another document
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-blue-50 rounded-lg text-center">
              <h3 className="font-semibold mb-2">Secure. Private. In your control.</h3>
              <p className="text-gray-600 text-sm">
                Your document has been securely translated with no storage, no tracking, and complete privacy.
                The file will be automatically deleted after 2 hours.
              </p>
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Translate;
