
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Menu, Download, X, Share, Edit, File } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

interface DocumentCardProps {
  fileName: string;
  fileType: string;
  fileSize?: string;
  lastModified?: string;
  onDownload?: () => void;
  onDelete?: () => void;
  onShare?: () => void;
  onEdit?: () => void;
}

const DocumentCard = ({
  fileName,
  fileType,
  fileSize,
  lastModified,
  onDownload,
  onDelete,
  onShare,
  onEdit
}: DocumentCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const getFileIcon = () => {
    // Use a simple document icon for all types, but could be customized by file type
    return <File className="h-16 w-16 text-primary" />;
  };
  
  return (
    <Card
      className="relative overflow-hidden transition-shadow hover:shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-4">
        <div className="flex justify-center items-center h-40 bg-gray-50">
          {getFileIcon()}
        </div>
        
        <div className="mt-3">
          <h3 className="font-medium text-sm truncate">{fileName}</h3>
          <div className="flex items-center justify-between mt-1">
            <span className="text-xs text-gray-500">{fileType}</span>
            <span className="text-xs text-gray-500">{fileSize}</span>
          </div>
          {lastModified && (
            <p className="text-xs text-gray-400 mt-1">{lastModified}</p>
          )}
        </div>
        
        <div className={`flex justify-end mt-2 gap-2 transition-opacity ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          {onDownload && (
            <Button variant="outline" size="icon" onClick={onDownload} className="h-8 w-8">
              <Download className="h-4 w-4" />
            </Button>
          )}
          {onShare && (
            <Button variant="outline" size="icon" onClick={onShare} className="h-8 w-8">
              <Share className="h-4 w-4" />
            </Button>
          )}
          {onEdit && (
            <Button variant="outline" size="icon" onClick={onEdit} className="h-8 w-8">
              <Edit className="h-4 w-4" />
            </Button>
          )}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="h-8 w-8">
                <Menu className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {onDownload && (
                <DropdownMenuItem onClick={onDownload}>
                  <Download className="mr-2 h-4 w-4" />
                  <span>Download</span>
                </DropdownMenuItem>
              )}
              {onShare && (
                <DropdownMenuItem onClick={onShare}>
                  <Share className="mr-2 h-4 w-4" />
                  <span>Share</span>
                </DropdownMenuItem>
              )}
              {onEdit && (
                <DropdownMenuItem onClick={onEdit}>
                  <Edit className="mr-2 h-4 w-4" />
                  <span>Edit</span>
                </DropdownMenuItem>
              )}
              {onDelete && (
                <DropdownMenuItem onClick={onDelete} className="text-red-500 focus:text-red-500">
                  <X className="mr-2 h-4 w-4" />
                  <span>Delete</span>
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </Card>
  );
};

export default DocumentCard;
