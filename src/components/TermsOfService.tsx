"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";

export default function TermsOfService() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="mb-12 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-violet-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-indigo-500/30">
            <FileText size={32} className="text-indigo-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of <span className="text-gradient">Service</span></h1>
          <p className="text-slate-400">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="glass-card rounded-3xl p-8 md:p-12 space-y-8 text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using DiplomaPath Premium, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Provision of Services</h2>
            <p>
              DiplomaPath Premium provides career guidance, college information, and educational resources. You agree and acknowledge that we may modify, suspend, or discontinue any part of the service at our sole discretion, without notice or liability to you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Accuracy of Information</h2>
            <p>
              While we strive to ensure the accuracy of college details, fees, placements, and other information, we do not warrant the completeness or accuracy of the information published on our website. You should verify all information directly with the respective institutions before making any admission decisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, images, and software, is the property of DiplomaPath Premium or its content suppliers and is protected by copyright and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. User Conduct</h2>
            <p>
              You agree to use our services only for lawful purposes. You must not use our platform in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at <a href="mailto:info@diplomapath.com" className="text-indigo-400 hover:underline">info@diplomapath.com</a>.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
