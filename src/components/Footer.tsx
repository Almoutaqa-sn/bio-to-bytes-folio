import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Top Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">Portfolio</h3>
              <p className="text-background/70 leading-relaxed">
                Développeur web et mobile passionné, transformant vos idées en
                solutions digitales innovantes.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Navigation rapide</h4>
              <ul className="space-y-2">
                {["Accueil", "À propos", "Compétences", "Projets", "Contact"].map(
                  (link) => (
                    <li key={link}>
                      <a
                        href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-background/70 hover:text-background transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Me suivre</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:contact@example.com"
                  className="p-3 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-background/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/70">
              <p>
                © {currentYear} Portfolio. Tous droits réservés.
              </p>
              <p className="flex items-center gap-2">
                Conçu avec <Heart className="w-4 h-4 fill-red-500 text-red-500" /> et
                React
              </p>
            </div>
          </div>

          {/* Inspirational Quote */}
          <div className="mt-8 text-center">
            <p className="text-background/60 italic text-sm">
              "Le code est de la poésie" - chaque ligne raconte une histoire
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
