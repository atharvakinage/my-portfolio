import Image from 'next/image'

export default function Artworks() {
  const artworks = [
    { id: 1, title: 'Artwork 1', description: 'Description of artwork 1', image: '/images/artwork1.jpg' },
    { id: 2, title: 'Artwork 2', description: 'Description of artwork 2', image: '/images/artwork2.jpg' },
    { id: 3, title: 'Artwork 3', description: 'Description of artwork 3', image: '/images/artwork3.jpg' },
  ]

  return (
    <div>+
      <h1 className="text-3xl font-bold mb-6">My Artworks</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {artworks.map((artwork) => (
          <div key={artwork.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image 
              src={artwork.image} 
              alt={artwork.title} 
              width={400} 
              height={300} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{artwork.title}</h2>
              <p className="text-gray-600">{artwork.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

