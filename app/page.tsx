"use client"

import { useState, useEffect } from "react"
import { Dashboard } from "@/components/dashboard"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return <Dashboard />
}
