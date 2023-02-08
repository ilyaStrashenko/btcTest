
//Категории обьект
const category = {
    mono: 'Монобукеты',
    vase: 'Вазы',
    balls: 'Шары',
    toys: 'Игрушки'

}


//Ленты Упаковка
const decor = {
    package: 'Дизайнеркая пленка',
    ribbon: 'Лента атласная '
}
//Цветы  обьект 

const flowers = {
    peonySara: 'Пион Сара ',
    peonyDuchesse: 'Пион Дюшес',
    eucalyptus: 'Эвкалипт',
    lilac: 'Сирень',
    rose: 'Розы',
    chamomile: 'Ромашки'
}



const data = [
    {
        id: 1,
        title: 'Розы',
        img: './img/product/rose/rose1.webp',
        category: category.mono,
        cost: 3500,
        params: {
            choiceOne: flowers.peonySara,
            choiceOneCount: '10',
            choiceTwo: flowers.peonyDuchesse,
            choiceTwoCount: '10',
            choiceThree: flowers.eucalyptus,
            choiceThreeCount: '1',
            choiceFour: decor.package,
            choiceFourCount: '1',
            choiceFive: decor.ribbon,
            choiceFiveCount: '1',

        }
    },
    {
        id: 2,
        title: 'Ромашки',
        img: './img/product/romashka/romashka1.webp',
        category: category.mono,
        cost: 3500,
        params: {
            choiceOne: flowers.peonySara,
            choiceTwo: flowers.peonyDuchesse,
            choiceThree: flowers.eucalyptus,
            choiceFour: decor.package,
            choiceFive: decor.ribbon
        }
    },
    {
        id: 3,
        title: 'Розы',
        img: './img/product/rose/rose2.webp',
        category: category.mono,
        cost: 3500,
        params: {
            choiceOne: flowers.peonySara,
            choiceTwo: flowers.peonyDuchesse,
            choiceThree: flowers.eucalyptus,
            choiceFour: decor.package,
            choiceFive: decor.ribbon
        }
    },
    {
        id: 4,
        title: 'Пионы',
        img: './img/product/pion/pion1.webp',
        category: category.mono,
        cost: 3500,
        params: {
            choiceOne: flowers.peonySara,
            choiceTwo: flowers.peonyDuchesse,
            choiceThree: flowers.eucalyptus,
            choiceFour: decor.package,
            choiceFive: decor.ribbon
        }
    },


]

//Обьект с популярными товарами
const dataPopular = [
    {
        id: 5,
        title: 'Розы',
        img: './img/product/rose/rose1.webp',
        category: category.mono,
        cost: 3500,
        params: {
            choiceOne: flowers.rose,
            choiceOneCount: '31шт',
            choiceTwo: ' ',
            choiceTwoCount: ' ',
            choiceThree: ' ',
            choiceThreeCount: ' ',
            choiceFour: decor.package,
            choiceFourCount: '1шт',
            choiceFive: decor.ribbon,
            choiceFiveCount: '1шт',
        },
        blok: 'popular'
    },
    {
        id: 6,
        title: 'Ромашки',
        img: './img/product/romashka/romashka1.webp',
        category: category.mono,
        cost: 3100,
        params: {
            choiceOne: flowers.chamomile,
            choiceOneCount: '51шт',
            choiceTwo: " ",
            choiceTwoCount: ' ',
            choiceThree: " ",
            choiceThreeCount: ' ',
            choiceFour: " ",
            choiceFourCount: ' ',
            choiceFive: decor.ribbon,
            choiceFiveCount: '1шт',
        },
        blok: 'popular'
    },
    {
        id: 6,
        title: 'Розы',
        img: './img/product/rose/rose2.webp',
        category: category.mono,
        cost: 13500,
        params: {
            choiceOne: flowers.rose,
            choiceOneCount: '25шт',
            choiceTwo: '',
            choiceTwoCount: ' ',
            choiceThree: ' ',
            choiceThreeCount: ' ',
            choiceFour: decor.package,
            choiceFourCount: '1шт',
            choiceFive: decor.ribbon,
            choiceFiveCount: '1шт',
        },
        blok: 'popular'
    },
    {
        id: 7,
        title: 'Сирень',
        img: './img/product/siren/siren1.webp',
        category: category.mono,
        cost: 8500,
        params: {
            choiceOne: flowers.lilac,
            choiceOneCount: '19шт',
            choiceTwo: ' ',
            choiceTwoCount: ' ',
            choiceThree: ' ',
            choiceThreeCount: ' ',
            choiceFour: decor.package,
            choiceFourCount: '1шт',
            choiceFive: decor.ribbon,
            choiceFiveCount: '1шт',
        }
        , blok: 'popular'
    },
]

