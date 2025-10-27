"use client"

import { useState } from "react"
import { Upload, FileJson, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function UploadPage() {
  const [dragActive, setDragActive] = useState(false)

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Upload Data</h1>
        <p className="text-muted-foreground">
          Upload transaction data, chat exports, or mobile wallet records to generate your credit score.
        </p>
      </div>

      {/* Upload Area */}
      <div
        className="bg-white rounded-2xl border-2 border-dashed border-border p-12 text-center hover:border-primary transition-colors cursor-pointer"
        onDragEnter={() => setDragActive(true)}
        onDragLeave={() => setDragActive(false)}
      >
        <Upload size={48} className="mx-auto mb-4 text-primary opacity-50" />
        <h3 className="text-lg font-semibold text-foreground mb-2">Drag and drop your files here</h3>
        <p className="text-muted-foreground mb-4">or click to browse</p>
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <FileJson size={16} />
          <span>JSON</span>
          <span className="text-border">•</span>
          <FileText size={16} />
          <span>CSV</span>
        </div>
      </div>

      {/* File Types Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl border border-border p-6">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
            <FileJson size={20} className="text-primary" />
          </div>
          <h4 className="font-semibold text-foreground mb-2">Transaction Data</h4>
          <p className="text-sm text-muted-foreground">Upload your transaction history in JSON or CSV format</p>
        </div>

        <div className="bg-white rounded-xl border border-border p-6">
          <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-3">
            <FileText size={20} className="text-secondary" />
          </div>
          <h4 className="font-semibold text-foreground mb-2">Chat Exports</h4>
          <p className="text-sm text-muted-foreground">Export WhatsApp Business or chat conversations</p>
        </div>

        <div className="bg-white rounded-xl border border-border p-6">
          <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
            <Upload size={20} className="text-accent" />
          </div>
          <h4 className="font-semibold text-foreground mb-2">Mobile Wallet</h4>
          <p className="text-sm text-muted-foreground">Connect your mobile wallet for real-time data</p>
        </div>
      </div>

      {/* Sample Data */}
      <div className="bg-primary/5 rounded-xl border border-primary/20 p-6">
        <h4 className="font-semibold text-foreground mb-3">Need sample data?</h4>
        <p className="text-sm text-muted-foreground mb-4">Download our sample files to see the expected format</p>
        <div className="flex gap-3">
          <Button variant="outline">Download Sample CSV</Button>
          <Button variant="outline">Download Sample JSON</Button>
        </div>
      </div>
    </div>
  )
}
