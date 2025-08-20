import { IconUserCircle } from "@/assets/icones"
import BotaoIcone from "@/components/BotaoIcone"
import Logo from "@/components/logo"
import Link from "next/link"

const BarraSuperior = () => {
    return (
        <div className="mx-auto py-6  flex justify-between items-center">
          <Logo />

          <div className="flex gap-6">
            <Link className="font-semibold" href="/">Acomodações</Link>
            <Link className="opacity-60" href="/">Experiências</Link>
          </div>

          <BotaoIcone
          icone={(
            <IconUserCircle 
            aria-label="Ícone de usuário" 
            size={20}
            />
          )}
          >
            Entrar
          </BotaoIcone>

          
        </div>
    )
}

export default BarraSuperior