export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 Glamour Salon. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:text-pink-400">
            Facebook
          </a>
          <a href="#" className="hover:text-pink-400">
            Instagram
          </a>
          <a href="#" className="hover:text-pink-400">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
