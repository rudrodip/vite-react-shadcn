import { siteConfig } from "@/config/site.config";
import { ArrowRight } from "lucide-react";

export default function App() {
  return (
    <main className="app space-y-12 px-1 md:px-0">
      <h1 className="head-text mt-40">
        <span className="purple-gradient">Vite</span> +{" "}
        <span className="blue-gradient">React</span> +{" "}
        <span className="primary-gradient">ShadCN</span>
      </h1>
      <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-3 gap-3">
        <Card 
          title="Github" 
          description="Here is the github link for this template."
          url={siteConfig.links.github} 
        />
        <Card 
          title="Twitter" 
          description="Give me a follow on twitter." 
          url={siteConfig.links.twitter} 
        />
        <Card 
          title="Deploy" 
          description="Deploy on vercel with one click." 
          url={siteConfig.links.deploy} 
        />
      </div>
    </main>
  );
}

const Card = ({ title, description, url }: { title: string, description: string, url: string }) => {
  return (
    <a href={url} target="_blank" className="group w-full h-full hover:bg-accent/30 transition-all duration-75 rounded border p-3">
      <div className="flex items-center w-full gap-2">
        <h1 className="text-2xl">{title}</h1>
        <ArrowRight size={20} className="-translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-200" />
      </div>
      <p className="mt-6 max-w-sm">{description}</p>
    </a>
  )
}