"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="mb-12 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-violet-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-indigo-500/30">
            <Shield size={32} className="text-indigo-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy <span className="text-gradient">Policy</span></h1>
          <p className="text-slate-400">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="glass-card rounded-3xl p-8 md:p-12 space-y-8 text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
            <p className="mb-4">
              At DiplomaPath Premium, we collect information that you provide directly to us when you:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Create an account or register for our services</li>
              <li>Subscribe to our newsletter or career updates</li>
              <li>Fill out a contact form or lead capture form</li>
              <li>Interact with our AI Career Guru</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">
              We use the information we collect to provide, maintain, and improve our services, specifically to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Send you college admission updates and career recommendations</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Analyze usage trends and improve the user experience of our platform</li>
              <li>Send technical notices, updates, security alerts, and support messages</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Information Sharing</h2>
            <p>
              We do not share your personal information with third parties except in the following cases: with your consent, to comply with laws, to protect our rights, or in connection with a business transfer. We may share aggregated or de-identified information that cannot reasonably be used to identify you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
            <p>
              We implement reasonable security measures to protect the security of your personal information both online and offline. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at <a href="mailto:info@diplomapath.com" className="text-indigo-400 hover:underline">info@diplomapath.com</a>.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
