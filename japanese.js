const japanese_syllable = ["a", "i", "u", "e", "o","ka", "ki", "ku", "ke", "ko","ga", "gi", "gu", "ge", "go","sa", "shi", "su", "se", "so","za", "ji", "zu", "ze", "zo","ta", "chi", "tsu", "te", "to","na", "ni", "nu", "ne", "no"];
// 35 japanese_symbol.length 
function getRandomInt(max) {
    return Math.floor(Math.random() * max)
} // Создаём функцию, которая выбирает число от 0 до 3
function getrandomsymbol() {
    return japanese_syllable[Math.floor(Math.random() * japanese_syllable.length)]
} // Выбираем номер слога из массива
function getword() {
    let zero;
    let Int = getRandomInt(4)
    let str = '';
    for (zero = -1; zero < Int; zero++) {
    str += ' ' + getrandomsymbol();}
    return str;
}
let Ht = document.getElementById('N');    
Ht.innerHTML = getword();
function showword() {
    let Ht = document.getElementById('N');

    Ht.innerHTML = getword();
}