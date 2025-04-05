import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail, Code, Layers, Globe, Code2 } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#2C3333] to-[#0E8388]">
      <Navbar />
      
      <main className="flex-grow px-6 pt-20">
        <div className="flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl flex flex-col md:flex-row items-center text-center md:text-left mt-16"
          >
            <motion.img
              src="/mypic.jpg"
              alt="Vikrant"
              className="w-56 h-56 object-cover rounded-lg border-4 border-yellow-500 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            />

            <div className="md:ml-8 mt-6 md:mt-0">
              <h1 className="text-4xl font-bold md:text-5xl text-yellow-500" style={{ fontFamily: "Baumans" }}>
                Hi, I'm Vikrant Jindal !
              </h1>
              <p className="mt-4 text-lg text-[#CBE4DE]" style={{ fontFamily: "Ubuntu" }}>
                An <strong>Information Technology Student</strong> 🚀 passionate about
                <strong> Tech, Data Structures and Problem Solving</strong>.
              </p>

              <div className="flex flex-wrap justify-center md:justify-start mt-6 space-x-4" style={{ fontFamily: "Ubuntu" }}>
                <Link to="/projects">
                  <Button className="px-6 py-3 text-lg font-semibold bg-[#0E8388] hover:bg-yellow-500 text-white hover:text-[#0E8388]">
                    View Projects
                  </Button>
                </Link>
                <a href="src/resume.pdf" download>
                  <Button
                    variant="outline"
                    className="px-6 py-3 text-lg border-[#CBE4DE] text-yellow-500 hover:bg-[#2E4F4F] hover:text-white"
                  >
                    Download Resume
                  </Button>
                </a>
              </div>

              <div className="flex justify-center md:justify-start mt-6 space-x-6">
                {[
                  { href: "https://github.com/vikjin302", icon: Github, name: "GitHub" },
                  { href: "https://www.linkedin.com/in/vikrant-jindal-67726427b/", icon: Linkedin, name: "LinkedIn" },
                  { href: "mailto:vikjin302@gmail.com", icon: Mail, name: "Email" },
                  { href: "https://leetcode.com/u/vikrjindal32/", icon: Code2, name: "LeetCode" },
                ].map((social, index) => (
                  <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="relative group">
                    <social.icon className="w-7 h-7 text-[#CBE4DE] hover:text-yellow-500 transition-all" />
                    <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-[#2E4F4F] text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity font-bold">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full max-w-4xl mb-20">
            {[
              {
                title: "About Me",
                icon: <Layers className="w-6 h-6 text-yellow-500" />,
                content:
                  "Hi, I'm Vikrant Jindal, a passionate and driven B.Tech student with a strong foundation in Data Structures, Algorithms, and Full Stack.",
              },
              {
                title: "Skills",
                icon: <Code className="w-6 h-6 text-yellow-500" />,
                content: (
                  <ul className="list-disc ml-4 text-[#CBE4DE]">
                    <li>DSA & Algorithmic Approaches</li>
                    <li>Web Dev, React, Tailwind</li>
                    <li>Express, MongoDB</li>
                    <li>Cloud & UI</li>
                  </ul>
                ),
              },
              {
                title: "Projects",
                icon: <Globe className="w-6 h-6 text-yellow-500" />,
                content: (
                  <>
                    <p className="text-[#CBE4DE]">
                      I have built multiple full-stack applications, including travel websites and B2B Websites.
                    </p>
                    <Link to="/projects">
                      <Button className="mt-4 px-4 py-2 text-sm font-semibold bg-[#0E8388] hover:bg-[#2E4F4F] text-white hover:text-yellow-500">
                        Explore Projects
                      </Button>
                    </Link>
                  </>
                ),
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="h-full"
              >
                <Card className="bg-[#2E4F4F] text-white shadow-lg border border-yellow-500 hover:scale-105 transition-transform h-full flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center space-x-2">
                      {card.icon}
                      <span className="text-yellow-500">{card.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">{card.content}</CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}