const dataNew = [
    {
        id: 9,
        title: 'Париж',
        img: './img/product/rose/rose1.webp',
        category: category.mono,
        cost: 2500,
        params: {
            choiceOne: flowers.peonySara,
            choiceOneCount: '10шт',
            choiceTwo: flowers.peonyDuchesse,
            choiceTwoCount: '10шт',
            choiceThree: flowers.eucalyptus,
            choiceThreeCount: '1шт',
            choiceFour: decor.package,
            choiceFourCount: '1шт',
            choiceFive: decor.ribbon,
            choiceFiveCount: '1шт',
        },
        blok: 'new'
    },
    {
        id: 10,
        title: 'Ромашки',
        img: './img/product/romashka/romashka1.webp',
        category: category.mono,
        cost: 4500,
        params: {
            choiceOne: flowers.peonySara,
            choiceOneCount: '10шт',
            choiceTwo: flowers.peonyDuchesse,
            choiceTwoCount: '10шт',
            choiceThree: flowers.eucalyptus,
            choiceThreeCount: '1шт',
            choiceFour: decor.package,
            choiceFourCount: '1шт',
            choiceFive: decor.ribbon,
            choiceFiveCount: '1шт',
        },
        blok: 'new'
    },
    {
        id: 11,
        title: 'Розы',
        img: './img/product/rose/rose2.webp',
        category: category.mono,
        cost: 6500,
        params: {
            choiceOne: flowers.peonySara,
            choiceOneCount: '10шт',
            choiceTwo: flowers.peonyDuchesse,
            choiceTwoCount: '10шт',
            choiceThree: flowers.eucalyptus,
            choiceThreeCount: '1шт',
            choiceFour: decor.package,
            choiceFourCount: '1шт',
            choiceFive: decor.ribbon,
            choiceFiveCount: '1шт',
        },
        blok: 'new'
    },
    {
        id: 12,
        title: 'Сирень',
        img: './img/product/siren/siren1.webp',
        category: category.mono,
        cost: 1500,
        params: {
            choiceOne: flowers.peonySara,
            choiceOneCount: '10шт',
            choiceTwo: flowers.peonyDuchesse,
            choiceTwoCount: '10шт',
            choiceThree: flowers.eucalyptus,
            choiceThreeCount: '1шт',
            choiceFour: decor.package,
            choiceFourCount: '1шт',
            choiceFive: decor.ribbon,
            choiceFiveCount: '1шт',
        }
        , blok: 'new'
    },
]



