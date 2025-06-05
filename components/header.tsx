"use client";

import { Search, Settings, Bell, Lock, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface HeaderProps {
  onMobileSidebarToggle?: () => void;
  isMobile?: boolean;
}

export function Header({ onMobileSidebarToggle, isMobile }: HeaderProps) {
  return (
    <header className="bg-[#0f1015] border-b border-gray-800 px-3 sm:px-4 lg:px-6 py-3 lg:py-4">
      <div className="flex items-center justify-between gap-2 sm:gap-4">
        {/* Left side - Mobile menu, User info and Deposit */}
        <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 min-w-0">
          {/* Mobile Menu Button */}
          {isMobile && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onMobileSidebarToggle}
              className="text-gray-400 hover:text-white min-h-[44px] min-w-[44px] flex-shrink-0"
            >
              <Menu className="w-5 h-5" />
            </Button>
          )}

          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <Avatar className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 flex-shrink-0">
              <AvatarImage src="/placeholder.svg?height=36&width=36" />
              <AvatarFallback className="text-xs sm:text-sm">RC</AvatarFallback>
            </Avatar>
            <div className="hidden mobile-m:block min-w-0">
              <p className="text-white text-xs sm:text-sm lg:text-base font-medium truncate">
                Ryan Crawford
              </p>
              <p className="text-gray-400 text-xs">PRO</p>
            </div>
          </div>

          <Button className="bg-gradient-to-r from-[#afa7ea] to-[#918EDF] hover:from-[#9b91e3] hover:to-[#7f78d1] text-black px-2 sm:px-3 lg:px-4 py-2 rounded-lg font-medium flex items-center gap-1 sm:gap-2 text-xs sm:text-sm min-h-[44px] flex-shrink-0">
            <Lock className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <span className="hidden mobile-l:inline">Deposit</span>
          </Button>
        </div>

        {/* Right side - Search, Notifications, Settings */}
        <div className="flex items-center gap-1 sm:gap-2 lg:gap-4">
          {/* Search - Progressive Enhancement */}
          <div className="relative hidden lg:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search..."
              className="pl-10 bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 w-48 xl:w-64 2xl:w-72"
            />
          </div>

          {/* Tablet Search */}
          <div className="relative hidden md:block lg:hidden">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search..."
              className="pl-10 bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 w-32"
            />
          </div>

          {/* Mobile search button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-gray-400 hover:text-white min-h-[44px] min-w-[44px] flex-shrink-0"
          >
            <Search className="w-4 h-4 sm:w-5 sm:h-5" />
          </Button>

          <div className="flex items-center gap-1 sm:gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="relative text-gray-400 hover:text-white min-h-[44px] min-w-[44px] flex-shrink-0"
            >
              <Bell className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-purple-500 rounded-full text-xs flex items-center justify-center text-white">
                <span className="hidden sm:inline">3</span>
              </span>
            </Button>

            <div className="hidden sm:block">
              <ThemeToggle />
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-white min-h-[44px] min-w-[44px] flex-shrink-0"
            >
              <Settings className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
