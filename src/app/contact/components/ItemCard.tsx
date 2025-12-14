import { useState, useCallback } from "react";
import { SocialItem } from "../entities";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Check } from "lucide-react";
import { Copy } from "lucide-react";

export const ItemCard = ({ title, data, onClick, icon }: SocialItem) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation(); // Prevent triggering main onClick
      try {
        if (data) {
          navigator.clipboard.writeText(data);
          setCopied(true);
          setTimeout(() => setCopied(false), 1000);
        }
      } catch (err) {
        console.error("Failed to copy:", err);
      }
    },
    [data]
  );

  return (
    <div className="social-item" onClick={onClick}>
      <div className="social-item-title">
        <div className="icon">{icon}</div>
        <div className="view">
          <div className="title">{title}</div>
          <div className="data">{data}</div>
        </div>
      </div>

      <div className={`copy ${copied ? "copied" : ""}`} onClick={handleCopy}>
        <Tooltip>
          <TooltipTrigger asChild>
            {copied ? (
              <Check className="check" size={16} />
            ) : (
              <Copy size={16} />
            )}
          </TooltipTrigger>
          <TooltipContent> {!copied ? "Copy" : "Copied"}</TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
};
