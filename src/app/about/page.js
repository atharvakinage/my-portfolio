export default function About() {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-6">About Me</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">My Journey</h2>
            <p className="mb-4">Here you can write about your background, education, and professional journey.</p>
            <h2 className="text-2xl font-semibold mb-4">Skills</h2>
            <ul className="list-disc list-inside">
              <li>JavaScript</li>
              <li>React</li>
              <li>Next.js</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Experience</h2>
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Job Title</h3>
              <p className="text-gray-600">Company Name | Date - Present</p>
              <p>Brief description of your role and achievements.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  