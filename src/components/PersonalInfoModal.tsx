
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

interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  about: string;
  github: string;
  linkedin: string;
  twitter: string;
  resumeUrl: string;
}

interface PersonalInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  personalInfo: PersonalInfo;
  onSave: (info: PersonalInfo) => void;
}

export function PersonalInfoModal({ isOpen, onClose, personalInfo, onSave }: PersonalInfoModalProps) {
  const [formData, setFormData] = useState<PersonalInfo>(personalInfo);

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  const handleChange = (field: keyof PersonalInfo, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit Personal Information</DialogTitle>
          <DialogDescription>
            Update your personal details to customize your portfolio.
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="title">Professional Title</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => handleChange('title', e.target.value)}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              value={formData.location}
              onChange={(e) => handleChange('location', e.target.value)}
            />
          </div>
          
          <div>
            <Label htmlFor="about">About Me</Label>
            <Textarea
              id="about"
              value={formData.about}
              onChange={(e) => handleChange('about', e.target.value)}
              className="min-h-[100px]"
            />
          </div>
          
          <div>
            <Label htmlFor="resumeUrl">Resume URL (PDF)</Label>
<Input
  id="resumeUrl"
  type="url"
  value={formData.resumeUrl} // This stores the inputted URL
  onChange={(e) => handleChange('resumeUrl', e.target.value)} // Handle input change
  placeholder="/resume.pdf" // Example placeholder for resume URL
/>

// Your download link part
<a href="/resume.pdf" download target="_blank" rel="noopener noreferrer">
  Download Resume (PDF)
</a>

          </div>
          
          <div className="grid grid-cols-1 gap-4">
            <div>
              <Label htmlFor="github">GitHub URL</Label>
              <Input
                id="github"
                type="url"
                value={formData.github}
                onChange={(e) => handleChange('github', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="linkedin">LinkedIn URL</Label>
              <Input
                id="linkedin"
                type="url"
                value={formData.linkedin}
                onChange={(e) => handleChange('linkedin', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="twitter">Twitter URL</Label>
              <Input
                id="twitter"
                type="url"
                value={formData.twitter}
                onChange={(e) => handleChange('twitter', e.target.value)}
              />
            </div>
          </div>
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
