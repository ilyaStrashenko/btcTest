{
    const burger = document.getElementById('burger');
    const burgerBlok = document.getElementById('burger-blok');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active')
        burgerBlok.classList.toggle('active')
    })

    const menu = document.getElementById('menu');
    const menuBlok = document.getElementById('menu-blok');
    const menuClose = document.getElementById('menu-close');

    menu.addEventListener('click', () => {
        menu.classList.toggle('active')
        menuBlok.classList.toggle('active')
    })
    menuClose.addEventListener('click', () => {
        menu.classList.remove('active')
        menuBlok.classList.remove('active')
    })

    const prev = document.getElementById('btn-prev'),
        next = document.getElementById('btn-next'),
        slides = document.querySelectorAll('.slide'),
        dots = document.querySelectorAll('.dot');

    let index = 0;

    const activeSlide = n => {
        for (slide of slides) {
            slide.classList.remove('active');
        }
        slides[n].classList.add('active');
    }


    const activedotSlide = n => {
        for (dot of dots) {
            dot.classList.remove('active');
        }
        dots[n].classList.add('active');
    }



    const prepareCurrentSlide = ind => {
        activeSlide(ind);
        activedotSlide(ind);
    }


    const nextSlide = () => {
        if (index == slides.length - 1) {
            index = 0;
            prepareCurrentSlide(index);
        } else {
            index++;
            prepareCurrentSlide(index);
        }
    }

    const prevSlide = () => {
        if (index == 0) {
            index = slides.length - 1
            prepareCurrentSlide(index);
        } else {
            index--;
            prepareCurrentSlide(index);
        }
    }

    dots.forEach((item, indexDot) => {
        item.addEventListener('click', () => {
            index = indexDot;
            prepareCurrentSlide(index);
        })
    })


    next.addEventListener('click', nextSlide);
    prev.addEventListener('click', prevSlide);


    setInterval(nextSlide, 2500);



}

//генерация карточки 
function generateCards(item) {
    const cards = [];
    for (let i = 0; i < item.length; i++) {


        cards.push(`
        <div id='${item[i].id}'class="product__card ${item[i].blok}">
            <div class='category'>${item[i].category}</div>
            <div class='params params-one'>${item[i].params.choiceOne}</div>
            <span class='params params-oneCount'>${item[i].params.choiceOneCount}</span>
            <div class='params params-two'>${item[i].params.choiceTwo}</div>
            <div class='params params-twoCount'>${item[i].params.choiceTwoCount}</div>
            <div class='params params-three'>${item[i].params.choiceThree}</div>
            <div class='params params-threeCount'>${item[i].params.choiceThreeCount}</div>
            <div class='params params-four'>${item[i].params.choiceFour}</div>
            <div class='params params-fourCount'>${item[i].params.choiceFourCount}</div>
            <div class='params params-five'>${item[i].params.choiceFive}</div>
            <div class='params params-fiveCount'>${item[i].params.choiceFiveCount}</div>

            
            <img data-img  src="${item[i].img}" alt="" class="product__img">
            <div class="product__title">${item[i].title}</div>
            <div class="product__category">${item[i].category}</div>
            <div class="product__cost">${item[i].cost}<span>₽</span></div>
            <button data-card  class="product__btn">В корзину</button>
        </div>
        `)

    }
    return cards




}

//карточки популярные
const popularItemPopular = document.getElementById('popular__item-popular')
const cardsPopular = generateCards(dataPopular)
popularItemPopular.innerHTML = cardsPopular.join('')
//карточки новые 
const popularItemNew = document.getElementById('popular__item-new')
const cardsNew = generateCards(dataNew)
popularItemNew.innerHTML = cardsNew.join('')
//карточка акции
const popularItemSale = document.getElementById('popular__item-sale')
const cardsSale = generateCards(dataSale)
popularItemSale.innerHTML = cardsSale.join('')




//Клик по карточке  добавления в массив
const card = document.querySelector('.card');
const basket = document.querySelector('.basket');
const basketBlok = document.querySelector('.basket__blok');
const productBtn = document.querySelectorAll('.product__btn');
const cardQ = document.getElementById('card-q');
const backetCardSum = document.querySelector('.backet__cardSum')
const backetBtn = document.querySelector('.backet__btn')
const basketClose = document.getElementById('closet');
const empty = document.querySelector('.empty');
const backetSum = document.querySelector('.backet__sum');
const cardSum = document.querySelector('.card-sum ');
const main = document.querySelector('.main');





