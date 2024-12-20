'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";


const menu = [
    {
        text: 'Página principal',
        href: '/'
    },
    {
        text: 'Medicos-bd',
        href: '/medicos-bd'
    },
    {
        text: 'Pacientes-bd',
        href: '/pacientes-bd'
    },
    {
        text: 'Medicos-api',
        href: '/medicos-api'
    },
    {
        text: 'Pacientes-api',
        href: '/pacientes-api'
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