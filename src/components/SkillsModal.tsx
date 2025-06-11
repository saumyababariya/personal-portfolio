
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
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Plus, Trash2 } from "lucide-react";

interface Skill {
  name: string;
  level: number;
}

interface SkillsModalProps {
  isOpen: boolean;
  onClose: () => void;
  skills: Skill[];
  onSave: (skills: Skill[]) => void;
}

export function SkillsModal({ isOpen, onClose, skills, onSave }: SkillsModalProps) {
  const [formData, setFormData] = useState<Skill[]>(skills);

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  const addSkill = () => {
    setFormData(prev => [...prev, { name: '', level: 50 }]);
  };

  const removeSkill = (index: number) => {
    setFormData(prev => prev.filter((_, i) => i !== index));
  };

  const updateSkill = (index: number, field: keyof Skill, value: string | number) => {
    setFormData(prev => prev.map((skill, i) => 
      i === index ? { ...skill, [field]: value } : skill
    ));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit Skills</DialogTitle>
          <DialogDescription>
            Add, remove, or update your skills and proficiency levels.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          {formData.map((skill, index) => (
            <div key={index} className="flex items-end gap-4 p-4 border rounded-lg">
              <div className="flex-1">
                <Label htmlFor={`skill-${index}`}>Skill Name</Label>
                <Input
                  id={`skill-${index}`}
                  value={skill.name}
                  onChange={(e) => updateSkill(index, 'name', e.target.value)}
                  placeholder="e.g., React, Python, AWS"
                />
              </div>
              <div className="flex-1">
                <Label htmlFor={`level-${index}`}>Proficiency Level: {skill.level}%</Label>
                <Slider
                  id={`level-${index}`}
                  min={0}
                  max={100}
                  step={5}
                  value={[skill.level]}
                  onValueChange={(value) => updateSkill(index, 'level', value[0])}
                  className="mt-2"
                />
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={() => removeSkill(index)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          ))}
          
          <Button onClick={addSkill} variant="outline" className="w-full">
            <Plus className="w-4 h-4 mr-2" />
            Add Skill
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
