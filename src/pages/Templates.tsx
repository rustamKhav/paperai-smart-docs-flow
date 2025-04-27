
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { File } from "lucide-react";
import { Link } from "react-router-dom";

const germanDocuments = [
  {
    id: "anmeldung",
    name: "Anmeldung",
    description: "Registration form",
    icon: "📝"
  },
  {
    id: "steuer",
    name: "Steueridentifikationsnummer",
    description: "Tax ID application",
    icon: "💰"
  },
  {
    id: "kindergeld",
    name: "Kindergeld",
    description: "Child benefit application",
    icon: "👶"
  },
  {
    id: "bafog",
    name: "BAföG",
    description: "Student loan application",
    icon: "🎓"
  },
  {
    id: "wohngeld",
    name: "Wohngeld",
    description: "Housing benefit application",
    icon: "🏠"
  },
  {
    id: "krankenversicherung",
    name: "Krankenversicherung",
    description: "Health insurance forms",
    icon: "🏥"
  },
  {
    id: "rundfunkbeitrag",
    name: "Rundfunkbeitrag",
    description: "Broadcasting fee",
    icon: "📺"
  },
  {
    id: "kfz",
    name: "KFZ-Anmeldung",
    description: "Vehicle registration",
    icon: "🚗"
  }
];

const Templates = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container px-4 py-8 mx-auto md:py-12 md:px-6">
        <h1 className="text-3xl font-bold mb-2">Document Templates</h1>
        <p className="text-gray-600 mb-8">
          Common German administrative documents you can auto-fill with Paper AI
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {germanDocuments.map((doc) => (
            <div 
              key={doc.id} 
              className="bg-white rounded-lg border hover:shadow-md transition-shadow duration-200 overflow-hidden"
            >
              <div className="aspect-[1/1.414] bg-gray-50 flex items-center justify-center relative">
                <div className="text-4xl">{doc.icon}</div>
                <div className="absolute bottom-0 left-0 right-0 bg-gray-50 bg-opacity-90 p-2">
                  <h3 className="font-medium text-sm truncate">{doc.name}</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600 mb-4">{doc.description}</p>
                <Button 
                  variant="outline" 
                  className="w-full justify-center text-primary border-primary hover:bg-primary-50"
                >
                  <File className="h-4 w-4 mr-2" />
                  Use template
                </Button>
              </div>
            </div>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Templates;
