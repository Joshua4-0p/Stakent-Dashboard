"use client"

import { TrendingUp, TrendingDown, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MiniChart } from "@/components/mini-chart"

const stakingAssets = [
  {
    id: "eth",
    name: "Ethereum (ETH)",
    icon: "🔷",
    proofOfStake: true,
    rewardRate: "13.62%",
    change: "+6.25%",
    trending: "up",
    color: "blue",
    chartData: [12, 15, 13, 18, 16, 20, 17, 19, 15, 18, 16, 14],
  },
  {
    id: "bnb",
    name: "BNB Chain",
    icon: "🟡",
    proofOfStake: true,
    rewardRate: "12.72%",
    change: "+5.67%",
    trending: "up",
    color: "yellow",
    chartData: [10, 12, 14, 11, 15, 13, 16, 14, 17, 15, 18, 16],
  },
  {
    id: "matic",
    name: "Polygon (Matic)",
    icon: "🟣",
    proofOfStake: true,
    rewardRate: "6.29%",
    change: "-1.89%",
    trending: "down",
    color: "purple",
    chartData: [8, 10, 9, 7, 6, 8, 7, 5, 6, 7, 5, 4],
  },
]

export function StakingAssets() {
  return (
    <div className="space-y-4 lg:space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 lg:mb-2">Top Staking Assets</h1>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-400">
            <span>Recommended coins for 24 hours ℹ️</span>
            <Badge variant="secondary" className="bg-gray-800 text-gray-300 w-fit">
              3 Assets
            </Badge>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-400 hover:text-white text-xs sm:text-sm min-h-[36px] sm:min-h-[40px]"
          >
            📊 24H
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-400 hover:text-white text-xs sm:text-sm min-h-[36px] sm:min-h-[40px]"
          >
            🛡️ Proof of Stake
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-400 hover:text-white text-xs sm:text-sm min-h-[36px] sm:min-h-[40px]"
          >
            📈 Desc
          </Button>
        </div>
      </div>

      {/* Assets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
        {stakingAssets.map((asset) => (
          <Card
            key={asset.id}
            className="bg-gray-900/50 border-gray-800 hover:bg-gray-900/70 transition-all duration-300 group"
          >
            <CardContent className="p-4 sm:p-5 lg:p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-3 sm:mb-4">
                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-800 flex items-center justify-center text-base sm:text-lg flex-shrink-0">
                    {asset.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 text-xs">Proof of Stake</span>
                    </div>
                    <h3 className="text-white font-medium text-sm sm:text-base truncate">{asset.name}</h3>
                  </div>
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity min-h-[36px] min-w-[36px] flex-shrink-0"
                >
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                </Button>
              </div>

              {/* Reward Rate */}
              <div className="mb-3 sm:mb-4">
                <p className="text-gray-400 text-xs mb-1">Reward Rate</p>
                <div className="flex items-center gap-2">
                  <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">{asset.rewardRate}</span>
                  <div
                    className={`flex items-center gap-1 text-xs ${
                      asset.trending === "up" ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {asset.trending === "up" ? (
                      <TrendingUp className="w-3 h-3" />
                    ) : (
                      <TrendingDown className="w-3 h-3" />
                    )}
                    <span>{asset.change}</span>
                  </div>
                </div>
              </div>

              {/* Mini Chart */}
              <div className="h-16 sm:h-20">
                <MiniChart data={asset.chartData} color={asset.color} trending={asset.trending} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
