import Image from 'next/image'
import {Github, Mail, Phone, Pallete} from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-xl mb-6">I'm a web developer passionate about creating beautiful and functional websites.</p>
        <div className="flex space-x-4">
          <a href="https://github.com/atharvakinage" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-500">
            <Github size={24} />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="mailto:kinageatharv@example.com" className="text-gray-700 hover:text-blue-500">
            <Mail size={24} />
            <span className="sr-only">Email</span>
          </a>
          <a href="tel:+919741862880" className="text-gray-700 hover:text-blue-500">
            <Phone size={24} />
            <span className="sr-only">Phone</span>
          </a>
          <Link href="/artworks" className="text-gray-700 hover:text-blue-500">
            <Palette size={24} />
            <span className="sr-only">Artworks</span>
          </Link>
        </div>
      </div>
      <div className="md:w-1/2">
        <Image src="/images/profile-picture.jpg" alt="Your Profile Picture" width={400} height={400} className="rounded-full" />
      </div>
    </div>
  )
}



