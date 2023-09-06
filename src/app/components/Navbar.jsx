'use client';
import Image from "next/image"
import Link from "next/link"
import { usePathname, useSelectedLayoutSegment } from "next/navigation";

const Navbar = () => {

    const pathname = usePathname();
    const segment = useSelectedLayoutSegment()

    const links = [
        {
            name: "Home",
            link: "/",
            activeSegment: "/"
        },
        {
            name: "Event",
            link: "/event",
            activeSegment: "event"
        },
        {
            name: "Our Product",
            link: "/our-product",
            activeSegment: "our-product"
        },
        {
            name: "About Us",
            link: "/about-us",
            activeSegment: "about-us"
        },
    ]


    return (
        <div className="relative z-20">
            {/* <div className="container flex justify-end gap-8 pt-5">
                <span>
                    <a href="https://wa.me/6285296648268"><i className="bi bi-telephone-fill mr-1"></i>+6285296648268</a>
                </span>

                <span>
                    <a href="mailto:info@geraikobar.com"><i className="bi bi-envelope-fill mr-1"></i>info@geraikobar.com</a>
                </span>
            </div> */}
            {/* header with tailwindcss +6285296648268 info@geraikobar.com */}
            <header className={pathname === '/' ? 'text-gray-600 body-font md:text-white' : 'text-gray-600 body-font'}>
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <Image src="/gerai-kobar.png" width={100} height={100} alt="logo" />
                    </a>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        {
                            links.map((link, index) => (
                                // <Link href={link.link} key={index} className={link.link === pathname.startsWith(link.link) ? 'mr-5 hover:font-bold cursor-pointer font-bold' : 'mr-5 hover:font-bold cursor-pointer'}>
                                //     {link.name}
                                // </Link>
                                <Link href={link.link} key={index} className={segment === link.activeSegment || pathname === '/' && index === 0 ? 'mr-5 hover:font-bold cursor-pointer font-bold' : 'mr-5 hover:font-bold cursor-pointer'}>
                                    {link.name}
                                </Link>
                            ))
                        }
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Navbar