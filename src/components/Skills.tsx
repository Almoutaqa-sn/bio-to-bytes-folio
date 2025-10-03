import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Database,
  Smartphone,
  Globe,
  GitBranch,
  Palette,
  Brain,
  Users,
  MessageSquare,
  Target,
} from "lucide-react";

const Skills = () => {
  const hardSkills = [
    {
      category: "Frontend",
      icon: Globe,
      skills: ["React", "Angular", "HTML/CSS", "JavaScript", "Tailwind CSS"],
    },
    {
      category: "Backend",
      icon: Code2,
      skills: ["Node.js", "PHP", "Laravel", "Java"],
    },
    {
      category: "Mobile",
      icon: Smartphone,
      skills: ["Flutter", "React Native"],
    },
    {
      category: "Bases de données",
      icon: Database,
      skills: ["MySQL", "PostgreSQL", "Prisma"],
    },
    {
      category: "Outils & Autres",
      icon: GitBranch,
      skills: ["Git", "Docker", "Figma", "R/RStudio"],
    },
  ];

  const softSkills = [
    { name: "Discipline", icon: Target },
    { name: "Adaptabilité", icon: Brain },
    { name: "Travail d'équipe", icon: Users },
    { name: "Communication", icon: MessageSquare },
    { name: "Créativité", icon: Palette },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Mes <span className="gradient-text">compétences</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Technologies et savoir-faire
            </p>
          </div>

          {/* Hard Skills */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 animate-fade-in-up">
              Compétences techniques
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hardSkills.map((category, index) => {
                const Icon = category.icon;
                return (
                  <Card
                    key={index}
                    className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-gradient-to-r from-primary to-accent">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-lg">{category.category}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="text-sm"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 animate-fade-in-up">
              Qualités personnelles
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {softSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <Card
                    key={index}
                    className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in-up text-center"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent mb-3">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <p className="font-medium text-sm">{skill.name}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
