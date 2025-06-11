
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Plus, Trash2, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

interface ProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
  projects: Project[];
  onSave: (projects: Project[]) => void;
}

export function ProjectsModal({ isOpen, onClose, projects, onSave }: ProjectsModalProps) {
  const [formData, setFormData] = useState<Project[]>(projects);

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  const addProject = () => {
    const newId = Math.max(...formData.map(p => p.id), 0) + 1;
    setFormData(prev => [...prev, {
      id: newId,
      title: '',
      description: '',
      image: '/placeholder.svg',
      technologies: [],
      liveUrl: '',
      githubUrl: ''
    }]);
  };

  const removeProject = (index: number) => {
    setFormData(prev => prev.filter((_, i) => i !== index));
  };

  const updateProject = (index: number, field: keyof Project, value: any) => {
    setFormData(prev => prev.map((project, i) => 
      i === index ? { ...project, [field]: value } : project
    ));
  };

  const addTechnology = (index: number, tech: string) => {
    if (tech.trim()) {
      const technologies = [...formData[index].technologies, tech.trim()];
      updateProject(index, 'technologies', technologies);
    }
  };

  const removeTechnology = (projectIndex: number, techIndex: number) => {
    const technologies = formData[projectIndex].technologies.filter((_, i) => i !== techIndex);
    updateProject(projectIndex, 'technologies', technologies);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit Projects</DialogTitle>
          <DialogDescription>
            Add, remove, or update your portfolio projects.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          {formData.map((project, index) => (
            <div key={project.id} className="p-4 border rounded-lg space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Project {index + 1}</h3>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => removeProject(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor={`title-${index}`}>Project Title</Label>
                  <Input
                    id={`title-${index}`}
                    value={project.title}
                    onChange={(e) => updateProject(index, 'title', e.target.value)}
                    placeholder="e.g., E-Commerce Platform"
                  />
                </div>
                <div>
                  <Label htmlFor={`image-${index}`}>Image URL</Label>
                  <Input
                    id={`image-${index}`}
                    value={project.image}
                    onChange={(e) => updateProject(index, 'image', e.target.value)}
                    placeholder="/placeholder.svg"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor={`description-${index}`}>Description</Label>
                <Textarea
                  id={`description-${index}`}
                  value={project.description}
                  onChange={(e) => updateProject(index, 'description', e.target.value)}
                  placeholder="Brief description of your project..."
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor={`liveUrl-${index}`}>Live Demo URL</Label>
                  <Input
                    id={`liveUrl-${index}`}
                    type="url"
                    value={project.liveUrl}
                    onChange={(e) => updateProject(index, 'liveUrl', e.target.value)}
                    placeholder="https://your-project.com"
                  />
                </div>
                <div>
                  <Label htmlFor={`githubUrl-${index}`}>GitHub URL</Label>
                  <Input
                    id={`githubUrl-${index}`}
                    type="url"
                    value={project.githubUrl}
                    onChange={(e) => updateProject(index, 'githubUrl', e.target.value)}
                    placeholder="https://github.com/user/repo"
                  />
                </div>
              </div>
              
              <div>
                <Label>Technologies Used</Label>
                <div className="flex flex-wrap gap-2 mt-2 mb-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="flex items-center gap-1">
                      {tech}
                      <button
                        onClick={() => removeTechnology(index, techIndex)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    placeholder="Add technology (e.g., React)"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        addTechnology(index, e.currentTarget.value);
                        e.currentTarget.value = '';
                      }
                    }}
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={(e) => {
                      const input = e.currentTarget.previousElementSibling as HTMLInputElement;
                      addTechnology(index, input.value);
                      input.value = '';
                    }}
                  >
                    Add
                  </Button>
                </div>
              </div>
            </div>
          ))}
          
          <Button onClick={addProject} variant="outline" className="w-full">
            <Plus className="w-4 h-4 mr-2" />
            Add Project
          </Button>
        </div>
        
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSave}>
            Save Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
