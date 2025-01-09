import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="relative min-h-screen bg-gray-200 dark:bg-gray-900 overflow-hidden">

      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] dark:opacity-[0.02] opacity-[0.04]"></div>
      <div className="relative max-w-2xl mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-xl max-w-xl mx-auto leading-relaxed">
            Have a question or want to work together? Drop me a message!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="bg-white dark:bg-black/60 backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-white/50 dark:bg-gray-900/50 h-12"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-white/50 dark:bg-gray-900/50 h-12"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-white/50 dark:bg-gray-900/50 h-12"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-white/50 dark:bg-gray-900/50 min-h-[200px] resize-none"
                    required
                  />
                </div>

                <div className="pt-4">
                  <Button 
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-gray-900 hover:bg-gray-800 dark:bg-gray-100 dark:hover:bg-gray-200 dark:text-gray-900 text-white h-12 text-lg font-medium transition-colors duration-300"
                  >
                    {status === "loading" ? "Sending..." : "Send Message"}
                  </Button>
                </div>

                {status === "success" && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-green-600 dark:text-green-400 text-center font-medium"
                  >
                    Thank you for your message! I'll get back to you soon.
                  </motion.p>
                )}

                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-600 dark:text-red-400 text-center font-medium"
                  >
                    Something went wrong. Please try again later.
                  </motion.p>
                )}
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
