export default function About() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <div className="space-y-8">

        <div className="bg-white dark:bg-white rounded-xl shadow-md p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
            <h2 className="text-2xl font-semibold mb-6 text-blue-600">My Journey</h2>
            <p className="text-gray-600 mb-6">
              I'm a passionate Computer Science student with a keen interest in software engineering. 
              I love turning complex problems into simple, beautiful, and intuitive solutions.
            </p>
            
            <div className="space-y-6">
              <h3 className="text-xl text-gray-600 font-semibold border-b pb-2">EDUCATION</h3>
              <div className="space-y-6">
              <div className="bg-white dark:bg-white rounded-xl shadow-md p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
                  <h4 className="text-lg font-medium text-blue-600">B.Tech</h4>
                  <div className="text-gray-700 font-medium">PES University</div>
                  <div className="text-gray-600">2022 - 2026</div>
                  <div className="text-gray-600">Computer Science Engineering (6th Sem)</div>
                  <div className="text-gray-600 font-medium">CGPA - 8.91</div>
                </div>
                <div className="bg-white dark:bg-white rounded-xl shadow-md p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
                  <h4 className="text-lg font-medium text-blue-600">BGS NPS</h4>
                  <div className="text-gray-600">2013 - 2022</div>
                  <div className="text-gray-600">CBSE Class XII - 2022 (95.6%)</div>
                  <div className="text-gray-600">CBSE Class X - 2020 (93.8%)</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-white rounded-xl shadow-md p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
            <h2 className="text-2xl font-semibold mb-6 text-blue-600">Skills</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
              <h3 className="text-gray-700 font-semibold mb-2">Technical Skills</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-blue-500 dark:text-blue-400 font-medium mb-2">Programming Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Python', 'C', 'C++', 'R', 'JavaScript'].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-blue-500 dark:text-blue-400 font-medium mb-2">Big Data Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Hadoop', 'Kafka', 'Spark'].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-blue-500 dark:text-blue-400 font-medium mb-2">Frameworks & Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'Git',
                        'MongoDB',
                        'MySQL',
                        'React',
                        'Next.js',
                        'Tailwind CSS',
                        'HTML/CSS'
                      ].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-gray-700 font-semibold mb-2">Soft Skills</h3>
                <ul className="space-y-2">
                  <li className="text-gray-700 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Team Leadership
                  </li>
                  <li className="text-gray-700 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Problem Solving
                  </li>
                  <li className="text-gray-700 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Communication
                  </li>
                  <li className="text-gray-700 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Time Management
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
        <div className="bg-white dark:bg-white rounded-xl shadow-md p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
            <h2 className="text-2xl font-semibold mb-6 text-blue-600">Experience</h2>
            <div className="space-y-6">
            <div className="bg-white dark:bg-white rounded-xl shadow-md p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
                <h3 className="text-xl text-gray-600 font-semibold">Intern at CODMAV Research Center PESU</h3>
                <p className="text-gray-600">2024</p>
                <ul className="mt-2 space-y-1 text-gray-600">
                  <li>• Worked on a ML project under a mentor - Predictive analytics for early lung cancer risk using Machine Learning</li>
                  <li>• Conducted comparative analysis on multiple feature selection and reduction algorithms and ML models</li>
                  <li>• My role was to research and identify the preprocessing steps in the dataset and implement feature reduction and also i was involved in selecting and implementing the ML models and visualizing the results through various graphs.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-white rounded-xl shadow-md p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
            <h2 className="text-2xl font-semibold mb-6 text-blue-600">Co-curricular Activities</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg text-gray-600 font-semibold">ACM Member</h3>
                <p className="text-gray-600">2024 - Present</p>
                <ul className="mt-2 text-gray-600">
                  <li>• Head of operations for flagship hackathon - Hacknight in campus</li>
                  <li>• Maintainer in Hacknight</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg text-gray-600 font-semibold">AIEP (ACM industrial experience program)</h3>
                <p className="text-gray-600">2024</p>
                <ul className="mt-2 text-gray-600">
                  <li>• Explored aviation through the design and simulation of UAV</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg text-gray-600 font-semibold">Vegavath Member</h3>
                <p className="text-gray-600">2022 - 2023</p>
                <ul className="mt-2 text-gray-600">
                  <li>• Designing part of a Go-kart and optimizing the kart based on given rule book</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Extracurricular Activities */}
          <div className="bg-white dark:bg-white rounded-xl shadow-md p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
            <h2 className="text-2xl font-semibold mb-6 text-blue-600">Extracurricular Activities</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg text-gray-600 font-semibold">Sports</h3>
                <ul className="mt-2 text-gray-600">
                  <li>• School volleyball Team Vice-Captain</li>
                  <li>• CBSE Clusters State Level participant</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg text-gray-600 font-semibold">Sketching</h3>
                <ul className="mt-2 text-gray-600">
                  <li>• Hashtag Kalakar Arts and Painting competition rank 37 - All India</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

