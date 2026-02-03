"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  BarChart3,
  Globe,
  Calculator,
  CheckCircle2,
  Mail,
  Phone,
  Search,
  TrendingUp,
  ArrowRight,
  Layers,
  Menu,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function AcrisiusLanding() {
  return (
    <div className="bg-[#FCFCFD] text-[#0F172A] font-sans selection:bg-[#921D44] selection:text-white">
      {/* PROFESSIONAL HEADER */}
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded flex items-center justify-center shadow-lg">
              <Image
                src="/logo.png"
                alt="Acrisius Logo"
                width={28}
                height={28}
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xl font-black tracking-tighter uppercase text-[#0F172A]">
                Acrisius
              </span>
              <span className="text-[9px] font-bold text-[#921D44] tracking-[0.3em] uppercase">
                Growth Partners
              </span>
            </div>
          </div>
          <nav className="hidden lg:flex items-center gap-8 text-[11px] font-black uppercase tracking-widest text-slate-500">
            <a href="#about" className="hover:text-[#921D44] transition">
              Our Vision
            </a>
            <a href="#services" className="hover:text-[#921D44] transition">
              Expertise
            </a>
            <a
              href="#contact"
              className="bg-[#921D44] text-white px-6 py-3 rounded hover:bg-[#0F172A] transition-all shadow-md"
            >
              Free Consultation
            </a>
          </nav>
          <Menu className="lg:hidden text-[#0F172A]" />
        </div>
      </header>

      {/* READABILITY-FOCUSED HERO SECTION */}
      <section className="relative min-h-[95vh] flex items-center pt-24 overflow-hidden bg-[#F8F9FB]">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#0F172A] hidden lg:block" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-r from-[#F8F9FB] via-[#F8F9FB]/95 to-transparent hidden lg:block z-10" />

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 relative z-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#921D44]/10 border border-[#921D44]/20 text-[#921D44] text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
              Empowering Indian SMEs Since 2017
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-[#0F172A] leading-[1.1] mb-8">
              Thrive in the{" "}
              <span className="text-[#921D44] block">Digital Revolution</span>
            </h1>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed max-w-xl text-justify">
              In today's rapidly evolving business landscape, small and medium
              enterprises (SMEs) in India face unprecedented challenges and
              opportunities. The digital revolution has transformed how
              businesses operate, compete, and connect with customers.
            </p>
            <div className="flex flex-wrap gap-5">
              <a
                href="#contact"
                className="px-10 py-5 bg-[#921D44] text-white font-bold rounded shadow-xl hover:bg-[#0F172A] transition-all flex items-center gap-2 uppercase tracking-widest text-xs"
              >
                START YOUR JOURNEY <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-[12px] border-white relative z-10">
              <Image
                src="/hero-bg.jpg"
                alt="Acrisius Strategy"
                width={800}
                height={600}
                className="object-cover h-[500px]"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#921D44] rounded-full -z-10 blur-2xl opacity-20" />
          </div>
        </div>
      </section>

      {/* THE FOUNDATION & CORPORATE PEDIGREE */}
      <section id="about" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Image
                  src="/about-1.jpg"
                  alt="Acrisius Team"
                  width={300}
                  height={400}
                  className="rounded-2xl shadow-lg border border-slate-100"
                />
                <Image
                  src="/about-2.jpg"
                  alt="Corporate Strategy"
                  width={300}
                  height={300}
                  className="rounded-2xl shadow-lg border border-slate-100"
                />
              </div>
              <div className="pt-12 text-center">
                <Image
                  src="/about-3.jpg"
                  alt="Executive Meeting"
                  width={300}
                  height={500}
                  className="rounded-2xl shadow-lg border border-slate-100"
                />
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="text-[#921D44] font-bold tracking-[0.4em] text-[12px] uppercase">
                Our Foundation
              </h2>
              <h3 className="text-4xl font-extrabold leading-tight text-[#0F172A]">
                Established in 2017 to cater to small and medium enterprises
              </h3>
              <p className="text-slate-600 leading-relaxed text-justify">
                Acrisius was founded by by Kalyanmay Bhattacharya & his
                experienced Associates from a powerful vision: to democratize
                access to world-class market research, digital marketing, and
                corporate tax planning for Indian SMEs. Based in Kolkata, the
                commercial heart of Eastern India, we serve as trusted partners
                seeking sustainable growth.
              </p>
              <div className="bg-[#F8F9FA] p-8 rounded-3xl border-l-8 border-[#921D44] italic font-medium">
                "We don't offer theoretical frameworks that look impressive on
                paper. Instead, we provide actionable strategies grounded in
                real-world experience and tailored to the unique realities of
                Indian SMEs."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARKET RESEARCH COMPASS */}
      <section id="services" className="py-32 bg-[#F0F4F8]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 space-y-8">
            <div className="mb-6 p-4 bg-white inline-block rounded-2xl shadow-sm text-[#921D44]">
              <Search size={40} />
            </div>
            <h2 className="text-4xl font-extrabold text-[#0F172A]">
              Market Research: The Foundation of Informed Decisions
            </h2>
            <p className="text-slate-600 leading-relaxed text-justify">
              Market research serves as the compass that guides strategic
              decisions, helping businesses understand their customers, identify
              emerging opportunities, and stay ahead of industry trends. It
              creates a culture of evidence-based thinking and reduces the risk
              of costly mistakes.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 text-xs font-black uppercase tracking-widest text-[#0F172A]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="text-[#921D44]" size={18} /> Consumer
                Behavior
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="text-[#921D44]" size={18} /> Untapped
                Segments
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="text-[#921D44]" size={18} /> Competitor
                Analysis
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="text-[#921D44]" size={18} /> Pricing
                Strategy
              </li>
            </ul>
          </div>
          <div className="lg:w-1/2">
            <Image
              src="/market-research.jpg"
              alt="Strategic Research"
              width={800}
              height={600}
              className="rounded-[3rem] border-[15px] border-white shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* DIGITAL MARKETING AMPLIFICATION */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-[#921D44] font-bold tracking-[0.4em] text-[12px] uppercase mb-4">
              Amplification
            </h2>
            <h3 className="text-4xl font-extrabold text-[#0F172A]">
              Digital Marketing: Amplifying Your Business Voice
            </h3>
            <p className="mt-6 text-slate-500 italic">
              With over 700 million internet users in India, the online space
              represents an unprecedented opportunity for SMEs.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Image
              src="/digital-marketing.jpg"
              alt="Acrisius Marketing"
              width={800}
              height={600}
              className="rounded-[3rem] shadow-2xl"
            />
            <div className="space-y-6 text-slate-600 leading-relaxed text-justify">
              <p>
                Digital marketing helps businesses build brand awareness,
                generate qualified leads, and drive conversions—all while
                providing measurable results and return on investment. Whether
                it's search engine optimization, social media marketing, or
                content marketing, each channel offers unique advantages.
              </p>
              <div className="grid grid-cols-3 gap-4 py-6">
                <div className="p-6 bg-slate-50 rounded-2xl border-b-4 border-[#921D44] text-center">
                  <Globe className="mx-auto text-[#921D44] mb-2" />
                  <span className="text-[9px] font-black uppercase">SEO</span>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border-b-4 border-[#921D44] text-center">
                  <Layers className="mx-auto text-[#921D44] mb-2" />
                  <span className="text-[9px] font-black uppercase">
                    Content
                  </span>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border-b-4 border-[#921D44] text-center">
                  <TrendingUp className="mx-auto text-[#921D44] mb-2" />
                  <span className="text-[9px] font-black uppercase">Ads</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORPORATE TAX PLANNING */}
      <section className="py-32 bg-[#0F172A] text-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <Calculator className="text-[#921D44]" size={48} />
            <h2 className="text-4xl font-extrabold leading-tight text-white">
              Corporate Tax Planning: Protecting Your Profits
            </h2>
            <p className="text-slate-400 leading-relaxed text-justify">
              Strategic corporate tax planning is about ensuring your business
              remains fully compliant while legitimately minimizing tax burden
              and maximizing available benefits. We help structure operations
              efficiently to leverage deductions and avoid legal complications.
            </p>
          </div>
          <div className="relative">
            <Image
              src="/tax-planning.jpg"
              alt="Acrisius Tax Planning"
              width={800}
              height={600}
              className="rounded-[3rem] shadow-2xl border border-white/5"
            />
          </div>
        </div>
      </section>

      {/* PAY AS YOU GROW COMMITMENT */}
      <section className="py-32 bg-[#921D44] text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8 italic">
            'Pay As You Grow'
          </h2>
          <p className="text-xl mb-12 font-bold opacity-90 max-w-3xl mx-auto leading-relaxed">
            We recognize that SMEs operate with limited budgets. Our fees are
            nominal compared to traditional consulting firms—we scale as you
            grow.
          </p>
          <div className="flex flex-wrap justify-center gap-12 text-xs font-black uppercase tracking-[0.4em]">
            <span className="flex items-center gap-2 underline decoration-white/30 underline-offset-8">
              <CheckCircle2 size={18} /> Scalable
            </span>
            <span className="flex items-center gap-2 underline decoration-white/30 underline-offset-8">
              <CheckCircle2 size={18} /> Nominal Fees
            </span>
            <span className="flex items-center gap-2 underline decoration-white/30 underline-offset-8">
              <CheckCircle2 size={18} /> Actionable
            </span>
          </div>
        </div>
      </section>

      {/* CONTACT & GLOBAL OUTREACH */}
      <section id="contact" className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-[#921D44] font-bold tracking-[0.4em] text-[12px] uppercase mb-4 text-justify">
              Contact Acrisius
            </h2>
            <h3 className="text-5xl font-extrabold text-[#0F172A] mb-8">
              Your Partner in Kolkata and Beyond
            </h3>
            <p className="text-slate-500 mb-12 leading-relaxed text-justify">
              Whether you are a startup looking to establish presence or an
              established SME aiming to modernize, we bring metropolitan-level
              expertise to you. Let's grow together.
            </p>
            <div className="space-y-8 font-bold">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center text-[#921D44] transition-all group-hover:bg-[#921D44] group-hover:text-white shadow-sm">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">
                    Email Inquiry
                  </p>
                  <p className="text-lg">kalyanmay@outlook.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center text-[#921D44] transition-all group-hover:bg-[#921D44] group-hover:text-white shadow-sm">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">
                    Direct Dial
                  </p>
                  <p className="text-lg">+91 98318 40160</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#0F172A] p-12 lg:p-16 rounded-[4rem] shadow-2xl relative border-t-8 border-[#921D44]">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FINAL FOOTER */}
      <footer className="py-20 bg-[#F8F9FA] border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex justify-center gap-2 mb-8">
            <div className="w-8 h-8 rounded flex items-center justify-center shadow-lg">
              <Image
                src="/logo.png"
                alt="Acrisius Logo"
                width={20}
                height={20}
              />
            </div>
            <span className="font-black tracking-tighter uppercase text-[#0F172A]">
              Acrisius
            </span>
          </div>
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.5em]">
            © {new Date().getFullYear()} Acrisius Consulting Pvt Ltd. •
            KOLKATA
          </p>
        </div>
      </footer>
    </div>
  );
}
