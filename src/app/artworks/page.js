import Image from 'next/image';

export default function Artworks() {
  const artworks = [
    { id: 1, title: 'Artwork 1', description: 'Elephant', image: '/elephant.jpg' },
    { id: 2, title: 'Artwork 2', description: 'Horse', image: '/horse.png' },
    { id: 3, title: 'Artwork 3', description: 'Snake', image: '/snake.jpg' },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-center mb-8">Sketching is my passion✏️, here are some of my top sketches !!</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {artworks.map((artwork) => (
          <div key={artwork.id} className="border-4 border-gray-300 rounded-md overflow-hidden">
            {/* Image */}
            <div className="relative w-full h-96">
              <Image 
                src={artwork.image} 
                alt={artwork.title} 
                layout="fill" 
                objectFit="cover" 
              />
            </div>

            {/* Description */}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{artwork.title}</h2>
              <p className="text-gray-600">{artwork.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}