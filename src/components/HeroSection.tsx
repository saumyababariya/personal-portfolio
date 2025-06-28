import React from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

interface PersonalInfo {
  name: string;
  title: string;
  resumeUrl: string;
}

interface HeroSectionProps {
  personalInfo: PersonalInfo;
  onDownloadResume: () => void;
}

export function HeroSection({ personalInfo, onDownloadResume }: HeroSectionProps) {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center px-4"
      style={{
        backgroundImage: "url(/back.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay to darken the background */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative z-10 text-center text-white animate-fade-in">
        {/* Profile Image */}
        <div className="mb-6">
          <img
            src="/profile.jpeg"
            alt={personalInfo.name}
            className="w-32 h-32 rounded-full mx-auto object-cover"
          />
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          {personalInfo.name}
        </h1>

        {/* Typewriter Tagline */}
        <p className="text-xl md:text-2xl mb-8 text-gray-300">
          <Typewriter
            words={[
              personalInfo.title,
              "I turn ideas into reality.",
              "Building sleek web experiences.",
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={onDownloadResume}
            className="bg-purple-600 hover:bg-purple-700"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </Button>
          <Button
            variant="outline"
            asChild
            className="border-white/20 text-white hover:bg-white/10"
          >
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