const dataSale = [
    {
        id: 13,
        title: 'Париж',
        img: './img/product/rose/rose1.webp',
        category: category.mono,
        cost: 5500,
        params: {
            choiceOne: flowers.peonySara,
            choiceOneCount: '10',
            choiceTwo: flowers.peonyDuchesse,
            choiceTwoCount: '10',
            choiceThree: flowers.eucalyptus,
            choiceThreeCount: '1',
            choiceFour: decor.package,
            choiceFourCount: '1',
            choiceFive: decor.ribbon,
            choiceFiveCount: '1',
        },
        blok: 'sale'
    },
    {
        id: 14,
        title: 'Ромашки',
        img: './img/product/romashka/romashka1.webp',
        category: category.mono,
        cost: 2550,
        params: {
            choiceOne: flowers.peonySara,
            choiceOneCount: '10',
            choiceTwo: flowers.peonyDuchesse,
            choiceTwoCount: '10',
            choiceThree: flowers.eucalyptus,
            choiceThreeCount: '1',
            choiceFour: decor.package,
            choiceFourCount: '1',
            choiceFive: decor.ribbon,
            choiceFiveCount: '1',
        },
        blok: 'sale'
    },
    {
        id: 15,
        title: 'Розы',
        img: './img/product/rose/rose2.webp',
        category: category.mono,
        cost: 3300,
        params: {
            choiceOne: flowers.peonySara,
            choiceOneCount: '10',
            choiceTwo: flowers.peonyDuchesse,
            choiceTwoCount: '10',
            choiceThree: flowers.eucalyptus,
            choiceThreeCount: '1',
            choiceFour: decor.package,
            choiceFourCount: '1',
            choiceFive: decor.ribbon,
            choiceFiveCount: '1',
        },
        blok: 'sale'
    },
    {
        id: 16,
        title: 'Сирень',
        img: './img/product/siren/siren1.webp',
        category: category.mono,
        cost: 3700,
        params: {
            choiceOne: flowers.peonySara,
            choiceOneCount: '10',
            choiceTwo: flowers.peonyDuchesse,
            choiceTwoCount: '10',
            choiceThree: flowers.eucalyptus,
            choiceThreeCount: '1',
            choiceFour: decor.package,
            choiceFourCount: '1',
            choiceFive: decor.ribbon,
            choiceFiveCount: '1',
        },
        blok: 'sale'
    },


]




const dopProduct = [
    {
        id: 17,
        title: 'Шары',
        img: './img/product/shar/shar1.png',
        category: category.balls,
        cost: 1890,
        params: {
            choiceOne: ' ',
            choiceOneCount: ' ',
            choiceTwo: ' ',
            choiceTwoCount: ' ',
            choiceThree: ' ',
            choiceThreeCount: ' ',
            choiceFour: ' ',
            choiceFourCount: ' ',
            choiceFive: ' ',
            choiceFiveCount: ' ',

        }
    },
    {
        id: 18,
        title: 'Медведь',
        img: './img/product/igrushka/igrushka1.png',
        category: category.toys,
        cost: 2100,
        params: {
            choiceOne: ' ',
            choiceOneCount: ' ',
            choiceTwo: ' ',
            choiceTwoCount: ' ',
            choiceThree: ' ',
            choiceThreeCount: ' ',
            choiceFour: ' ',
            choiceFourCount: ' ',
            choiceFive: ' ',
            choiceFiveCount: ' ',

        }
    },
    {
        id: 19,
        title: 'Шары',
        img: './img/product/shar/shar2.png',
        category: category.balls,
        cost: 1890,
        params: {
            choiceOne: ' ',
            choiceOneCount: ' ',
            choiceTwo: ' ',
            choiceTwoCount: ' ',
            choiceThree: ' ',
            choiceThreeCount: ' ',
            choiceFour: ' ',
            choiceFourCount: ' ',
            choiceFive: ' ',
            choiceFiveCount: ' ',

        }
    },
    {
        id: 20,
        title: 'Ваза',
        img: './img/product/vaz/vaz1.png',
        category: category.vase,
        cost: 1550,
        params: {
            choiceOne: ' ',
            choiceOneCount: ' ',
            choiceTwo: ' ',
            choiceTwoCount: ' ',
            choiceThree: ' ',
            choiceThreeCount: ' ',
            choiceFour: ' ',
            choiceFourCount: ' ',
            choiceFive: ' ',
            choiceFiveCount: ' ',

        }

    }


]