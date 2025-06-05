"use client"

import { useState } from "react"
import {
  LayoutDashboard,
  Coins,
  Building2,
  Calculator,
  Database,
  Droplets,
  TrendingUp,
  Zap,
  ChevronRight,
  ChevronDown,
  X,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface SidebarProps {
  collapsed: boolean
  onToggle: () => void
  onMobileToggle?: () => void
  isMobile?: boolean
}

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Coins, label: "Assets" },
  { icon: Building2, label: "Staking Providers" },
  { icon: Calculator, label: "Staking Calculator" },
  { icon: Database, label: "Data API", external: true },
  { icon: Droplets, label: "Liquid Staking", badge: "Beta" },
  { icon: TrendingUp, label: "Active Staking", badge: "6", expandable: true },
]

const activeStakings = [
  { icon: "🔷", label: "Asset Ethereum", amount: "$7,699.00" },
  { icon: "🔺", label: "Asset Avalanche", amount: "$1,340.00" },
  { icon: "🟣", label: "Asset Polygon (Matic)", amount: "$540.00" },
  { icon: "🟡", label: "Asset Solana", amount: "$1,200.00" },
]

export function Sidebar({ collapsed, onToggle, onMobileToggle, isMobile }: SidebarProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>(["Active Staking"])

  const toggleExpanded = (label: string) => {
    setExpandedItems((prev) => (prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]))
  }

  const sidebarWidth = collapsed ? "w-16" : "w-64 mobile-l:w-72 lg:w-80"

  return (
    <div
      className={cn(
        "bg-[#0f1015] border-r border-gray-800 transition-all duration-300 flex flex-col h-full",
        isMobile ? "w-64 mobile-l:w-72" : sidebarWidth,
        "overflow-y-auto"
      )}
    >
      {/* Header */}
      <div className="p-3 sm:p-4 border-b border-gray-800 flex-shrink-0">
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Mobile Close Button */}
          {isMobile && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onMobileToggle}
              className="text-gray-400 hover:text-white min-h-[44px] min-w-[44px] lg:hidden"
            >
              <X className="w-5 h-5" />
            </Button>
          )}

          <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="sm:w-4 sm:h-4"
            >
              <path d="M2 2H8V8H2V2Z" fill="#000" />
              <path d="M8 2H14V8H8V2Z" fill="#000" />
              <path d="M2 8H8V14H2V8Z" fill="#000" />
              <path d="M8 8H14V14H8V8Z" fill="#000" />
            </svg>
          </div>

          {(!collapsed || isMobile) && (
            <div className="min-w-0 flex-1">
              <h1 className="text-white font-semibold flex items-center text-sm sm:text-base">
                Stakent
                <span className="text-xs align-top ml-0.5">®</span>
              </h1>
              <p className="text-gray-400 text-xs truncate">
                Top Staking Assets
              </p>
            </div>
          )}

          {!isMobile && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onToggle}
              className="text-gray-400 hover:text-white min-h-[44px] min-w-[44px] flex-shrink-0"
            >
              <ChevronDown
                className={cn(
                  "w-4 h-4 transition-transform",
                  collapsed && "rotate-180"
                )}
              />
            </Button>
          )}
        </div>
      </div>

      {/* Navigation Tabs */}
      {(!collapsed || isMobile) && (
        <div className="p-3 sm:p-4 border-b border-gray-800 flex-shrink-0">
          <div className="flex bg-gray-800/50 rounded-lg p-1">
            <button className="flex-1 py-2 px-2 sm:px-3 bg-gray-700 text-white rounded-md text-xs sm:text-sm font-medium transition-colors">
              Staking
            </button>
            <button className="flex-1 py-2 px-2 sm:px-3 text-gray-400 rounded-md text-xs sm:text-sm font-medium hover:text-white transition-colors">
              Stablecoin
            </button>
          </div>
        </div>
      )}

      {/* Menu Items */}
      <nav className="flex-1 p-3 sm:p-4 space-y-1 overflow-y-auto">
        {menuItems.map((item) => (
          <div key={item.label}>
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start gap-2 sm:gap-3 h-10 sm:h-12 px-2 sm:px-3 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors text-xs sm:text-sm",
                item.active && "bg-gray-800 text-white",
                collapsed && !isMobile && "justify-center px-0"
              )}
              onClick={() => item.expandable && toggleExpanded(item.label)}
            >
              <item.icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              {(!collapsed || isMobile) && (
                <>
                  <span className="flex-1 text-left truncate">
                    {item.label}
                  </span>
                  {item.badge && (
                    <span
                      className={cn(
                        "px-3 py-1 rounded-md text-xs font-medium flex-shrink-0 bg-gradient-to-r from-[#afa7ea] to-[#918EDF]",
                        item.badge === "Beta"
                          ? "bg-purple-500/20 text-black"
                          : "bg-gray-700 text-black"
                      )}
                    >
                      {item.badge}
                    </span>
                  )}
                  {item.expandable && (
                    <ChevronRight
                      className={cn(
                        "w-3 h-3 sm:w-4 sm:h-4 transition-transform flex-shrink-0",
                        expandedItems.includes(item.label) && "rotate-90"
                      )}
                    />
                  )}
                </>
              )}
            </Button>

            {/* Expanded Active Stakings */}
            {item.expandable &&
              expandedItems.includes(item.label) &&
              (!collapsed || isMobile) && (
                <div className="ml-6 sm:ml-8 mt-2 space-y-1 sm:space-y-2">
                  {activeStakings.map((staking) => (
                    <div
                      key={staking.label}
                      className="flex items-center gap-2 sm:gap-3 py-2 px-2 sm:px-3 rounded-lg hover:bg-gray-800/30 transition-colors"
                    >
                      <span className="text-base sm:text-lg flex-shrink-0">
                        {staking.icon}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs sm:text-sm text-gray-300 truncate">
                          {staking.label}
                        </p>
                        <p className="text-xs text-gray-500">
                          Amount {staking.amount}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
          </div>
        ))}
      </nav>

      {/* Activate Super */}
      <div className="p-3 mobile-l:p-4 border-t border-gray-800 flex-shrink-0">
        <div
          className={cn(
            "bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-3 text-center",
            collapsed && !isMobile ? "p-2" : "mobile-l:p-4"
          )}
        >
          {(!collapsed || isMobile) && (
            <>
              <Zap className="w-5 h-5 mobile-l:w-6 mobile-l:h-6 text-white mx-auto mb-2" />
              <h3 className="text-white font-semibold text-xs mobile-l:text-sm mb-1">
                Activate Super
              </h3>
              <p className="text-purple-100 text-xs">
                Unlock all features on Stakent
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
