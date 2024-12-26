import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import './globals.css'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </main>
          <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
              © {new Date().getFullYear()} Atharva Kinage. All rights reserved.
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}

