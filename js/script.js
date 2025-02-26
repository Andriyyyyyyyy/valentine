console.log('Sript connected');

const arrayOfLoveWishes = [
    "Нехай наша любов буде вічною і наповненою щастям!",
    "Кожен день із тобою – це справжній подарунок долі!",
    "Я бажаю тобі безмежного щастя, бо твоє щастя – це і моє щастя!",
    "Нехай наша любов буде як зірки – яскрава і нескінченна!",
    "Я хочу розділити з тобою всі радощі та перемоги цього життя!",
    "Ти – найцінніший скарб у моєму житті, і я безмежно тебе люблю!",
    "Нехай наші серця завжди б'ються в унісон!",
    "Моя любов до тебе зростає з кожним днем, і це назавжди!",
    "Ти – моя доля, моя мрія і моє натхнення!",
    "Бажаю тобі завжди відчувати моє тепло, навіть якщо я не поруч!",
    "Нехай кожен наш день буде сповнений радості та ніжності!",
    "Ти – моя друга половинка, без якої я не уявляю свого життя!",
    "Я вдячний (вдячна) долі за кожну мить, яку ми проводимо разом!",
    "Люблю тебе більше, ніж слова можуть висловити!",
    "Нехай наші почуття ніколи не згасають, а лише стають міцнішими!",
    "Ти робиш моє життя особливим і наповненим сенсом!",
    "Бажаю тобі завжди посміхатися, бо твоя усмішка – найкраще, що я бачив (бачила)!",
    "Я буду поруч з тобою завжди, незалежно від обставин!",
    "Нехай наша любов буде як океан – глибока, безкрайня і могутня!",
    "Ти – моє серце, моя душа і найбільше кохання всього мого життя!"
];

document.getElementById('btn_wishes').addEventListener('click', function() {
   // alert('Button clicked');
   let index = Math.floor(Math.random() * arrayOfLoveWishes.length)
   console.log('Номер елементу масиву - ', index);
    document.getElementById('p_wishes').innerText = arrayOfLoveWishes[index];
});

let countOfHearts = 5
console.log('countOfHearts = ' + countOfHearts)

document.getElementById('count_of_hearth').innerText = '❤️'.repeat(countOfHearts)

// Опрацювання натискання на кнопку "Отримати побажання"
document.getElementById('btn_buy_hearths').addEventListener('click', () => {

    console.log('Button clicked')

    let index = Math.floor(Math.random() * arrayOfLoveWishes.length)

    //console.log('Номер елемента масиву = ', index);

    document.getElementById('p_love_wishes').innerText = arrayOfLoveWishes[index];

    countOfHearts--
    console.log('count_of_hearths ' + count_of_hearths)
    document.getElementById('count_of_hearth').innerText = '❤️'.repeat(countOfHearts) + '♡'.repeat(5 - countOfHearts)

    if(countOfHearts == 0) {
        document.getElementById('btn_love_wishes').style.display = 'none'
    }
})

// Опрацювання натискання на кнопку "Купити ❤️"
document.getElementById('btn_buy_hearths').addEventListener('click', () => {
    countOfHearts = 5
    document.getElementById('count_of_hearth').innerText = '❤️'.repeat(countOfHearts)
    document.getElementById('btn_love_wishes').style.display = 'count_of_hearth'
    document.getElementById('p_love_wishes').innerText = ''

    console.log('btn-buy-hearts clicked')
})