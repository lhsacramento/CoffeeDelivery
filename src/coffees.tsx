import expressotradicional from './assets/img/coffees/coffee_expressotradicional.png';
import expressoamericano from './assets/img/coffees/coffee_expressoamericano.png';
import expressocremoso from './assets/img/coffees/coffee_expressocremoso.png';
import expressogelado from './assets/img/coffees/coffee_expressogelado.png';
import cafecomleite from './assets/img/coffees/coffee_cafecomleite.png';
import latte from './assets/img/coffees/coffee_latte.png';
import capuccino from './assets/img/coffees/coffee_capuccino.png';
import macchiato from './assets/img/coffees/coffee_macchiato.png';
import mocaccino from './assets/img/coffees/coffee_mocaccino.png';
import chocolatequente from './assets/img/coffees/coffee_chocolatequente.png';
import cubano from './assets/img/coffees/coffee_cubano.png';
import havaiano from './assets/img/coffees/coffee_havaiano.png';
import arabe from './assets/img/coffees/coffee_arabe.png';
import irlandes from './assets/img/coffees/coffee_irlandes.png';



export const Coffees = [
    {
        name: 'Expresso Tradicional',
        img: expressotradicional,
        type: ['tradicional'],
        description: 'O tradicional café feito com água quente e grãos moídos',
        price: 9.90
    },
    {
        name: 'Expresso Americano',
        img: expressoamericano,
        type: ['tradicional'],
        description: 'Expresso diluído, menos intenso que o tradicional',
        price: 9.90
    },
    {
        name: 'Expresso Cremoso',
        img: expressocremoso,
        type: ['tradicional'],
        description: 'Café expresso tradicional com espuma cremosa',
        price: 9.90
    },
    {
        name: 'Expresso Gelado',
        img: expressogelado,
        type: ['tradicional','gelado'],
        description: 'Bebida preparada com café expresso e cubos de gelo',
        price: 9.90
    },
    {
        name: 'Café com Leite',
        img: cafecomleite,
        type: ['tradicional','com leite'],
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        price: 9.90
    },
    {
        name: 'Latte',
        img: latte,
        type: ['tradicional','com leite'],
        description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        price: 9.90
    },
    {
        name: 'Capuccino',
        img: capuccino,
        type: ['tradicional','com leite'],
        description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        price: 9.90
    },
    {
        name: 'Macchiato',
        img: macchiato,
        type: ['tradicional','com leite'],
        description: 'Café expresso misturado com um pouco de leite quente e espuma',
        price: 9.90
    },
    {
        name: 'Mocaccino',
        img: mocaccino,
        type: ['tradicional','com leite'],
        description: 'Café expresso com calda de chocolate, pouco leite e espuma',
        price: 9.90
    },
    {
        name: 'Chocolate Quente',
        img: chocolatequente,
        type: ['Especial', 'com leite'],
        description: 'Bebida feita com chocolate dissolvido no leite quente com café',
        price: 9.90
    },
    {
        name: 'Cubano',
        img: cubano,
        type: ['especial', 'alcoólico', 'gelado'],
        description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        price: 9.90
    },
    {
        name: 'Havaiano',
        img: havaiano,
        type: ['especial'],
        description: 'Bebida adocicada preparada com café e leite de coco',
        price: 9.90
    },
    {
        name: 'Árabe',
        img: arabe,
        type: ['especial'],
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        price: 9.90
    },
    {
        name: 'Irlandês',
        img: irlandes,
        type: ['especial', 'alcoólico'],
        description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        price: 9.90
    },
];