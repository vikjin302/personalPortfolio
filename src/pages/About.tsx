"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import {toast} from "react-hot-toast"

import {
  Github,
  Linkedin,
  Twitter,
  Code2,
  MapPin,
  Calendar,
  School,
  Home,
  Trophy,
  Target,
  Brain,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/vikjin302",
    icon: Github,
    color: "hover:text-gray-900 dark:hover:text-gray-100",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/vikrant-jindal-67726427b/",
    icon: Linkedin,
    color: "hover:text-blue-600 dark:hover:text-blue-400",
  },
  {
    name: "Twitter",
    url: "https://x.com/Vikrant3020",
    icon: Twitter,
    color: "hover:text-sky-500 dark:hover:text-sky-400",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/vikrjindal32/",
    icon: Code2,
    color: "hover:text-yellow-500 dark:hover:text-yellow-400",
  },
];

const personalInfo = [
  { label: "Name", value: "Vikrant Jindal", icon: Brain },
  { label: "Age", value: "20", icon: Calendar },
  { label: "College", value: "Manipal University Jaipur", icon: School },
  { label: "Hometown", value: "Lucknow, India", icon: Home },
  { label: "Birthday", value: "31 May 2004", icon: Calendar },
  { label: "Location", value: "Jaipur, India", icon: MapPin },
];

const leetcodeStats = [
  { label: "Problems Solved", value: "160+", icon: Trophy },
  { label: "Contest Rating", value: "Not Yet Participated", icon: Target },
  { label: "Global Rank", value: "700,000 around", icon: Trophy },
];

const leetcodeJourney = [
  {
    month: "August 2024",
    problems: 50,
    description: "Focused on Basic Programming",
  },
  {
    month: "January 2025",
    problems: 100,
    description: "Boosted Arrays, String, and Linked List Concepts",
  },
  {
    month: "March 2025",
    problems: 150,
    description:
      "Strengthened Problem Solving Algos like Sliding Window, Monotonic Stack, DP, etc.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Navbar />
      <main className="container mx-auto px-4 py-24">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-16"
        >
          <h1
            className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600"
            style={{ fontFamily: "Baumans" }}
          >
            About Me
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-emerald-200"
          style={{fontFamily:"Baumans"}}>
            Software Engineering Student | Problem Solver | Tech Enthusiast
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center gap-6 mb-16 text-yellow-400"
        >
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`transform hover:scale-110 transition-all duration-300 ${link.color}`}
              >
                <Icon className="h-8 w-8" />
              </a>
            );
          })}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 text-black">
          {/* Personal Info Card */}
         

<motion.div
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5, delay: 0.4 }}
>
  <Card className="h-full bg-gradient-to-br from-emerald-300 to-emerald-400 border-none shadow-xl hover:shadow-2xl transition-shadow duration-300">
    <CardHeader>
      <CardTitle className="text-2xl font-bold text-black" style={{ fontFamily: "Baumans" }}>
        Personal Information
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      {personalInfo.map((info) => {
        const Icon = info.icon;
        return (
          <motion.div
            key={info.label}
            className="flex items-center gap-4 p-2 rounded-xl hover:bg-emerald-200 transition-colors duration-300 cursor-pointer group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              navigator.clipboard.writeText(info.value);
              toast.success(`${info.label} copied to clipboard!`);
            }}
          >
            <Icon className="h-5 w-5 text-muted-foreground group-hover:text-black transition-colors" />
            <div>
              <Badge
                variant="secondary"
                className="text-sm text-muted-foreground font-bold text-emerald-300 bg-black"
              >
                {info.label}
              </Badge>
              <p className="font-medium text-black group-hover:underline">{info.value}</p>
            </div>
          </motion.div>
        );
      })}
    </CardContent>
  </Card>
</motion.div>


          {/* LeetCode Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Card className="h-full bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/10 dark:to-orange-900/10 text-teal-100 border-none">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2" style={{ fontFamily: "Baumans" }}>
                  <Code2 className="h-6 w-6" />
                  LeetCode Statistics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-6">
                  {leetcodeStats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                      <div
                        key={stat.label}
                        className="flex items-center gap-4 bg-white/50 dark:bg-white/5 p-4 rounded-lg"
                      >
                        <div className="bg-yellow-100 dark:bg-yellow-900/50 p-3 rounded-full">
                          <Icon className="h-6 w-6 text-yellow-700 dark:text-yellow-400" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{stat.label}</p>
                          <p className="text-xl font-bold">{stat.value}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-black"
        >
          <Card className="bg-gradient-to-br from-emerald-300 to-emerald-400 border-none">
            <CardHeader>
              <CardTitle className="text-2xl"
              style={{fontFamily:"Baumans"}}>My LeetCode Journey</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {leetcodeJourney.map((milestone, index) => (
                  <div key={milestone.month} className="relative">
                    <div className="flex items-center gap-4">
                      <div className=" dark:bg-black p-3 rounded-full">
                        <Trophy className="h-6 w-6 text-emerald-300" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold" style={{fontFamily:"Baumans"}}>{milestone.month}</h3>
                        <p className="text-muted-foreground"
                        style={{fontFamily:"Spinnaker"}}>{milestone.description}</p>
                        <Badge variant="secondary" className="mt-2 font-bold text-emerald-300 bg-black">
                          {milestone.problems} Problems Solved
                        </Badge>
                      </div>
                    </div>
                    {index < leetcodeJourney.length - 1 && (
                      <div className="absolute left-6 top-14 bottom-0 w-px bg-black" />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
