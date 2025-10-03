import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message envoyé !",
        description: "Je vous répondrai dans les plus brefs délais.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "contact@exemple.com",
      link: "mailto:contact@exemple.com",
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+221 XX XXX XX XX",
      link: "https://wa.me/221XXXXXXXXX",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/profile",
      link: "https://linkedin.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/username",
      link: "https://github.com",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Me <span className="gradient-text">contacter</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Discutons de votre prochain projet
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="border-none shadow-lg animate-fade-in-up">
              <CardHeader>
                <CardTitle className="text-2xl">Envoyez un message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Nom complet
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Votre nom"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="votre@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Votre message..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6 animate-fade-in-up">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Informations de contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <a
                        key={index}
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors group"
                      >
                        <div className="p-3 rounded-full bg-gradient-to-r from-primary to-accent group-hover:shadow-lg transition-shadow">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-medium">{info.label}</p>
                          <p className="text-sm text-muted-foreground">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </CardContent>
              </Card>

              {/* Call to Action */}
              <Card className="border-none shadow-lg bg-gradient-to-br from-primary to-accent text-white">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">Prêt à collaborer ?</h3>
                  <p className="mb-4 text-white/90">
                    Je suis disponible pour des projets freelance et des
                    opportunités professionnelles.
                  </p>
                  <Button
                    variant="secondary"
                    size="lg"
                    className="w-full"
                    asChild
                  >
                    <a href="#" download>
                      Télécharger mon CV
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
