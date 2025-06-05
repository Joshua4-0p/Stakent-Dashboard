"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Wallet, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

interface RightSidebarProps {
  className?: string;
}

export function RightSidebar({ className }: RightSidebarProps) {
  const [investmentPeriod, setInvestmentPeriod] = useState([6]);

  return (
    <div
      className={cn(
        "w-full xl:w-80 p-4 space-y-4 overflow-y-auto max-h-[calc(100vh-120px)]",
        "mobile-l:space-y-4 md:space-y-6",
        className
      )}
    >
      {/* Stakent Logo Card */}
      <Card className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 border-purple-500/30">
        <CardContent className="p-4 mobile-l:p-5 sm:p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <div>
              <h3 className="text-white font-semibold">Stakent</h3>
              <Badge className="bg-purple-500/20 text-purple-300 text-xs mt-1">
                New
              </Badge>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-white font-medium mb-2">
                Liquid Staking Portfolio
              </h4>
              <p className="text-gray-400 text-sm">
                An all-in-one portfolio that helps you make smarter investments
                into Ethereum Liquid Staking
              </p>
            </div>

            <div className="space-y-3 flex flex-col">
              <Button className="w-full bg-[#A29AE0] hover:bg-[#918EDF] text-black flex items-center justify-center gap-2 min-h-[48px] text-sm">
                <Wallet className="w-4 h-4 flex-shrink-0" />
                <span>Connect with Wallet</span>
              </Button>
              <Button
                variant="outline"
                className={cn(
                  "w-full",
                  "border border-white/50", // ← white outline at 50% opacity
                  "text-white", // ← white text
                  "hover:bg-white/10", // ← white background at 10% opacity on hover
                  "flex items-center justify-center gap-2",
                  "min-h-[48px]",
                  "text-sm",
                  "mt-2"
                )}
              >
                <Lock className="w-4 h-4 flex-shrink-0 text-white" />
                <span className="whitespace-nowrap">
                  Enter a Wallet Address
                </span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Investment Period */}
      <Card className="bg-gray-900/50 border-gray-800">
        <CardHeader className="pb-4">
          <div className="flex flex-col mobile-l:flex-row mobile-l:items-center justify-between gap-3">
            <CardTitle className="text-white text-lg">
              Investment Period
            </CardTitle>
            <div className="flex gap-2">
              <Badge
                variant={investmentPeriod[0] === 6 ? "default" : "secondary"}
                className={cn(
                  "cursor-pointer min-h-[36px] px-3",
                  investmentPeriod[0] === 6
                    ? "bg-purple-600 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                )}
                onClick={() => setInvestmentPeriod([6])}
              >
                6 Month
              </Badge>
              <Badge
                variant={investmentPeriod[0] === 4 ? "default" : "secondary"}
                className={cn(
                  "cursor-pointer min-h-[36px] px-3",
                  investmentPeriod[0] === 4
                    ? "bg-purple-600 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                )}
                onClick={() => setInvestmentPeriod([4])}
              >
                4 Month
              </Badge>
            </div>
          </div>
          <p className="text-gray-400 text-sm">Contribution Period (Month)</p>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Slider */}
          <div className="space-y-4">
            <Slider
              value={investmentPeriod}
              onValueChange={setInvestmentPeriod}
              max={12}
              min={1}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-400">
              <span>1M</span>
              <span>6M</span>
              <span>12M</span>
            </div>
          </div>

          {/* Period Indicator */}
          <div className="flex items-center justify-center">
            <div className="bg-gray-800 rounded-full px-4 py-2">
              <span className="text-white font-medium">
                {investmentPeriod[0]}M
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
