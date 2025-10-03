import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Application de gestion",
      description:
        "Plateforme complète de gestion avec authentification, CRUD et tableau de bord analytique.",
      stack: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      demo: "#",
      github: "#",
    },
    {
      title: "Messagerie interactive",
      description:
        "Application de chat en temps réel avec notifications push et partage de fichiers.",
      stack: ["Flutter", "Firebase", "WebSockets"],
      image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&h=500&fit=crop",
      demo: "#",
      github: "#",
    },
    {
      title: "Site e-commerce",
      description:
        "Boutique en ligne responsive avec panier, paiement sécurisé et gestion des commandes.",
      stack: ["Laravel", "MySQL", "Bootstrap"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop",
      demo: "#",
      github: "#",
    },
    {
      title: "API REST avec JSON Server",
      description:
        "API RESTful pour gestion de ressources avec documentation Swagger complète.",
      stack: ["Node.js", "Express", "JSON Server", "Swagger"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop",
      demo: "#",
      github: "#",
    },
    {
      title: "Application mobile fitness",
      description:
        "Tracker d'entraînement avec suivi des performances et plans personnalisés.",
      stack: ["Flutter", "SQLite", "Charts"],
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=500&fit=crop",
      demo: "#",
      github: "#",
    },
    {
      title: "Dashboard analytique",
      description:
        "Tableau de bord interactif avec visualisations de données en temps réel.",
      stack: ["React", "D3.js", "API REST"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      demo: "#",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Mes <span className="gradient-text">projets</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Découvrez mes réalisations déployées
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <Button
                      variant="default"
                      size="sm"
                      className="flex-1"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Démo
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