const cardArr = [];
let summa = [];





//Клик по корзине
card.addEventListener('click', () => {
    basket.classList.toggle('active')
    Job()
})

//Отслеживает клик по кнопке товара 
window.addEventListener('click', function (event) {
    if (event.target.hasAttribute('data-card')) {
        let cardProduct = event.target.closest('.product__card');
        const productInfo = {
            imgSrc: cardProduct.querySelector('.product__img').getAttribute('src'),
            title: cardProduct.querySelector('.product__title').innerText,
            category: cardProduct.querySelector('.product__title').innerText,
            cost: cardProduct.querySelector('.product__cost').innerText,
        }
        let costText = productInfo.cost.slice(0, -1)
        summa.push(Number(costText))
        let arrya = add(summa)
        console.log(arrya);

        backetSum.innerHTML = arrya + '₽';
        cardSum.innerHTML = arrya + '₽';


        cardArr.push(productInfo)
        cardQsum(cardArr)
        const cardInnerHtml = `
        <div class="backet__card">
            <img src="${productInfo.imgSrc}" alt="" class="basket__img">
            <div class="basket__info">
                <h4 class="info__title">${productInfo.title}</h4>
                <div class="basket__cors">${productInfo.cost}</div>
            </div>
           <span id='closet' class='basket__close'>X</span>
        </div>
     </div>
    `
        basketBlok.insertAdjacentHTML("beforeend", cardInnerHtml)

    }
    if (event.target.querySelectorAll('.basket__close')) {
        cardQsum(cardArr)
        event.target.closest('.backet__card').remove()
        cardArr.pop()
        cardQsum(cardArr)
        summa.pop()
    }
    let arrya = add(summa)
    backetSum.innerHTML = arrya + '₽';
    cardSum.innerHTML = arrya + '₽';
})




add = function (arr) {
    return Number(arr.reduce((a, b) => a + b, 0))
};

// считает колличество товаров в корзине 
function cardQsum(q) {
    for (let i = 0; i <= q.length; i++) {

        if (cardArr.length > 0) {
            empty.style.display = "none";
            backetCardSum.style.display = "flex";
            backetBtn.style.display = "block";

        } else if (cardArr.length <= 0) {

            empty.style.display = "flex";
            backetCardSum.style.display = "none";
            backetBtn.style.display = "none";
        }

    }
    return cardQ.innerHTML = q.length;
}


