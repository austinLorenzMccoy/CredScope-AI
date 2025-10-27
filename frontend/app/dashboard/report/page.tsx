"use client"

import { AlertCircle, CheckCircle } from "lucide-react"

export default function ReportPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Credit Report</h1>
        <p className="text-muted-foreground">Your detailed AI-generated credit analysis and recommendations</p>
      </div>

      {/* Score Overview */}
      <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl border border-primary/20 p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-primary mb-2">84</div>
            <p className="text-muted-foreground">CredScore</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-2">Low</div>
            <p className="text-muted-foreground">Risk Level</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">89%</div>
            <p className="text-muted-foreground">Confidence</p>
          </div>
        </div>
      </div>

      {/* Key Factors */}
      <div className="bg-white rounded-2xl border border-border p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Key Factors</h3>
        <div className="space-y-4">
          {[
            { label: "Transaction Consistency", value: 92, color: "bg-secondary" },
            { label: "Customer Sentiment", value: 87, color: "bg-primary" },
            { label: "Payment History", value: 95, color: "bg-accent" },
            { label: "Business Stability", value: 78, color: "bg-secondary" },
          ].map((factor, i) => (
            <div key={i}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-foreground">{factor.label}</span>
                <span className="text-sm font-semibold text-primary">{factor.value}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className={`${factor.color} h-2 rounded-full transition-all`}
                  style={{ width: `${factor.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommendations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-green-50 rounded-xl border border-green-200 p-6">
          <div className="flex items-start gap-3">
            <CheckCircle size={24} className="text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-green-900 mb-2">Strengths</h4>
              <ul className="text-sm text-green-800 space-y-1">
                <li>• Consistent transaction patterns</li>
                <li>• High customer satisfaction</li>
                <li>• Strong payment discipline</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 rounded-xl border border-amber-200 p-6">
          <div className="flex items-start gap-3">
            <AlertCircle size={24} className="text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-amber-900 mb-2">Areas to Improve</h4>
              <ul className="text-sm text-amber-800 space-y-1">
                <li>• Increase transaction volume</li>
                <li>• Diversify revenue streams</li>
                <li>• Maintain consistent growth</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* AI Insights */}
      <div className="bg-white rounded-2xl border border-border p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">AI Insights</h3>
        <div className="prose prose-sm max-w-none text-muted-foreground">
          <p>
            Based on analysis of your transaction history, customer interactions, and behavioral patterns, CredScope AI
            has determined that you represent a <strong className="text-primary">low-risk</strong> credit profile. Your
            consistent weekly sales pattern, combined with 92% positive customer sentiment, indicates strong business
            stability and reliability.
          </p>
          <p className="mt-4">
            The model identified that your repeat customer ratio of 78% is a significant positive indicator, suggesting
            customer satisfaction and business sustainability. We recommend maintaining this momentum while exploring
            opportunities to diversify your revenue streams.
          </p>
        </div>
      </div>
    </div>
  )
}
