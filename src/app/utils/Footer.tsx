import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    // <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
    //   <p className="text-sm text-muted-foreground">
    //     {new Date().getFullYear()} Pranjal Gupta. All rights reserved.
    //   </p>
    //   <p className="text-sm text-muted-foreground flex items-center gap-1">
    //     Built with <Heart className="h-3 w-3 text-red-500" /> using React &
    //     Tailwind CSS
    //   </p>
    // </div>
    <div className="py-8 flex flex-col md:flex-row items-center justify-center gap-4">
      <p className="text-sm text-muted-foreground">
        {new Date().getFullYear()} Pranjal Gupta. All rights reserved.
      </p>
    </div>
  );
};
