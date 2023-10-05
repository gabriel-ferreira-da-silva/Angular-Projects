export interface Item{
    // atributos obrigatórios
    id: number
    name: string
    description: string| null
    price: number| null
    qtd: number| null
    categories: string[]
    img: string | null

    // atributos descritores
    vendor: string | null
    longDescription: string | null
    review: number | null


}