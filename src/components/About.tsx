import { BookOpen, Code, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: BookOpen,
      title: "Formation solide",
      description: "Master en Biologie, reconversion réussie en développement",
    },
    {
      icon: Code,
      title: "Passion tech",
      description: "Formation intensive à Sonatel Academy en Web & Mobile",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Esprit critique et capacité d'adaptation aux nouvelles technologies",
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              À propos de <span className="text-blue-600">moi</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Un parcours atypique au service de l'innovation
            </p>
          </div>

          {/* Bio */}
          <div className="mb-12 animate-fade-in-up">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  À 23 ans, après un Master en Biologie animale, j'ai entrepris une
                  reconversion passionnante vers le développement web et mobile. Ma
                  formation à Sonatel Academy m'a permis d'acquérir des compétences
                  solides en programmation et développement d'applications.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Mon parcours scientifique m'a apporté rigueur, esprit d'analyse et
                  capacité à résoudre des problèmes complexes - des qualités que
                  j'applique quotidiennement dans mes projets de développement. Je suis
                  motivé par la création de solutions qui ont un impact réel.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-3 gap-6 animate-fade-in-up">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-2"
                >
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 mb-4">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
