


const goods = {
    1: {
        id: 1,
        name: 'Шляпа',
        description: 'Одевать на голову',
        sizes: [54, 55, 56, 57, 58, 60, 62],
        price: 355.63,
        available: false,
    },
    2: {
        id: 2,
        name: 'Перчатки',
        description: 'Чтобы руки не мёрзли',
        sizes: [54, 56, 57, 58, 59, 62],
        price: 640.17,
        available: false,
    },
    3: {
        id: 3,
        name: 'Наколенники',
        description: 'Чтобы колени не царапались, если 5 без 4',
        sizes: ['S', 'L', 'X'],
        price: 551.94,
        available: true,
    },
    4: {
        id: 4,
        name: 'Бутерброд',
        description: 'Употреблять после 5',
        sizes: ['S', 'L', 'X', 'XL', 'XXL', 'XXXL'],
        price: 798.21,
        available: true,
    },
    5: {
        id: 5,
        name: 'Водка',
        description: 'RELAX',
        sizes: [.25, .5, .7, 1],
        price: 405.81,
        available: true,
    },
};

let basket = [
    {
        goodId: 5,
        size: 2,
        amount: 3,
    },
    {
        goodId: 4,
        size: 1,
        amount: 1,
    },
];

function addInBasket(addId, addSize, addAmount) {
    if (goods[addId].available === false) {
        return `Товар ${goods[addId].name} отсутствует и не будет добавлен в корзину.`;
    } else if (basket.length === 0) {
        basket.push({ goodId: addId, size: addSize, amount: addAmount });
        return `Товар ${goods[addId].name}, ${goods[addId].sizes[addSize]} в количестве ${addAmount} шт. успешно добавлен в корзину.`;
    } else {
        for (let i = 0; i < basket.length; i++) {
            if (basket[i].goodId === addId && basket[i].size === addSize) {
                basket[i].amount = basket[i].amount + addAmount;
                return `Товар ${goods[addId].name}, ${goods[addId].sizes[addSize]}  в количестве ${addAmount} шт. успешно добавлен в корзину.`;
            } else {
                basket.push({ goodId: addId, size: addSize, amount: addAmount });
                return `Товар ${goods[addId].name}, ${goods[addId].sizes[addSize]} в количестве ${addAmount} шт. успешно добавлен в корзину.`;
            };
        }
    };
};

function delFromBasket(delId, delSize, delAmount) {
    for (let i = 0; i < basket.length; i++) {
        if (basket[i].goodId === delId && basket[i].size === delSize) {
            basket[i].amount = basket[i].amount - delAmount;
            return `Товар ${goods[delId].name}, ${goods[delId].sizes[delSize]} в количестве ${delAmount} шт. был удален из корзины.`;
        };
    }
};

function clearBasket() {
    basket.length = 0;
    return 'Корзина очищена.'
}

function contentsBasket() {
    totalAmount = 0;
    totalSumm = 0;
    basket.forEach((elem) => {
        totalAmount += elem.amount
        totalSumm += goods[elem.goodId].price * elem.amount;
    });
    return `В корзине нахдится ${totalAmount} товаров на сумму ${totalSumm.toFixed(2)}`
}


// 
console.log('Начальное состояние корзины: \n', basket);

console.log(addInBasket(1, 2, 1));
console.log(addInBasket(4, 1, 1));
console.log(addInBasket(5, 2, 1));
console.log(addInBasket(5, 1, 2));
console.log(delFromBasket(5, 1, 1));

console.log('Корзина после добавления/удаления товаров: \n', basket);

console.log(contentsBasket());

console.log(clearBasket());
console.log(basket);