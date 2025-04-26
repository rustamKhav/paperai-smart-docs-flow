
import { cn } from "@/lib/utils";

interface ProcessingIndicatorProps {
  message?: string;
  progress?: number;
  className?: string;
}

const ProcessingIndicator = ({
  message = "Processing document...",
  progress = -1,
  className
}: ProcessingIndicatorProps) => {
  const isIndeterminate = progress < 0 || progress > 100;
  
  return (
    <div className={cn("flex flex-col items-center justify-center", className)}>
      <div className="relative h-20 w-20 mb-6">
        <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
        <div 
          className={cn(
            "absolute inset-0 rounded-full border-4 border-primary",
            isIndeterminate ? "animate-spin border-r-transparent border-t-transparent" : ""
          )}
          style={
            !isIndeterminate 
              ? { 
                  clipPath: `polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 ${100 - progress}%)`,
                } 
              : undefined
          }
        ></div>
        {!isIndeterminate && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm font-medium">{progress}%</span>
          </div>
        )}
      </div>
      <p className="text-lg font-medium">{message}</p>
    </div>
  );
};

export default ProcessingIndicator;
