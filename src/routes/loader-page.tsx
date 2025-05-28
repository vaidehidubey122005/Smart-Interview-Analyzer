import { cn } from '@/lib/utils';
import { Loader } from "lucide-react";

export const LoaderPage = ({className}: {className?: string}) => {
  return (
  <div className={cn(
    "w-screen h-screen flex items-center justify center bg-transparent z-50 ",
    className
  )}
  >
    <Loader className="w-6 h-6 min-w-6 animatw-spin" />
    </div>
    );
  };

