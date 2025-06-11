import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

interface PersonalInfo {
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  twitter: string;
}

interface ContactSectionProps {
  personalInfo: PersonalInfo;
  onContactSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export function ContactSection({ personalInfo, onContactSubmit }: ContactSectionProps) {
  return (
    <section id="contact" className="py-20 px-4 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Get In Touch</h2>
        <div className="flex justify-center">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-3 text-purple-400" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-purple-400 transition-colors">
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-3 text-purple-400" />
                {personalInfo.phone}
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 mr-3 text-purple-400" />
                {personalInfo.location}
              </div>
              <div className="flex gap-4 mt-6">
                <Button variant="outline" size="icon" asChild className="border-white/20 text-white hover:bg-white/10">
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild className="border-white/20 text-white hover:bg-white/10">
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

