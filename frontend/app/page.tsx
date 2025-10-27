"use client"

import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Zap, Shield, Eye } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-primary/5 to-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl opacity-50" />
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
            CredScope AI transforms informal digital activity into reliable, explainable credit insights. Empowering
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

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl blur-xl" />
            <div className="relative bg-white rounded-2xl border border-border p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">84</div>
                  <p className="text-sm text-muted-foreground">Average CredScore</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">2M+</div>
                  <p className="text-sm text-muted-foreground">Transactions Analyzed</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">99%</div>
                  <p className="text-sm text-muted-foreground">Accuracy Rate</p>
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
              Powered by Groq AI, Graph Neural Networks, and NLP — designed for African financial inclusion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Eye,
                title: "Alternative Data Insights",
                description:
                  "Analyze mobile money transactions, WhatsApp Business chats, and POS data to identify spending stability and customer satisfaction.",
              },
              {
                icon: Shield,
                title: "Explainable AI",
                description:
                  "Every credit decision is transparent with SHAP explanations. Understand exactly why a score was generated with detailed AI insights.",
              },
              {
                icon: Zap,
                title: "Privacy-First Design",
                description:
                  "Your data is protected with federated learning and anonymization. Trust and security by default.",
              },
            ].map((feature, i) => {
              const Icon = feature.icon
              return (
                <div key={i} className="p-6 rounded-xl border border-border bg-white hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Ready to unlock credit access?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of African SMEs getting fair, AI-powered credit scores. Helping banks finance the unseen.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
            <Link href="/signup">Start Your Free Trial</Link>
          </Button>
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
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 CredScope AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
