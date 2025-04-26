
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Upload, Camera } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface DocumentUploadProps {
  onFileSelected: (file: File) => void;
  allowedFileTypes?: string[];
  maxSizeMB?: number;
  showScanOption?: boolean;
}

const DocumentUpload = ({
  onFileSelected,
  allowedFileTypes = [".pdf", ".doc", ".docx", ".jpg", ".jpeg", ".png"],
  maxSizeMB = 10,
  showScanOption = true
}: DocumentUploadProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();
  
  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };
  
  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };
  
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };
  
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files.length) {
      validateAndProcessFile(files[0]);
    }
  };
  
  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      validateAndProcessFile(e.target.files[0]);
    }
  };
  
  const validateAndProcessFile = (file: File) => {
    // Check file type
    const fileExtension = `.${file.name.split('.').pop()?.toLowerCase()}`;
    if (!allowedFileTypes.includes(fileExtension)) {
      toast({
        title: "Invalid file type",
        description: `Please upload one of the following file types: ${allowedFileTypes.join(', ')}`,
        variant: "destructive"
      });
      return;
    }
    
    // Check file size
    const fileSizeMB = file.size / (1024 * 1024);
    if (fileSizeMB > maxSizeMB) {
      toast({
        title: "File too large",
        description: `File size must be less than ${maxSizeMB}MB`,
        variant: "destructive"
      });
      return;
    }
    
    onFileSelected(file);
  };
  
  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };
  
  const handleScanDocument = () => {
    // In a real application, this would activate the device camera
    toast({
      title: "Scanner activated",
      description: "Your device camera would activate for scanning (feature in development)"
    });
  };
  
  return (
    <div
      className={`relative flex flex-col items-center justify-center w-full min-h-[300px] p-6 border-2 transition-all duration-150 ${
        isDragging 
          ? 'border-primary border-dashed bg-primary-50 shadow-lg' 
          : 'border-dashed border-gray-300 hover:border-primary-300 hover:bg-primary-50/20'
      } rounded-lg`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        onChange={handleFileInputChange}
        accept={allowedFileTypes.join(",")}
      />
      
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 p-4 rounded-full bg-primary-50 text-primary">
          <Upload className="h-8 w-8" />
        </div>
        <h3 className="mb-2 text-xl font-semibold">Upload document</h3>
        <p className="mb-6 text-sm text-gray-500">
          Upload your document to get started
        </p>
        
        <Button 
          onClick={handleButtonClick}
          className="bg-primary hover:bg-primary-600 text-lg py-6 px-8 transition-all duration-150 transform hover:scale-[1.02]"
        >
          Select document
        </Button>
        
        <p className="mt-4 text-sm text-gray-500">
          or drop document here
        </p>
        
        {showScanOption && (
          <Button 
            variant="outline" 
            onClick={handleScanDocument} 
            className="mt-6 transition-colors duration-150 hover:bg-primary-50"
          >
            <Camera className="mr-2 h-4 w-4" />
            Scan with camera
          </Button>
        )}
        
        <div className="mt-6 text-xs text-gray-500">
          Supported formats: PDF, DOCX, JPG, PNG | Max {maxSizeMB}MB
        </div>
      </div>
    </div>
  );
};

export default DocumentUpload;
