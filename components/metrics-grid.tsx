"use client"

import { Card, CardContent } from "@/components/ui/card"

export function MetricsGrid() {
  return (
    <div className="space-y-4">
      {/* Additional metrics or charts can be added here */}
      <Card className="bg-gray-900/50 border-gray-800">
        <CardContent className="p-6">
          <div className="text-center text-gray-400">
            <p className="text-sm">Additional metrics coming soon...</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
