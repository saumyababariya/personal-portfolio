
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, Phone } from "lucide-react";

interface PersonalInfo {
  about: string;
  location: string;
  email: string;
  phone: string;
}

interface AboutSectionProps {
  personalInfo: PersonalInfo;
}

export function AboutSection({ personalInfo }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">About Me</h2>
        <Card className="bg-white/10 backdrop-blur-sm border-white/20">
          <CardContent className="p-8">
            <p className="text-lg text-gray-300 leading-relaxed">
              {personalInfo.about}
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-400">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                {personalInfo.location}
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                {personalInfo.email}
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                {personalInfo.phone}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
