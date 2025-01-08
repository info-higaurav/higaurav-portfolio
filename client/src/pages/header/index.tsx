import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.23, 1, 0.32, 1],
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.2 }
    }
  };

  const mobileMenuVariants = {
    closed: {
      clipPath: "inset(0 0 100% 0)",
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      clipPath: "inset(0 0 0 0)",
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const mobileItemVariants = {
    closed: { 
      opacity: 0,
      x: -10,
      transition: {
        duration: 0.1
      }
    },
    open: { 
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  };

  return (
    <>
      <motion.header
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className="fixed w-full top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/40"
      >
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <motion.div
              variants={itemVariants}
              className="text-2xl font-light tracking-tight hover:opacity-80 transition-opacity cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Higaurav
            </motion.div>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden md:block">
              <NavigationMenuList className="space-x-2">
                {["About","Projects", "Experience", "Contact"].map((item) => (
                  <NavigationMenuItem key={item}>
                    <motion.div variants={itemVariants}>
                      <NavigationMenuLink 
                        href={`#${item.toLowerCase()}`}
                        className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md"
                      >
                        {item}
                      </NavigationMenuLink>
                    </motion.div>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Desktop CTA Button */}
            <div className="hidden md:flex items-center">
              <motion.div variants={itemVariants}>
                <Button 
                  variant="default"
                  className="text-sm font-medium bg-primary hover:bg-primary/90 transition-colors"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Let's Connect
                </Button>
              </motion.div>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2 md:hidden">
              <ModeToggle />
              <motion.button
                variants={itemVariants}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md hover:bg-accent"
                aria-label="Toggle menu"
              >
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  animate={isMobileMenuOpen ? { rotate: 45, scale: 1.1 } : { rotate: 0, scale: 1 }}
                  transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </motion.svg>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu with AnimatePresence */}
        <AnimatePresence mode="wait">
          {isMobileMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
              className="md:hidden fixed w-full bg-background/95 backdrop-blur-sm border-b border-border/40 shadow-lg"
            >
              
              <div className="px-4 py-6 space-y-3">
                {["About", "Experience", "Projects", "Contact"].map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground rounded-md hover:bg-accent/50 transition-all hover:pl-4"
                    variants={mobileItemVariants}
                    onClick={() => setIsMobileMenuOpen(false)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item}
                  </motion.a>
                ))}
                <motion.div 
                  className="pt-4"
                  variants={mobileItemVariants}
                >
                  <Button 
                    variant="default"
                    className="w-full text-sm font-medium bg-primary hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-[0.98]"
                    onClick={() => {
                      const contactSection = document.getElementById('contact');
                      contactSection?.scrollIntoView({ behavior: 'smooth' });
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Let's Connect
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Desktop Mode Toggle - Fixed Bottom Right */}
      <div className="hidden md:block fixed bottom-8 right-8 z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.3 }}
        >
          <ModeToggle />
        </motion.div>
      </div>
    </>
  );
}
