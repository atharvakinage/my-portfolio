'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Github, Mail, Phone, Palette, FileDown, ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 flex flex-col justify-center items-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
          Hi, I'm <span className="text-blue-600 dark:text-blue-400">Atharva Kinage</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
          Student | PES University
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative w-66 h-66 md:w-80 md:h-80 mb-8 rounded-full overflow-hidden shadow-2xl hover:shadow-lg hover:scale-105 transition-all duration:300 ease-in-out"
      >
        <Image
          src="/guitarlol.png"
          alt="Your Profile Picture"
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-wrap justify-center gap-4 mb-8"
      >
        <SocialLink href="https://github.com/atharvakinage" icon={<Github size={24} />} label="GitHub" />
        <SocialLink href="mailto:kinageatharv@gmail.com" icon={<Mail size={24} />} label="Email" />
        <SocialLink href="tel:+919741862880" icon={<Phone size={24} />} label="Phone" />
        <SocialLink href="/artworks" icon={<Palette size={24} />} label="Artworks" isInternal = {true} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <a 
          href="/RESUME_Atharva_Kinage.pdf" 
          download 
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
        >
          <FileDown size={20} className="mr-2" />
          Download Resume
        </a>
      </motion.div>

      
    </div>
  )
}

function SocialLink({ href, icon, label, isInternal=true}) {
  const LinkComponent = isInternal ? Link : 'a';
  return (
    <LinkComponent
      href={href} 
      target={isInternal ? undefined : "_blank"}
      rel={isInternal ? undefined : "noopener noreferrer"}
      className="flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110"
    >
      {icon}
      <span className="sr-only">{label}</span>
    </LinkComponent>
  )
}

