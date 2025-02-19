document.getElementById('btn_wishes').addEventListener(click);
console.log('Script connected.');

const arrayOfLoveWishes = [
    'Кохайте один одного! Це найважливіше!', // 0
    'Будьте щасливі!', // 1
    'Живіть у мирі!', // 2
    'Кохання це важливо!', // 3
    'Живіть у мирі!' // 4
];

document.getElementById('btn_wishes').addEventListener('click', () => {
    // alert('Button clicked'); // Для тестування можна розкоментувати
    let index = Math.floor(Math.random() * arrayOfLoveWishes.length);
    document.getElementById('p_wishes').innerText = arrayOfLoveWishes[index];

    
