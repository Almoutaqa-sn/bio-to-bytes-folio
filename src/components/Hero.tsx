import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/mouride_guide_dev.jpeg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="space-y-2">
              <p className="text-muted-foreground text-lg">Bonjour, je suis</p>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Développeur
                <br />
                <span className="gradient-text">Web & Mobile</span>
              </h1>
            </div>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Je conçois et déploie des applications modernes et performantes pour
              transformer les idées en solutions réelles.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                variant="hero"
                size="lg"
                onClick={() => scrollToSection("#projects")}
                className="group"
              >
                Voir mes projets
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("#contact")}
              >
                Me contacter
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@example.com"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="relative w-full max-w-md mx-auto">
              <img
                src={heroImage}
                alt="Developer portrait"
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
