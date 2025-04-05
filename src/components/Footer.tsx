import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-[#2E4F4F] text-[#CBE4DE] py-8 shadow-inner"
    >
      <div className="container mx-auto flex flex-col items-center px-6 space-y-6 md:flex-row md:justify-between md:space-y-0 w-full">
        {/* Branding / Tagline */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-yellow-500" style={{fontFamily:"Baumans"}}>Let's Connect !</h2>
          <p className="text-sm text-yellow-500">Building cool things, one line at a time.</p>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/vikjin302"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-[#0E8388] rounded-full hover:bg-yellow-500 transition-all shadow-lg"
          >
            <Github className="w-6 h-6 text-[#2E4F4F]" />
          </a>
          <a
            href="https://www.linkedin.com/in/vikrant-jindal-67726427b/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-[#0E8388] rounded-full hover:bg-yellow-500 transition-all shadow-lg"
          >
            <Linkedin className="w-6 h-6 text-[#2E4F4F]" />
          </a>
          <a
            href="mailto:vikjin302@gmail.com"
            className="p-2 bg-[#0E8388] rounded-full hover:bg-yellow-500 transition-all shadow-lg"
          >
            <Mail className="w-6 h-6 text-[#2E4F4F]" />
          </a>
        </div>
      </div>

      <Separator className="my-6 bg-[#CBE4DE]" />

      {/* Copyright & Contact Button */}
      <div className="text-center text-[#CBE4DE] text-sm">
        
        <Button
          variant="ghost"
          className="mt-4 text-[#CBE4DE] border border-[#0E8388] hover:bg-yellow-500 hover:text-[#2E4F4F] transition-all"
          style={{ fontFamily:"Baumans" }}
        >
          Get in Touch
        </Button>
      </div>
    </motion.footer>
  );
}
