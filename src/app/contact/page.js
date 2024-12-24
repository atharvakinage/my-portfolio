export default function Contact() {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
        <div className="max-w-md mx-auto">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 font-medium">Name</label>
              <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-md" required />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-medium">Email</label>
              <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-md" required />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 font-medium">Message</label>
              <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 border rounded-md" required></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">Send Message</button>
          </form>
        </div>
      </div>
    )
  }
  
  