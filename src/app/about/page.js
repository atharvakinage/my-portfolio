export default function About() {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-6">About Me</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">My Journey</h2>
            <p className="mb-4">Here you can write about your background, education, and professional journey.</p>

            <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">EDUCATION</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-medium">B.Tech</h4>
                <div className="text-gray-500">PES University | 2022 - 2026</div>
                <div className="text-white-600">Computer Science Engineering (5th Sem)</div>
                <div className="text-white-600">CGPA - 8.67</div>
              </div>
              <div>
                <h4 className="text-gray-500">BGS NPS | 2013 - 2022</h4>
                <div className="text-white-600">CBSE Class XII - 2022 (95.6%)</div>
                <div className="text-white-600">CBSE Class X - 2020 (93.8%)</div>
              </div>
            </div>
          </div>

            <h2 className="text-2xl font-semibold mb-4">Skills</h2>
            <ul className="list-disc list-inside">
              <li>Programming: C, Python, C++, R</li>
              <li>Frontend: HTML/CSS, Javascript</li>
              <li>Database: MySQL, MongoDB</li>
              <li>Familiar with MERN stack, next.js, OpenCV, Rust, Tailwind CSS</li>
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
  
  