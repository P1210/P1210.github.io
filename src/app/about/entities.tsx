import { Layout } from "lucide-react";
import { Terminal } from "lucide-react";
import { Folder } from "lucide-react";
import { FileText } from "lucide-react";

export interface StackItem {
  title: string;
  data: string;
  icon: React.ReactElement;
}

export const STACK_ITEMS: StackItem[] = [
  {
    title: "Resume Link",
    data: "/Pranjal_Gupta_resume.pdf",
    icon: <FileText size={20} />,
  },
  { title: "Featured Projects", data: "projects", icon: <Folder size={20} /> },
  { title: "Tech Stack", data: "skills", icon: <Terminal size={20} /> },
  {
    title: "Experience",
    data: "experience",
    icon: <Layout size={20} />,
  },
] as const;
