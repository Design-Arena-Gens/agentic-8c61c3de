import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-pink-400 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Glamour Salon
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-pink-200">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-pink-200">
                Services
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-pink-200">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-pink-200">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
