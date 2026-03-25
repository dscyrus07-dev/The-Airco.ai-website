"use client";

import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import FeaturesSection from "@/components/FeaturesSection";
import UseCasesSection from "@/components/UseCasesSection";
import SecuritySection from "@/components/SecuritySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

// SEO Content for crawlers
const StaticSEOContent = () => (
  <div className="sr-only">
    <h1>AiRCo Insights | AI-Powered Business Intelligence Platform</h1>
    <h2>Data Speaks. AiRCo Listens.</h2>
    <p>
      AiRCo Insights is an AI-powered analytics platform designed to help
      organizations make faster, smarter, and more confident decisions. Transform
      complex business data into clear, actionable intelligence.
    </p>
    <h3>Our AI Products</h3>
    <ul>
      <li>AiRCo Insights - Business Intelligence Reimagined</li>
      <li>AiRCo Secure - Intelligent Security with AI</li>
      <li>AiRCo PMS - Smart Hospitality Management</li>
      <li>AiRCo Bot - Conversational AI Assistant</li>
      <li>AiRCo ARS - Auto Reply System</li>
      <li>AiRCo Services - AI Consulting & Implementation</li>
    </ul>
  </div>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black relative overflow-hidden">
      {/* SEO Content */}
      <StaticSEOContent />

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* Products Section */}
      <ProductsSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Use Cases Section */}
      <UseCasesSection />

      {/* Security Section */}
      <SecuritySection />

      {/* Contact Section */}
      <ContactSection />

      {/* Mission Statement */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="section-padding relative z-20"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4"
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-blue-400"
              />
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight"
          >
            At TheAiRCo., we believe that AI should not be overwhelming—it
            should be{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              invisible, intelligent, and incredibly useful.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-gray-300 leading-relaxed"
          >
            Let's build a smarter tomorrow—one insight at a time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              Start Your Journey
            </motion.a>
            <motion.a
              href="#features"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 border border-purple-500/30 text-purple-400 hover:bg-purple-500/10 font-semibold rounded-lg transition-all duration-300"
            >
              Learn More
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
