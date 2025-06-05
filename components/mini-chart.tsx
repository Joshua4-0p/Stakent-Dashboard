"use client"

import { useEffect, useRef } from "react"

interface MiniChartProps {
  data: number[]
  color: string
  trending: "up" | "down"
}

export function MiniChart({ data, color, trending }: MiniChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * window.devicePixelRatio
    canvas.height = rect.height * window.devicePixelRatio
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio)

    // Clear canvas
    ctx.clearRect(0, 0, rect.width, rect.height)

    // Chart settings
    const padding = 10
    const chartWidth = rect.width - padding * 2
    const chartHeight = rect.height - padding * 2

    // Find min and max values
    const minValue = Math.min(...data)
    const maxValue = Math.max(...data)
    const valueRange = maxValue - minValue || 1

    // Create points
    const points = data.map((value, index) => ({
      x: padding + (index / (data.length - 1)) * chartWidth,
      y: padding + chartHeight - ((value - minValue) / valueRange) * chartHeight,
    }))

    // Draw gradient fill
    const gradient = ctx.createLinearGradient(0, 0, 0, rect.height)
    const baseColor = trending === "up" ? "34, 197, 94" : "239, 68, 68" // green or red
    gradient.addColorStop(0, `rgba(${baseColor}, 0.3)`)
    gradient.addColorStop(1, `rgba(${baseColor}, 0.05)`)

    ctx.beginPath()
    ctx.moveTo(points[0].x, points[0].y)

    // Create smooth curve using quadratic curves
    for (let i = 1; i < points.length; i++) {
      const prevPoint = points[i - 1]
      const currentPoint = points[i]
      const cpx = (prevPoint.x + currentPoint.x) / 2
      const cpy = (prevPoint.y + currentPoint.y) / 2
      ctx.quadraticCurveTo(prevPoint.x, prevPoint.y, cpx, cpy)
    }

    // Complete the fill area
    ctx.lineTo(points[points.length - 1].x, rect.height - padding)
    ctx.lineTo(points[0].x, rect.height - padding)
    ctx.closePath()
    ctx.fillStyle = gradient
    ctx.fill()

    // Draw the line
    ctx.beginPath()
    ctx.moveTo(points[0].x, points[0].y)

    for (let i = 1; i < points.length; i++) {
      const prevPoint = points[i - 1]
      const currentPoint = points[i]
      const cpx = (prevPoint.x + currentPoint.x) / 2
      const cpy = (prevPoint.y + currentPoint.y) / 2
      ctx.quadraticCurveTo(prevPoint.x, prevPoint.y, cpx, cpy)
    }

    ctx.strokeStyle = trending === "up" ? "#22c55e" : "#ef4444"
    ctx.lineWidth = 2
    ctx.stroke()

    // Add glow effect
    ctx.shadowColor = trending === "up" ? "#22c55e" : "#ef4444"
    ctx.shadowBlur = 10
    ctx.stroke()
  }, [data, color, trending])

  return <canvas ref={canvasRef} className="w-full h-full" style={{ width: "100%", height: "100%" }} />
}
