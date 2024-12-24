import Image from 'next/image'

export default function Projects() {
  const projects = [
    { id: 1, title: 'Project 1', description: 'Description of project 1', image: '/placeholder.svg' },
    { id: 2, title: 'Project 2', description: 'Description of project 2', image: '/placeholder.svg' },
    { id: 3, title: 'Project 3', description: 'Description of project 3', image: '/placeholder.svg' },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image src={project.image} alt={project.title} width={400} height={200} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-600">{project.description}</p>
              <a href="#" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}