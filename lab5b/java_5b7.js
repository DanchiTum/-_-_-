function CheckAnagram() {
    const word1 = document.getElementById("word1").value.toLowerCase();
    const word2 = document.getElementById("word2").value.toLowerCase();

    if (areAnagrams(word1, word2)) {
        document.getElementById("Result7").textContent = "Це анаграми!";
    } else {
        document.getElementById("Result7").textContent = "Це не анаграми.";
    }
}
function areAnagrams(word1, word2) {
    const cleanWord1 = word1.replace(/[^a-z]/g, "").split('').sort().join('');
    const cleanWord2 = word2.replace(/[^a-z]/g, "").split('').sort().join('');

    return cleanWord1 === cleanWord2;
}