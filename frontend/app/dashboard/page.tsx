"use client"

import { BarChart3, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's your credit overview.</p>
      </div>

      {/* Score Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 bg-white rounded-2xl border border-border p-6 shadow-sm">
          <div className="text-sm text-muted-foreground mb-2">Your CredScore</div>
          <div className="flex items-end gap-4">
            <div className="relative w-24 h-24">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#e5e7eb" strokeWidth="8" />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="url(#scoreGradient)"
                  strokeWidth="8"
                  strokeDasharray={`${(84 / 100) * 283} 283`}
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B1E96" />
                    <stop offset="100%" stopColor="#00C58E" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">84</span>
              </div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Risk Level</div>
              <div className="text-lg font-semibold text-secondary">Low</div>
              <div className="text-xs text-muted-foreground mt-1">Confidence: 89%</div>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 bg-white rounded-2xl border border-border p-6 shadow-sm">
          <div className="text-sm text-muted-foreground mb-4">Top Influencers</div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-foreground">Consistent sales pattern</span>
              <span className="text-sm font-semibold text-secondary">+21</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-foreground">92% positive sentiment</span>
              <span className="text-sm font-semibold text-secondary">+18</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-foreground">Strong customer repeat rate</span>
              <span className="text-sm font-semibold text-secondary">+15</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-foreground">Transaction frequency</span>
              <span className="text-sm font-semibold text-secondary">+12</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl border border-border p-6 shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="font-semibold text-foreground mb-1">Upload New Data</h3>
              <p className="text-sm text-muted-foreground">Update your credit profile with new transactions</p>
            </div>
            <BarChart3 size={24} className="text-primary" />
          </div>
          <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white">
            <Link href="/dashboard/upload">Upload Data</Link>
          </Button>
        </div>

        <div className="bg-white rounded-2xl border border-border p-6 shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="font-semibold text-foreground mb-1">View Full Report</h3>
              <p className="text-sm text-muted-foreground">See detailed analysis and recommendations</p>
            </div>
            <TrendingUp size={24} className="text-secondary" />
          </div>
          <Button asChild variant="outline" className="w-full bg-transparent">
            <Link href="/dashboard/report">View Report</Link>
          </Button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl border border-border p-6 shadow-sm">
        <h3 className="font-semibold text-foreground mb-4">Recent Activity</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between py-3 border-b border-border last:border-0">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              <div>
                <p className="text-sm font-medium text-foreground">Score Updated</p>
                <p className="text-xs text-muted-foreground">2 hours ago</p>
              </div>
            </div>
            <span className="text-sm font-semibold text-secondary">+2</span>
          </div>
          <div className="flex items-center justify-between py-3 border-b border-border last:border-0">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <div>
                <p className="text-sm font-medium text-foreground">Data Uploaded</p>
                <p className="text-xs text-muted-foreground">1 day ago</p>
              </div>
            </div>
            <span className="text-sm text-muted-foreground">CSV</span>
          </div>
          <div className="flex items-center justify-between py-3 border-b border-border last:border-0">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <div>
                <p className="text-sm font-medium text-foreground">Account Created</p>
                <p className="text-xs text-muted-foreground">5 days ago</p>
              </div>
            </div>
            <span className="text-sm text-muted-foreground">Welcome</span>
          </div>
        </div>
      </div>
    </div>
  )
}
