import Link from "next/link";

interface MenuItemProps {
    icone?: any
    texto: string
    href: string
}

export default function MenuItem(props: MenuItemProps) {
    return (
        <div className="flex items-center gap-2 hover:bg-black/20 p-1 rounded-md">
            {props.icone}
            <Link href={props.href}>{props.texto}</Link>
        </div>
    )
}