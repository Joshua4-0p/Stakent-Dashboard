"use client"

import { cn } from "@/lib/utils"

export function MiniMetricCard({
  title,
  value,
  change,
  negative = false,
  className = ""
}: {
  title: string;
  value: string;
  change?: string;
  negative?: boolean;
  className?: string;
}) {
  return (
    <div className={cn(
      "bg-gray-900/30 rounded-xl p-4 flex flex-col items-start",
      className
    )}>
      <div className="flex justify-between w-full mb-2">
        <h4 className="text-gray-400 text-xs font-medium">{title}</h4>
        <span className="text-xs bg-gray-700 text-gray-300 px-2 py-0.5 rounded-full">24H</span>
      </div>
      
      <div className="flex items-end gap-2 w-full">
        <span className={cn(
          "font-bold text-xl",
          negative ? "text-red-400" : "text-white"
        )}>
          {value}
        </span>
        
        {change && (
          <span className={cn(
            "text-xs font-medium",
            negative ? "text-red-400" : "text-green-400"
          )}>
            {negative ? '↓' : '↑'} {change}
          </span>
        )}
      </div>
    </div>
  )
}