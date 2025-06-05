"use client"

import { useState, useEffect } from "react"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { MainContent } from "@/components/main-content"
import { RightSidebar } from "@/components/right-sidebar"
import { useMediaQuery } from "@/hooks/use-media-query"
import { X } from "lucide-react"

export function Dashboard() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [showRightSidebar, setShowRightSidebar] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")
  const isTablet = useMediaQuery("(min-width: 769px) and (max-width: 1023px)")
  const isDesktop = useMediaQuery("(min-width: 1024px)")

  // Auto-collapse sidebar on mobile
  useEffect(() => {
    if (isMobile) {
      setSidebarCollapsed(true)
    } else if (isDesktop) {
      setSidebarCollapsed(false)
    }
  }, [isMobile, isDesktop])

  return (
    <div className="min-h-screen bg-[#0a0b0f] text-white overflow-hidden">
      <div className="flex flex-col md:flex-row h-screen relative">
        {/* Mobile Sidebar Overlay */}
        {isMobile && sidebarOpen && (
          <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setSidebarOpen(false)} />
        )}

        {/* Sidebar */}
        <div
          className={`
              ${isMobile ? "fixed inset-y-0 left-0 z-50" : "relative"}
              ${isMobile && !sidebarOpen ? "-translate-x-full" : "translate-x-0"}
              transition-transform duration-300 ease-in-out
            `}
        >
          <Sidebar
            collapsed={sidebarCollapsed}
            onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
            onMobileToggle={() => setSidebarOpen(!sidebarOpen)}
            isMobile={isMobile}
          />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0">
          <Header onMobileSidebarToggle={() => setSidebarOpen(!sidebarOpen)} isMobile={isMobile} />

          <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
            <MainContent className="flex-1 min-w-0" />

            {/* Right Sidebar - Desktop */}
            {isDesktop && <RightSidebar className="w-80 flex-shrink-0" />}
          </div>
        </div>

        {/* Mobile Right Sidebar Toggle */}
        {!isDesktop && (
          <button
            onClick={() => setShowRightSidebar(!showRightSidebar)}
            className="fixed bottom-6 right-6 bg-purple-600 hover:bg-purple-700 text-white rounded-full p-3 shadow-lg z-30"
            title="Open right sidebar"
            aria-label="Open right sidebar"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        )}

        {/* Mobile Right Sidebar Overlay */}
        {!isDesktop && showRightSidebar && (
          <div className="fixed inset-0 z-40">
            <div className="absolute inset-0 bg-black/50" onClick={() => setShowRightSidebar(false)}></div>
            <div className="absolute right-0 top-0 h-full w-4/5 max-w-md bg-[#0f1015] border-l border-gray-800 overflow-y-auto">
              <RightSidebar className="w-full" />
              <button
                onClick={() => setShowRightSidebar(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
                title="Close right sidebar"
                aria-label="Close right sidebar"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
