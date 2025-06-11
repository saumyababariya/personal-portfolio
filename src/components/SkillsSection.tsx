
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit3 } from "lucide-react";

interface Skill {
  name: string;
  level: number;
}

interface SkillsSectionProps {
  skills: Skill[];
  onEditSkills: () => void;
}

export function SkillsSection({ skills }: { skills: { name: string; level: number }[] }) {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center mb-12">
          <h2 className="text-4xl font-bold text-white mr-4">Skills</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-white">{skill.name}</span>
                  <span className="text-purple-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
