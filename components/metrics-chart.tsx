"use client"

import { useEffect, useRef } from "react"

interface MetricsChartProps {
  data: number[]
  width?: number
  height?: number
}

export function MetricsChart({ data, width = 60, height = 20 }: MetricsChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || data.length === 0) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    canvas.width = width * window.devicePixelRatio
    canvas.height = height * window.devicePixelRatio
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio)

    // Clear canvas
    ctx.clearRect(0, 0, width, height)

    // Chart settings
    const padding = 2
    const chartWidth = width - padding * 2
    const chartHeight = height - padding * 2

    // Find min and max values
    const minValue = Math.min(...data)
    const maxValue = Math.max(...data)
    const valueRange = maxValue - minValue || 1

    // Create points
    const points = data.map((value, index) => ({
      x: padding + (index / (data.length - 1)) * chartWidth,
      y: padding + chartHeight - ((value - minValue) / valueRange) * chartHeight,
    }))

    // Draw line
    ctx.beginPath()
    ctx.moveTo(points[0].x, points[0].y)

    for (let i = 1; i < points.length; i++) {
      ctx.lineTo(points[i].x, points[i].y)
    }

    ctx.strokeStyle = "#22c55e"
    ctx.lineWidth = 1.5
    ctx.stroke()

    // Draw points
    points.forEach((point, index) => {
      ctx.beginPath()
      ctx.arc(point.x, point.y, index === points.length - 1 ? 2 : 1, 0, 2 * Math.PI)
      ctx.fillStyle = index === points.length - 1 ? "#ffffff" : "#22c55e"
      ctx.fill()
    })
  }, [data, width, height])

  return <canvas ref={canvasRef} className="flex-shrink-0" style={{ width, height }} />
}
