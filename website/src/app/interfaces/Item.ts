export interface Item{
    // atributos obrigatórios
    id: number
    name: string
    description: string
    price: number
    qtd: number
    categories: string[]
    img: string

    // atributos descritores
    vendor: string | null
    longDescription: string | null
    review: number | null


}