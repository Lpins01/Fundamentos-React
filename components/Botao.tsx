// Primeiro Componente - Componente Funcional (baseado em função)
export default function Botao(props: any) {
    return (
        // JSX - Sintaxe extendida do JavaScript
        <button className="bg-green-500 p-2 rounded-md">{props.label ?? 'Ok'}</button>
    )
}