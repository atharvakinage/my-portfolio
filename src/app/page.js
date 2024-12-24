import Navbar from "./components/Navbar";

export default function Home() {
  return (
  <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-500">Welcome to My Portfolio</h1>
        <p className="mt-4 text-lg text-gray-700">
          Hi, I'm Atharva .
          I am a 5th semester Computer Science student in PES Univeristy.
        </p>
      </main>
  </>
  );
}
