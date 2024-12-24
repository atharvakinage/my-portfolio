import Image from 'next/image'
import {Github, Mail, Phone, Palette} from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-xl text-justify mb-6">I am a 5th-semester Computer Science Engineering student at PES University, dedicated to both academic achievement and extracurricular engagement. I am passionate about leveraging technology to address and solve complex problemsand driven by curiosity to explore innovative solutions. Outside of academics, I play volleyball at the state level and have a passion for sketching, which reflects my commitment to teamwork and creativity.</p>
        <div className="flex space-x-4">
          <a href="https://github.com/atharvakinage" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-500">
            <Github size={24} />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="mailto:kinageatharv@gmail.com" className="text-gray-700 hover:text-blue-500">
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
      <div className="md:w-1/3">
        <Image src="/guitarlol.png" alt="Your Profile Picture" width={400} height={400} className="rounded-full" />
      </div>
    </div>
  )
}



