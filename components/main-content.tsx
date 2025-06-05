"use client"
import { StakingAssets } from "@/components/staking-assets"
import { ActiveStakings } from "@/components/active-stakings"
import { cn } from "@/lib/utils"

interface MainContentProps {
  className?: string
}

export function MainContent({ className }: MainContentProps) {
  return (
    <main
      className={cn(
        "flex-1 overflow-auto p-4 space-y-4",
        "mobile-l:p-5 mobile-l:space-y-5",
        "sm:p-6 sm:space-y-6",
        className
      )}
    >
      <div className="animate-fade-in">
        <StakingAssets />
      </div>

      <div className="animate-fade-in">
        <ActiveStakings />
      </div>

      {/* Add spacing for mobile bottom bar */}
      <div className="h-16 md:hidden"></div>
    </main>
  );
}