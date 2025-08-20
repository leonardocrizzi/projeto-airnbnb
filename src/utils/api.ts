import { Accomodation, AirnbnbApi } from "@/types/AirnbnbDados"

export async function fetchData(): Promise<AirnbnbApi> {
    try {
        const response = await fetch("https://web.codans.com.br/airbnb")
        const dados = response.json()
        return dados
    } catch (e) {
        console.error(e)
        throw e
    }
}

export async function fetchDataById(id: string): Promise<Accomodation | undefined> {
    try {
        const dados = await fetchData()
        const acomodacao = dados.accommodation.find((item: Accomodation) => {
            return item.slug === decodeURIComponent(id) // esse método serve para caso o slug esteja com algum acento ou coisa do tipo, ele remove e deixa sem
        })

        return acomodacao
    } catch (e) {
        console.error(e)
        throw e
    }
}