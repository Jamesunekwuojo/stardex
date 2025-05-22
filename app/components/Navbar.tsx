import Link from "next/link";

const Navbar = () => {
    return (
        
        <header className="px-5 py-5 bg-white shadow-sm font-work-sans">

            <nav className="flex justify-between items-center">
                <Link href="/">
                <img src="/images/logo.png" alt="" />
                </Link>

            </nav>

        </header>
        
     );
}

export default Navbar;