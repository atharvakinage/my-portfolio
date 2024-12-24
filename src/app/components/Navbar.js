export default function Navbar() {
    return (
      <nav className="w-full bg-gray-800 p-4 text-white">
        <ul className="flex justify-around">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/about" className="hover:underline">About</a></li>
        </ul>
      </nav>
    );
  }
  
  