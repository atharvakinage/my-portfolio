import Navbar from "../components/Navbar";

export default function About() {
    return (
    <>
        <Navbar />
        <main className="flex flex-col items-center justify-center min-h-screen bg-white">
            <h1 className="text-4xl font-bold text-green-500">About Me</h1>
            <p className="mt-4 text-lg text-gray-700 max-w-2xl">
            I am a 5th-semester Computer Science Engineering student at PES University,dedicated to both academic achievement and extracurricular engagement. I ampassionate about leveraging technology to address and solve complex problemsand driven by curiosity to explore innovative solutions. Outside of academics, I playvolleyball at the state level and have a passion for sketching, which reflects mycommitment to teamwork and creativity.
            </p>
        </main>
    </>
        );
  }
  