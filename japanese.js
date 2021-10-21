const JAPANESE_SYLLABLE = ["a", "i", "u", "e", "o","ka", "ki", "ku", "ke", "ko","ga", "gi", "gu", "ge", "go","sa", "shi", "su", "se", "so","za", "ji", "zu", "ze", "zo","ta", "chi", "tsu", "te", "to","na", "ni", "nu", "ne", "no"];

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}
function getRandomSymbol() {
    return JAPANESE_SYLLABLE[Math.floor(Math.random() * japanese_syllable.length)]
}
function getword() {
    let zero;
    let Int = getRandomInt(4)
    let str = '';
    for (zero = -1; zero < Int; zero++) {
    str += ' ' + getRandomSymbol();}
    return str;
}
let Ht = document.getElementById('N');    
Ht.innerHTML = getword();
function showword() {
    let Ht = document.getElementById('N');

    Ht.innerHTML = getword();
}