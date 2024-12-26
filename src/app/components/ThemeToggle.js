'use client'

import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true'
    setDarkMode(isDarkMode)
    document.documentElement.classList.toggle('dark', isDarkMode)
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem('darkMode', newDarkMode.toString())
    document.documentElement.classList.toggle('dark', newDarkMode)
  }

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
    >
      {darkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}

