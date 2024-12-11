'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";


const menu = [
    {
        text: 'Página principal',
        href: '/'
    },
    {
        text: 'Alumnos-bd',
        href: '/alumnos-bd'
    },
    {
        text: 'Alumnos-api',
        href: '/alumnos-api'
    },
    {
        text: 'Profesores-bd',
        href: '/profesores-bd'
    },
    {
        text: 'Profesores-api',
        href: '/profesores-api'
    },
    {
        text: 'Acerca de ...',
        href: '/acerca'
    }
]

function Menu() {
    const pathname = usePathname()

    return (
        <nav className="font-bold flex items-center gap-4 text-blue-500 ">

            {menu.map(item =>
                <Link
                    key={item.href}
                    href={item.href}
                    className={`hover:underline ${pathname == item.href && 'text-black no-underline'}`}>

                    {item.text}
                </Link>
            )}

        </nav>
    );
}

export default Menu;