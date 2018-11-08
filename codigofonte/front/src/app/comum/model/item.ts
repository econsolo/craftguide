export class Item {
    id: string;
    nome: string;
    icone: string;
    pais: Array<Item> = new Array<Item>();
    quantidade: number = 0;
}