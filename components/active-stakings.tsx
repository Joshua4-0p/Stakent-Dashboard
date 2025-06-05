"use client"

import { useState } from "react"
import { ExternalLink, Copy, RefreshCw, Clock, LineChart, SlidersHorizontal, ChevronDown } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MetricsChart } from "@/components/metrics-chart"
// import { MiniMetricCard } from "@/components/mini-metric";
import { cn } from "@/lib/utils";

export function ActiveStakings() {
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({
    momentum: false,
    general: false,
    risk: false,
    reward: false,
  });

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <Card className="bg-gray-900/50 border-gray-800 rounded-xl">
      <CardHeader className="pb-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <CardTitle className="text-white text-lg font-semibold">
              Your active stakings
            </CardTitle>
            <p className="text-gray-400 text-sm mt-1">
              Last Update - 45 minutes ago
            </p>
          </div>

          <div className="flex items-center gap-1 sm:gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-white min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto"
            >
              <LineChart className="w-4 h-4 sm:w-4 sm:h-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-white min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto"
            >
              <Clock className="w-4 h-4 sm:w-4 sm:h-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-white min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto"
            >
              <RefreshCw className="w-4 h-4 sm:w-4 sm:h-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-white min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto"
            >
              <SlidersHorizontal className="w-4 h-4 sm:w-4 sm:h-4" />
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Stake Avalanche Section */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-base">A</span>
              </div>
              <div className="min-w-0">
                <h3 className="text-white font-semibold text-base">
                  Stake Avalanche (AVAX)
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-8 h-8 p-0 text-gray-400 hover:text-white"
                  >
                    <Copy className="w-3 h-3" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-8 h-8 p-0 text-gray-400 hover:text-white"
                  >
                    <ExternalLink className="w-3 h-3" />
                  </Button>
                  <Button
                    variant="ghost"
                    className="text-purple-400 hover:text-purple-300 text-xs h-6 px-2 mt-1"
                  >
                    View Profile 🔗
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Current Reward Balance */}
          <div>
            <p className="text-gray-400 text-sm mb-1">
              Current Reward Balance: AVAX
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
              <span className="text-3xl font-bold text-white">31.39686</span>
              <div className="flex gap-3">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 text-sm h-10">
                  Upgrade
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:text-white px-4 py-2 text-sm h-10"
                >
                  Unstake
                </Button>
              </div>
            </div>
          </div>

          {/* Metrics Sections */}
          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <MiniMetricCard
              title="Staked Tokens Trend"
              value="-0.82%"
              change="1.09%"
              negative
            />
            <MiniMetricCard
              title="Price"
              value="$41.99"
              change="1.09%"
              negative
            />
            <MiniMetricCard title="Staking Ratio" value="60.6%" />
            <MiniMetricCard title="Reward Rate" value="2.23%" change="1.46%" />
          </div>

          {/* Expandable Sections */}
          {["Momentum", "General", "Risk", "Reward"].map((section) => (
            <div
              key={section}
              className="bg-gray-900/30 rounded-xl p-4 transition-all mt-4"
            >
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleSection(section.toLowerCase())}
              >
                <div>
                  <h4 className="text-white font-medium text-base">
                    {section}
                  </h4>
                  <p className="text-gray-400 text-xs mt-1">
                    {section === "Momentum" && "Growth dynamics"}
                    {section === "General" && "Overview"}
                    {section === "Risk" && "Risk assessment"}
                    {section === "Reward" && "Expected profit"}
                  </p>
                </div>
                <ChevronDown
                  className={cn(
                    "text-gray-400 w-5 h-5 transition-transform",
                    expandedSections[section.toLowerCase()] && "rotate-180"
                  )}
                />
              </div>

              {expandedSections[section.toLowerCase()] && (
                <div className="mt-4 pt-4 border-t border-gray-800">
                  {section === "Momentum" && (
                    <div className="text-gray-300 text-sm">
                      Detailed growth metrics and analytics for your staking
                      performance...
                    </div>
                  )}
                  {section === "General" && (
                    <div className="text-gray-300 text-sm">
                      Overview of your staking portfolio and general
                      performance...
                    </div>
                  )}
                  {section === "Risk" && (
                    <div className="text-gray-300 text-sm">
                      Risk assessment and security metrics for your staked
                      assets...
                    </div>
                  )}
                  {section === "Reward" && (
                    <div className="text-gray-300 text-sm">
                      Expected profit calculations and reward projections...
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function MiniMetricCard({
  title,
  value,
  change,
  negative = false,
  className = "",
}: {
  title: string;
  value: string;
  change?: string;
  negative?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "bg-gray-900/30 rounded-xl p-4 flex flex-col items-start",
        className
      )}
    >
      <div className="flex justify-between w-full mb-2">
        <h4 className="text-gray-400 text-xs font-medium">{title}</h4>
        <span className="text-xs bg-gray-700 text-gray-300 px-2 py-0.5 rounded-full">
          24H
        </span>
      </div>

      <div className="flex items-end gap-2 w-full">
        <span
          className={cn(
            "font-bold text-xl",
            negative ? "text-red-400" : "text-white"
          )}
        >
          {value}
        </span>

        {change && (
          <span
            className={cn(
              "text-xs font-medium",
              negative ? "text-red-400" : "text-green-400"
            )}
          >
            {negative ? "↓" : "↑"} {change}
          </span>
        )}
      </div>
    </div>
  );
}