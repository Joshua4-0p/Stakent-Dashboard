"use client"

import { useState, useEffect } from "react"

export function ResponsiveTest() {
  const [screenInfo, setScreenInfo] = useState({
    width: 0,
    height: 0,
    devicePixelRatio: 1,
  })

  useEffect(() => {
    const updateScreenInfo = () => {
      setScreenInfo({
        width: window.innerWidth,
        height: window.innerHeight,
        devicePixelRatio: window.devicePixelRatio || 1,
      })
    }

    updateScreenInfo()
    window.addEventListener("resize", updateScreenInfo)
    window.addEventListener("orientationchange", updateScreenInfo)

    return () => {
      window.removeEventListener("resize", updateScreenInfo)
      window.removeEventListener("orientationchange", updateScreenInfo)
    }
  }, [])

  if (process.env.NODE_ENV !== "development") {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-2 rounded text-xs font-mono z-50 backdrop-blur">
      <div>W: {screenInfo.width}px</div>
      <div>H: {screenInfo.height}px</div>
      <div>DPR: {screenInfo.devicePixelRatio}</div>
      <div className="block xs:hidden">XS</div>
      <div className="hidden xs:block sm:hidden">SM</div>
      <div className="hidden sm:block md:hidden">MD</div>
      <div className="hidden md:block lg:hidden">LG</div>
      <div className="hidden lg:block xl:hidden">XL</div>
      <div className="hidden xl:block 2xl:hidden">2XL</div>
      <div className="hidden 2xl:block">3XL+</div>
    </div>
  )
}
