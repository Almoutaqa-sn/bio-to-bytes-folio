import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Briefcase, GraduationCap } from "lucide-react";

const Journey = () => {
  const timeline = [
    {
      year: "2024",
      type: "formation",
      icon: GraduationCap,
      title: "Formation Développeur Web & Mobile",
      location: "Sonatel Academy",
      description:
        "Formation intensive en développement full-stack : React, Node.js, Flutter, bases de données et DevOps.",
      badges: ["En cours"],
    },
    {
      year: "2023",
      type: "certification",
      icon: Award,
      title: "Master en Biologie Animale",
      location: "Université",
      description:
        "Diplôme de Master spécialisé en biologie animale avec mention. Développement de l'esprit scientifique et analytique.",
      badges: ["Obtenu"],
    },
    {
      year: "2024",
      type: "experience",
      icon: Briefcase,
      title: "Projets personnels",
      location: "Freelance",
      description:
        "Développement d'applications web et mobile pour divers clients. Gestion de projet de bout en bout.",
      badges: ["Actif"],
    },
    {
      year: "À venir",
      type: "certification",
      icon: Award,
      title: "Certifications professionnelles",
      location: "En ligne",
      description:
        "Certifications AWS, Docker, et frameworks modernes pour renforcer mes compétences techniques.",
      badges: ["Planifié"],
    },
  ];

  const getColorByType = (type: string) => {
    switch (type) {
      case "formation":
        return "bg-blue-600";
      case "certification":
        return "bg-green-600";
      case "experience":
        return "bg-red-600";
      default:
        return "bg-blue-600";
    }
  };

  return (
    <section id="journey" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Mon <span className="text-blue-600">parcours</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Formation et certifications
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-600 hidden md:block" />

            <div className="space-y-8">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="relative animate-fade-in-up"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="flex gap-6 items-start">
                      {/* Icon */}
                      <div className="relative z-10 hidden md:block">
                        <div
                          className={`w-16 h-16 rounded-full bg-gradient-to-br ${getColorByType(
                            item.type
                          )} flex items-center justify-center shadow-lg`}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      {/* Content Card */}
                      <Card className="flex-1 border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                        <CardContent className="p-6">
                          <div className="flex flex-wrap items-center gap-3 mb-3">
                            <Badge
                              variant="secondary"
                              className="font-semibold text-sm"
                            >
                              {item.year}
                            </Badge>
                            {item.badges.map((badge, idx) => (
                              <Badge
                                key={idx}
                                className="bg-blue-600 text-white"
                              >
                                {badge}
                              </Badge>
                            ))}
                          </div>

                          <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                          <p className="text-primary font-medium mb-3">
                            {item.location}
                          </p>
                          <p className="text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
