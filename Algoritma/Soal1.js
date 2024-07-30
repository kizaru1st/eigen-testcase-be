// Terdapat string "NEGIE1", silahkan reverse alphabet nya dengan angka tetap diakhir kata Hasil = "EIGEN1"
const reverseWord = (word) => {
    const words = word.match(/[A-Za-z]/g) || [];
    const numbers = word.match(/[0-9]/g) || [];
    const reverseItem = words.reverse().join('');
    return reverseItem + numbers.join('');
}

const input = "NEGIE1";
const result = reverseWord(input);
console.log(result); 
