import { useState } from 'react';
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { SkillsModal } from "@/components/SkillsModal";
import { ProjectsModal } from "@/components/ProjectsModal";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();

  const [personalInfo, setPersonalInfo] = useState({
    name: "Saumya Babariya",
    title: "Full Stack Developer",
    email: "saumyababariya1@gmail.com",
    phone: "+91 95581 81184",
    location: "Gandhinagar, India",
    about: "I'm a passionate developer with expertise in modern web technologies. I love creating beautiful, functional applications that solve real-world problems.",
    github: "https://github.com/saumyababariya",
    linkedin: "https://www.linkedin.com/in/saumya-babariya-a24087344/",
    resumeUrl: "/resume.pdf"
  });

  const [skills, setSkills] = useState([
    { name: "React", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Python", level: 75 }
  ]);

  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React and Node.js",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js"],
      liveUrl: "#",
      githubUrl: "#"
    },
  ]);

  const handleDownloadResume = () => {
    if (personalInfo.resumeUrl && personalInfo.resumeUrl !== "#") {
      window.open(personalInfo.resumeUrl, '_blank');
    } else {
      toast({
        title: "Resume not available",
        description: "Please add your resume URL in the personal info section.",
        variant: "destructive"
      });
    }
  };

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-700 to-purple-900">
      <HeroSection personalInfo={personalInfo} onDownloadResume={handleDownloadResume} />

      {/* About Section with purple gradient */}
      <div id="about" className="bg-gradient-to-r from-purple-900 via-purple-800 to-purple-700 text-white" style={{ height: '730px' }}>
        <AboutSection personalInfo={personalInfo} />
      </div>

      {/* Skills Section with purple gradient */}
      <div id="skills" className="bg-gradient-to-r from-purple-900 via-purple-800 to-purple-700 text-white" style={{ height: '730px' }}>
        <SkillsSection skills={skills} />
      </div>

      {/* Projects Section with purple gradient */}
      <div id="projects" className="bg-gradient-to-r from-purple-900 via-purple-800 to-purple-700 text-white" style={{ height: '730px' }}>
        <ProjectsSection projects={projects} />
      </div>

      {/* Contact Section with purple gradient */}
      <div id="contact" className="bg-gradient-to-r from-purple-900 via-purple-800 to-purple-700 text-white" style={{ height: '730px' }}>
        <ContactSection personalInfo={personalInfo} onContactSubmit={handleContactSubmit} />
      </div>

      <SkillsModal isOpen={false} onClose={() => {}} skills={skills} onSave={setSkills} />
      <ProjectsModal isOpen={false} onClose={() => {}} projects={projects} onSave={setProjects} />
    </div>
  );
};

export default Index;
