interface BotaoIconeProps {
    icone: React.ReactNode // usado para configurar qualquer icone visual
    children: React.ReactNode
}

const BotaoIcone = ( props: BotaoIconeProps) => {
    return (
        <>
            <button className="rounded-xl border-gray-300 border-2 flex items-center gap-2 px-4 py-2 hover:border-gray-200">
                <span>{props.icone}</span>
                <span>{props.children}</span>
            </button>
        </>
    )
}

export default BotaoIcone