window.addEventListener('click', function (event) {
    if (event.target.hasAttribute('data-img')) {

        const cardsSostavLink = document.querySelectorAll('.cards__sostav-link')

        var swiper = new Swiper(".mySwiper", {
            effect: "cards",
            grabCursor: true,
        });

        let cardProducts = event.target.closest('.product__card');
        const productInfos = {
            imgSrc: cardProducts.querySelector('.product__img').getAttribute('src'),
            title: cardProducts.querySelector('.product__title').innerText,
            category: cardProducts.querySelector('.category').innerText,
            cost: cardProducts.querySelector('.product__cost').innerText,
            paramsOne: cardProducts.querySelector('.params-one').innerText,
            paramsOneCount: cardProducts.querySelector('.params-oneCount').innerText,
            paramsTwo: cardProducts.querySelector('.params-two').innerText,
            paramsTwoCount: cardProducts.querySelector('.params-twoCount').innerText,
            paramsThree: cardProducts.querySelector('.params-three').innerText,
            paramsThreeCount: cardProducts.querySelector('.params-threeCount').innerText,
            paramsFour: cardProducts.querySelector('.params-four').innerText,
            paramsFourCount: cardProducts.querySelector('.params-fourCount').innerText,
            paramsFive: cardProducts.querySelector('.params-five').innerText,
            paramsFiveCount: cardProducts.querySelector('.params-fiveCount').innerText,

        }

        const cardsInnerHtml =

            ` 
            <div class="navigation">
                <div class="container">
                    <div class="navigation-menu">
                        <a href="./index.html" class="navigation-menu-link">
                            <img src="./img/navigation/home.webp" alt="" class="navigation-menu-link">
                        </a>
                        <img class="link-menu-navigation navigation-menu-link " src="./img/navigation/strelk.webp" alt="">
                            <a href=""><span class=" navigation-menu-text">Каталог</span></a>
                            <img class="link-menu-navigation navigation-menu-link " src="./img/navigation/strelk.webp" alt="">
                                <a href=""><span class=" navigation-menu-text">${productInfos.category}</span></a>
                                <img class="link-menu-navigation navigation-menu-link " src="./img/navigation/strelk.webp" alt="">
                                    <a href=""><span class=" navigation-menu-text">${productInfos.title}</span></a>
                                </div>
                            </div>
                    </div>
                    <div class="container">
                        <div class="cards__blok">
                            <div class="cards__item">
                                <div class="swiper mySwiper">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <img class="swiper-slide-img" src="${productInfos.imgSrc}" alt="">
                                        </div>
                                        <div class="swiper-slide">
                                            <img class="swiper-slide-img" src="${productInfos.imgSrc}" alt="">
                                        </div>
                                        <div class="swiper-slide">
                                            <img class="swiper-slide-img" src="${productInfos.imgSrc}" alt="">
                                        </div>
                                        <div class="swiper-slide">
                                            <img class="swiper-slide-img" src="${productInfos.imgSrc}" alt="">
                                        </div>
                                        <div class="swiper-slide">
                                            <img class="swiper-slide-img" src="${productInfos.imgSrc}" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="cards__item">
                                <div class="cards__info">
                                    <h2 class="cards__title">${productInfos.title}</h2>
                                    <div class="cards__sostav">
                                        <h4 class="cards__sostav-title">Состав:</h4>
                                        <ul class="cards__sostav-list">
                                            <li class="cards__sostav-link">
                                                <span>${productInfos.paramsOne}</span>
                                                <span>${productInfos.paramsOneCount}</span>
                                            </li>
                                            <li class="cards__sostav-link">
                                                <span>${productInfos.paramsTwo}</span>
                                                <span>${productInfos.paramsTwoCount}</span>
                                            </li>
                                            <li class="cards__sostav-link">
                                                <span>${productInfos.paramsThree}</span>
                                                <span>${productInfos.paramsThreeCount}</span>
                                            </li>
                                            <li class="cards__sostav-link">
                                                <span>${productInfos.paramsFour}</span>
                                                <span>${productInfos.paramsFourCount}</span>
                                            </li>
                                            <li class="cards__sostav-link">
                                                <span>${productInfos.paramsFive}</span>
                                                <span>${productInfos.paramsFiveCount}</span>
                                            </li>
                                        </ul>
                                        <div class="cards-cost">${productInfos.cost}</div>
                                        <div class="cards__btn">
                                            <button class="product__btn">в корзину</button>
                                            <button class="favorites">В избранное</button>
                                        </div>
                                        <button class="buy favorites">Заказать в 1 клик</button>
                                        <div class="cards__info-blok">
                                            <h4 class="cards__sostav-title">Примечание</h4>
                                            <div class="cards__info-text">В связи с сезонностью и условиями поставки цветов компания
                                                оставляет за собой право изменить состав и внешний вид товара, но не более чем на
                                                20-25%. </div>
                                        </div>
                                        <div class="cards__info-blok">
                                            <h4 class="cards__sostav-title">описание</h4>
                                            <div class="cards__info-text">Внутри коробки установлена колба с водой.
                                                Шляпную коробку нельзя сильно наклонять или ронять, держите только в вертикальном
                                                положении. Шляпная коробка доставляется в специальной крафт-коробке с удобными
                                                ручками и закрывающейся крышкой для удобства транспортировки.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section class="dop__product">
                        <div class="container">
                            <div class="dop">
                                <h4 class="dop__title">Добавьте к заказу</h4>
                                <div id="popularitemDop" class="popular__item">

                                </div>
                            </div>
                        </div>
                    </section>


                    `
        main.innerHTML = cardsInnerHtml

        var swiper = new Swiper(".mySwiper", {
            effect: "cards",
            grabCursor: true,
        });

        let timeOut;
        function goUp() {
            var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
            if (top > 0) {
                window.scrollBy(0, -10000);
                timeOut = setTimeout('goUp()', 1);
            } else clearTimeout(timeOut);
        }
        goUp()


        const popularItemDop = document.getElementById('popularitemDop')
        const cardsDop = generateCards(dopProduct)
        popularItemDop.innerHTML = cardsDop.join('');

        const ifItem = (item) => {
            if (item = ' ') {
                item.style.display = "none";
            } else {
                item
            }
        }
    }

})








