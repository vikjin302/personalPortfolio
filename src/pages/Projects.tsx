"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const projects = [
  {
    title: "Wander Wise",
    description: "A Travelling Website to connect Travellers Worldwide! (Currently under development!)",
    tag: "React",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop",
    github: "https://github.com/yourusername/travelbuddy",
    demo: "https://travelbuddy-demo.com"
  },
  {
    title: "Personal Portfolio",
    description: "My Personal Portfolio showcasing my skills and projects that I work on!",
    tag: "React",
    image: "../assets/portfoliopic.jpg",
    github: "https://github.com/yourusername/travelbuddy",
    demo: "https://travelbuddy-demo.com"
  },
  {
    title: "B2B Website",
    description: "B2B Website that for a Pet Preform and Plastic Manufacturing Firm in Lucknow, India",
    tag: "Full Stack",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    github: "https://github.com/yourusername/society1",
    demo: "https://society1-demo.com"
  }
];

const getTagColor = (tag: string) => {
  switch (tag) {
    case "React":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
    case "JavaScript":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
    case "Next.js":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
    case "MERN":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
    case "Full Stack":
      return "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
  }
};

export default function Project() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) &&
      (filter === "All" || p.tag === filter)
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Navbar />
      <main className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8 mb-16"
        >
          <h1 
            className="text-6xl font-bold text-center py-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 drop-shadow-sm"
            style={{fontFamily: "Baumans"}}
          >
            My Projects
          </h1>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto text-lg text-emerald-200"
          style={{fontFamily:"Spinnaker"}}>
            Explore my portfolio of projects showcasing various technologies and solutions.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4 font-bold text-emerald-200" />
            <Input
              type="text"
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 border-2 border-yellow-400 focus:border-yellow-500 transition-all text-white"
            />
          </div>
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-[180px] border-2 border-yellow-400 focus:border-yellow-500 transition-all text-white font-bold">
              <SelectValue placeholder="Filter by tag" />
            </SelectTrigger>
            <SelectContent className="text-yellow-500 bg-gray-800 font-bold">
              <SelectItem className="hover:text-gray-800 hover:bg-yellow-500 font-bold" value="All">All Projects</SelectItem>
              <SelectItem className="hover:text-gray-800 hover:bg-yellow-500 font-bold" value="React">React</SelectItem>
              <SelectItem className="hover:text-gray-800 hover:bg-yellow-500 font-bold" value="JavaScript">JavaScript</SelectItem>
              <SelectItem className="hover:text-gray-800 hover:bg-yellow-500 font-bold" value="Next.js">Next.js</SelectItem>
              <SelectItem className="hover:text-gray-800 hover:bg-yellow-500 font-bold" value="MERN">MERN</SelectItem>
              <SelectItem className="hover:text-gray-800 hover:bg-yellow-500 font-bold" value="Full Stack">Full Stack</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Project Grid */}
        <AnimatePresence>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-emerald-400 group">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                  </div>
                  
                  <CardHeader className="relative -mt-20 z-10 pb-2">
                    <CardTitle 
                      className="text-2xl font-bold text-white drop-shadow-lg transform transition-transform duration-300 group-hover:scale-105 "
                      style={{fontFamily: "Spinnaker"}}
                    >
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <Badge 
                      variant="secondary" 
                      className={cn(
                        "mb-2 transition-all duration-300 hover:scale-105",
                        getTagColor(project.tag)
                      )}
                    >
                      {project.tag}
                    </Badge>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </CardContent>

                  <CardFooter className="flex gap-3 justify-end pt-4">
                    <Button 
                      className="border-none hover:bg-black hover:text-emerald-400 transition-all duration-300 transform hover:-translate-y-1" 
                      variant="outline" 
                      size="sm" 
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button 
                      className="border-none hover:bg-black hover:text-emerald-400 transition-all duration-300 transform hover:-translate-y-1" 
                      size="sm" 
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}