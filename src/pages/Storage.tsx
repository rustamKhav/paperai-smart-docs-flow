import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Download, Share } from "lucide-react";
import { format } from "date-fns";

// Mock data for documents
const documents = [
  {
    id: 'doc-1',
    name: 'Tax_Return_2024.pdf',
    type: 'pdf',
    size: 2048,
    modifiedDate: new Date('2024-03-15'),
  },
  {
    id: 'doc-2',
    name: 'Rental_Agreement_Apartment.pdf',
    type: 'pdf',
    size: 3072,
    modifiedDate: new Date('2024-03-10'),
  },
  {
    id: 'doc-3',
    name: 'Health_Insurance_Form.pdf',
    type: 'pdf',
    size: 1536,
    modifiedDate: new Date('2024-03-05'),
  },
  {
    id: 'doc-4',
    name: 'Work_Contract_2023.pdf',
    type: 'pdf',
    size: 2560,
    modifiedDate: new Date('2024-02-28'),
  },
  {
    id: 'doc-5',
    name: 'Passport_Application.pdf',
    type: 'pdf',
    size: 1024,
    modifiedDate: new Date('2024-02-20'),
  },
  {
    id: 'doc-6',
    name: 'Birth_Certificate_Copy.pdf',
    type: 'pdf',
    size: 768,
    modifiedDate: new Date('2024-02-15'),
  },
  {
    id: 'doc-7',
    name: 'Driver_License_Renewal.pdf',
    type: 'pdf',
    size: 1280,
    modifiedDate: new Date('2024-02-10'),
  },
  {
    id: 'doc-8',
    name: 'Bank_Statement_March.pdf',
    type: 'pdf',
    size: 1792,
    modifiedDate: new Date('2024-03-01'),
  },
];

const Storage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container px-4 py-8 mx-auto md:py-12 md:px-6">
        <h1 className="text-3xl font-bold mb-2">My Documents</h1>
        <p className="text-gray-600 mb-8">
          Access and manage your processed documents
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {documents.map((doc) => (
            <div 
              key={doc.id} 
              className="bg-white rounded-lg border hover:shadow-md transition-shadow duration-200 overflow-hidden cursor-pointer"
            >
              <div className="aspect-[1/1.414] bg-gray-50 flex flex-col items-center justify-center p-4 relative">
                <div className="text-4xl mb-2">
                  {doc.type === "pdf" ? "📄" : doc.type === "doc" ? "📝" : "🖼️"}
                </div>
                <div className="text-sm font-medium truncate max-w-full">
                  {doc.name}
                </div>
                <div className="text-xs text-gray-500">
                  {(doc.size / 1024).toFixed(2)} MB
                </div>
              </div>
              <div className="p-3 border-t">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    {format(doc.modifiedDate, "MMM d, yyyy")}
                  </span>
                  <div className="flex space-x-1">
                    <Button variant="ghost" size="icon" className="h-7 w-7">
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-7 w-7">
                      <Share className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Storage;
