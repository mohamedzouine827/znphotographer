import Link from "next/link"

const Navbar = () => {
  return (
    <section className="px-[2.9vw] mt-[4.5vh]">
        <ul className="flex flex-row justify-between">
            <li className="text-xs transition-all duration-300 hover:text-gray-500 cursor-pointer"><Link href="/">MOHAMED</Link></li>
            <li className="text-xs transition-all duration-300 hover:text-gray-500 cursor-pointer"><Link href="/about">ABOUT</Link></li>
            <li className="text-xs transition-all duration-300 hover:text-gray-500 cursor-pointer"><Link href="/contact">CONTACT</Link></li>
        </ul>
    </section>
  )
}

export default Navbar