import Link from 'next/link'

export default function Navbar() {
  return (
   <nav className="w-full bg-white shadow-sm px-8 py-4 flex items-center justify-between">
  <Link href="/">
    <img src="https://www.nawy.com/assets/icons/common/nawy.svg" alt="Nawy" className="h-8 w-auto" />
  </Link>

  <div className="flex items-center gap-6">
    <Link href="/" className="text-gray-600 hover:text-green-600 transition-colors">
      Home
    </Link>
    <Link href="/" className="text-gray-600 hover:text-green-600 transition-colors">
      Buy
    </Link>
    <Link href="/" className="text-gray-600 hover:text-green-600 transition-colors">
      Rent
    </Link>
    <Link href="/" className="text-gray-600 hover:text-green-600 transition-colors">
      Contact us
    </Link>
   
  </div>

  <div className="w-20" >
     </div>
</nav>
  )
}
