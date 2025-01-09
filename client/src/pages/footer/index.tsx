import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-black border-t border-primary/10">
      <div className="max-w-[1400px] mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* About Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-primary">About</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Portfolio of Gaurav Kumar, a passionate full-stack developer focused on creating innovative web solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-primary">Quick Links</h3>
            <ul className="space-y-3">
              {['Projects', 'Experience', 'Skills', 'Awards'].map((item) => (
                <li key={item}>
                  <Button 
                    variant="link" 
                    className="text-muted-foreground hover:text-primary p-0 h-auto text-sm"
                  >
                    {item}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-primary">Connect</h3>
            <ul className="space-y-3">
              {[
                { name: 'GitHub', url: 'https://github.com/yourusername' },
                { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername' },
                { name: 'Twitter', url: 'https://twitter.com/yourusername' },
              ].map((social) => (
                <li key={social.name}>
                  <Button 
                    variant="link" 
                    className="text-muted-foreground hover:text-primary p-0 h-auto text-sm"
                    onClick={() => window.open(social.url, '_blank')}
                  >
                    {social.name}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-primary">Contact</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Email: ai.higaurav@gmail.com</li>
              <li>Location: India</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <motion.div 
          className="pt-10 border-t border-primary/10 text-center text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p>© {currentYear} Gaurav Kumar. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}