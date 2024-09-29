import Cabecalho from "./Cabecalho"
import Menu from "./Menu"
import Rodape from "./Rodape"

export default function Pagina(props: any) {
    return (
        <div className="flex flex-col h-screen">
            <Cabecalho></Cabecalho>
            <div className="flex-1 flex">
                <Menu></Menu>
                <main className="p-8">{props.children}</main>
            </div>
            <Rodape></Rodape>
        </div>
    )
}