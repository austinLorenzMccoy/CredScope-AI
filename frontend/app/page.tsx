"use client"

import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Zap, Shield, Eye, BarChart3, CheckCircle2, Lock, Globe, Coins } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-primary/5 to-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          {/* Abstract AI Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,30,150,0.3),transparent_40%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(0,197,142,0.3),transparent_40%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,200,87,0.2),transparent_50%)]" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/95" />
          <div className="absolute top-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl opacity-60 animate-pulse" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-60 animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl opacity-40" />
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 border border-primary/20">
            <Zap size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">AI-Powered Credit Scoring</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Invisible Credit,{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Visible Trust
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            CredScope AI transforms informal digital activity into reliable, explainable credit insights with compliant on-chain trust credentials. Empowering
            financial inclusion for millions of underbanked SMEs across Africa.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <Link href="/signup" className="flex items-center gap-2">
                Get Started <ArrowRight size={18} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#features">Learn More</Link>
            </Button>
          </div>

          {/* Dashboard Mockup */}
          <div className="relative group mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl border border-border/50 p-4 shadow-2xl hover:shadow-primary/10 transition-all duration-300 overflow-hidden">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
                <Image
                  src="https://media.istockphoto.com/id/1200726951/photo/credit-score-rating-based-on-debt-reports-showing-creditworthiness-or-risk-of-individuals-for.jpg?s=612x612&w=0&k=20&c=ytsXTGtBg0cdpVxKrxl2tVnrQBj0aK1kAU979a1yPqQ="
                  alt="Credit Score Dashboard"
                  fill
                  className="object-cover"
                  loading="eager"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl border border-border/50 p-8 shadow-2xl hover:shadow-primary/10 transition-all duration-300">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center group/stat hover:scale-105 transition-transform duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/70 mb-3 shadow-lg shadow-primary/30">
                    <span className="text-2xl font-bold text-white">84</span>
                  </div>
                  <p className="text-sm font-medium text-muted-foreground">Average CredScore</p>
                </div>
                <div className="text-center group/stat hover:scale-105 transition-transform duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-secondary/70 mb-3 shadow-lg shadow-secondary/30">
                    <span className="text-2xl font-bold text-white">2M+</span>
                  </div>
                  <p className="text-sm font-medium text-muted-foreground">Transactions Analyzed</p>
                </div>
                <div className="text-center group/stat hover:scale-105 transition-transform duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent/70 mb-3 shadow-lg shadow-accent/30">
                    <span className="text-2xl font-bold text-white">99%</span>
                  </div>
                  <p className="text-sm font-medium text-muted-foreground">Accuracy Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Why CredScope AI?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powered by Groq AI, Compliant Blockchain, and Explainable AI — designed for African financial inclusion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Eye,
                title: "Compliant Trust Credentials",
                description:
                  "Mint portable, utility-token credit identities on Polygon ID/Stacks Private (non-tradable, CBN sandbox approved). Your credit score travels with you.",
              },
              {
                icon: Shield,
                title: "AI Fairness Dashboard",
                description:
                  "Bias detection and audit tools for regulators. Every credit decision is transparent with SHAP explanations and fairness metrics.",
              },
              {
                icon: Zap,
                title: "Licensed Stablecoin Rewards",
                description:
                  "Earn fiat-backed USDC/NGN-token rewards for sharing anonymized data. Licensed, audited, and compliant with CBN regulations.",
              },
            ].map((feature, i) => {
              const Icon = feature.icon
              const colors = [
                { bg: 'bg-primary/10', icon: 'text-primary', border: 'border-primary/20', shadow: 'hover:shadow-primary/20' },
                { bg: 'bg-secondary/10', icon: 'text-secondary', border: 'border-secondary/20', shadow: 'hover:shadow-secondary/20' },
                { bg: 'bg-accent/10', icon: 'text-accent', border: 'border-accent/20', shadow: 'hover:shadow-accent/20' }
              ]
              const color = colors[i]
              return (
                <div key={i} className={`group p-8 rounded-2xl border ${color.border} bg-white hover:shadow-2xl ${color.shadow} transition-all duration-300 hover:-translate-y-2`}>
                  <div className={`w-14 h-14 rounded-xl ${color.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={28} className={color.icon} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Compliance & Technology Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-primary/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full mb-6 border border-secondary/20">
              <CheckCircle2 size={16} className="text-secondary" />
              <span className="text-sm font-medium text-secondary">Nigerian Compliance Ready</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Built for Compliance & Scale</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              CredScope AI meets Nigerian regulatory standards while delivering cutting-edge technology
            </p>
          </div>

          {/* Compliance Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="p-6 rounded-2xl border border-primary/20 bg-white hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Lock size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">KYC/AML Integration</h3>
                  <p className="text-muted-foreground mb-3">CBN-licensed aggregators (VerifyMe, SmileID) + Chainalysis KYT for risk monitoring</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">VerifyMe API</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">SmileID</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Chainalysis</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-secondary/20 bg-white hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Globe size={24} className="text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Permissioned Blockchain</h3>
                  <p className="text-muted-foreground mb-3">Utility tokens (non-tradable) on Polygon ID / Stacks Private Chain - CBN sandbox approved</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs rounded-full">Polygon ID</span>
                    <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs rounded-full">Stacks Private</span>
                    <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs rounded-full">Zero-Knowledge</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-accent/20 bg-white hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Coins size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Licensed Stablecoin Rewards</h3>
                  <p className="text-muted-foreground mb-3">Fiat-backed USDC/NGN-token via audited Nigerian partners with bank custodianship</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full">USDC</span>
                    <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full">NGN-Token</span>
                    <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full">Fiat-Backed</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-primary/20 bg-white hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Shield size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Data Protection</h3>
                  <p className="text-muted-foreground mb-3">NDPA compliant with federated learning, anonymization, and full audit logs for SEC/CBN</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">NDPA</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Federated ML</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Audit Ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 border border-border/50">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Technology Stack</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "Groq API", desc: "<100ms inference" },
                { name: "FastAPI", desc: "Python backend" },
                { name: "PostgreSQL", desc: "Data storage" },
                { name: "Polygon ID", desc: "Trust credentials" },
                { name: "TensorFlow", desc: "Federated ML" },
                { name: "SHAP/LIME", desc: "Explainable AI" },
                { name: "VerifyMe", desc: "KYC/AML" },
                { name: "Chainalysis", desc: "Risk monitoring" },
              ].map((tech, i) => (
                <div key={i} className="p-4 bg-white rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                  <p className="font-semibold text-foreground mb-1">{tech.name}</p>
                  <p className="text-xs text-muted-foreground">{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,30,150,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,197,142,0.1),transparent_50%)]" />
        
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full mb-6 border border-secondary/20">
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-sm font-medium text-secondary">Limited Time Offer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Ready to unlock credit access?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of African SMEs getting fair, AI-powered credit scores with blockchain-verified trust credentials. Helping banks finance the unseen.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all">
              <Link href="/signup" className="flex items-center gap-2">
                Start Your Free Trial <ArrowRight size={18} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2">
              <Link href="#features">View Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-white/50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-foreground mb-4">CredScope AI</h3>
              <p className="text-sm text-muted-foreground">Invisible Credit. Visible Trust.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8">
            <div className="flex flex-col items-center gap-4 mb-6">
              <p className="text-xs text-muted-foreground">Proudly built for</p>
              <a 
                href="https://www.zenithbank.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 rounded-lg border border-border bg-white hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-700 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">Z</span>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">Zenith Bank</div>
                    <div className="text-xs text-muted-foreground">Zecathon 5.0 Hackathon</div>
                  </div>
                </div>
              </a>
            </div>
            <p className="text-center text-sm text-muted-foreground">© 2025 CredScope AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
