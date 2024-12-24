import Image from 'next/image';

export default function Artworks() {
  return (
    <div className="container mx-auto px-4 py-6">
  <h1 className="text-2xl font-extrabold text-center mb-8 text-gray-600 dark:text-white leading-tight fade-in">
    Sketching is my passion{" "}
    <span className="text-2xl">✏️</span>, here are some of my sketches!!
  </h1>

      {/* Artwork 1 */}
      <div className="flex items-center space-x-4 border-4 border-gray-300 p-4 rounded-md mb-6">
        {/* Image */}
        <div className="w-full h-auto relative">
          <Image 
            src="/elephant.jpg" 
            alt="Elephant" 
            layout="responsive" 
            width={1200}  // Set width according to your image's aspect ratio
            height={800}  // Set height according to your image's aspect ratio
            objectFit="contain" // This ensures the full image is shown
            className="rounded-md"
          />
        </div>

        {/* Description */}
        <div className="w-full md:w-1/2">
          <h2 className="text-xl font-semibold mb-2">Elephant</h2>
          <p className="text-gray-600">In nature's realm, the gentle giant strides, Majestic grace, soulful eyes, serenity abides.</p>
          <br></br>
          <a href="https://www.paintperl.com/post/elephant" className="text-gray-500 hover:text-blue-500">View on Paintperl</a>
        </div>
      </div>

      {/* Artwork 2 */}
      <div className="flex items-center space-x-4 border-4 border-gray-300 p-4 rounded-md mb-6">
        {/* Image */}
        <div className="w-full h-auto relative">
          <Image 
            src="/horse.png" 
            alt="Horse" 
            layout="responsive" 
            width={1200}  // Adjust according to image size
            height={800}  // Adjust according to image size
            objectFit="contain" // This ensures the full image is shown
            className="rounded-md"
          />
        </div>

        {/* Description */}
        <div className="w-full md:w-1/2">
          <h2 className="text-xl font-semibold mb-2">Horse</h2>
          <p className="text-gray-600">Elegance in every flick of name with grace under its reins where freedom runs wild, a majestic beauty in every stride.</p>
          <br></br>
          <a href="https://www.paintperl.com/post/horse" className="text-gray-500 hover:text-blue-500">View on Paintperl</a>
        </div>
      </div>

      {/* Artwork 3 */}
      <div className="flex items-center space-x-4 border-4 border-gray-300 p-4 rounded-md mb-6">
        {/* Image */}
        <div className="w-full h-auto relative">
          <Image 
            src="/snake.jpg" 
            alt="Snake" 
            layout="responsive" 
            width={1200}  
            height={800}  
            objectFit="contain"
            className="rounded-md"
          />
        </div>

        {/* Description */}
        <div className="w-full md:w-1/2">
          <h2 className="text-xl font-semibold mb-2">Snake</h2>
          <p className="text-gray-600">Nature's sleek predator, they roam, The dance of scales, a whispered poem.</p>
          <br></br>
          <a href="https://www.paintperl.com/post/snake" className="text-gray-500 hover:text-blue-500">View on Paintperl</a>
        </div>
      </div>
    </div>
  );
}