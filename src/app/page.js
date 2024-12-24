import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-xl mb-6">Hi! I am Atharva, I am a 5th semester Computer Science student in PES University.</p>
        <a href="/contact" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300">Contact me</a>
      </div>
      <div className="md:w-1/3">
        <Image src="/guitarlol.png" alt="Your Image" width={400} height={400} className="rounded-full" />
      </div>
    </div>
  )
}

