import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-4xl font-bold">MyStore</Link>
        <div className="flex space-x-4">
          <Link href="/" className="text-gray-300 text-xl font-bold hover:text-white">Home</Link>
          <Link href="/about" className="text-gray-300 text-xl  hover:text-white">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
